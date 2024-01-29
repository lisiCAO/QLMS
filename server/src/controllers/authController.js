const jwt = require("jsonwebtoken");
const { oauth_token, user } = require("../models/index");
const OAuthToken = oauth_token;
const bcrypt = require("bcryptjs"); 

const User = user;

const findOrCreateUser = (userData, callback) => {
    User.findOrCreate({
        where: {
            oauth_provider_user_id: userData.oauth_provider_user_id,
            oauth_provider: userData.oauth_provider,
        },
        defaults: userData,
    })
        .then(([user, created]) => {
            callback(null, user);
        })
        .catch((err) => {
            callback(err, null);
        });
};

exports.googleAuthCallback = (accessToken, refreshToken, profile, done) => {
    const userData = {
        oauth_provider: profile.provider,
        oauth_provider_user_id: profile.id,
        email: profile.emails[0].value,
        first_name: profile.name.givenName,
        last_name: profile.name.familyName,
        username: profile.emails[0].value,
        role: "tenant",
    };

    findOrCreateUser(userData, (err, user) => {
        if (err) {
            return done(err);
        }
        saveOrUpdateOAuthToken(
            user.id,
            accessToken,
            refreshToken,
            profile.provider,
            profile.id
        );
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });
        done(null, { user, token });
    });
};

const saveOrUpdateOAuthToken = (
    userId,
    accessToken,
    refreshToken,
    provider,
    oauth_provider_user_id
) => {
    OAuthToken.upsert({
        user_id: userId,
        access_token: accessToken,
        refresh_token: refreshToken,
        expires_in: new Date(Date.now() + 3600000),
        provider: provider,
        oauth_provider_user_id: oauth_provider_user_id,
    })
        .then(() => console.log("OAuth Token saved or updated"))
        .catch((err) => console.error("Error saving OAuth Token:", err));
    console.log("userId:", userId);
};

exports.googleSendToken = (req, res) => {
    res.cookie("jwt", req.user.token, { httpOnly: true });
    console.log("req.user:", req.user);
    res.redirect("/");
};

// Other Methods
// register a new user
exports.register = async (req, res) => {
    try {
        const { username, email, password, role } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            username,
            email,
            password_hash: hashedPassword,
            role,
        });

        res.sendSuccess(newUser, "User registered successfully");
    } catch (error) {
        res.sendError("Registration failed: " + error.message, 500);
    }
};

// user login
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.sendError("User not found", 404);
        }

        const isMatch = await bcrypt.compare(password, user.password_hash);
        if (!isMatch) {
            return res.sendError("Password is incorrect", 401);
        }

        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });
        res.sendSuccess({ token }, "Login successful");
    } catch (error) {
        res.sendError("Login failed: " + error.message, 500);
    }
};
