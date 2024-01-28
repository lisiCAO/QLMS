const express = require("express");
const db = require('./models');
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const {sendSuccessResponse,sendErrorResponse} = require("./middleWares/responseHandler");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8000;

// Express App Settings
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Error and Format Middlewares
app.use(sendSuccessResponse);
app.use(sendErrorResponse);

// Session init
app.use(session({
    secret: process.env.SESSION_SECRET, // 用于签名 session ID 的秘钥，建议使用随机字符串
    resave: false, // 强制保存 session 即使它没有变化
    saveUninitialized: true, // 强制将未初始化的 session 存储
    cookie: { secure: false }, // 如果为 true，则只通过 HTTPS 发送 cookie
    // 注意：在生产环境中，应设置 secure 为 true，并确保网站使用 HTTPS
})
);

// Passport Init
app.use(passport.initialize());
app.use(passport.session());

// Passport serilize and deserialize
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

const authController = require("./controllers/authController");
// GoogleStrategy
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/api/auth/google/callback"
},
// Handle by authController.googleAuthCallback function
authController.googleAuthCallback
));

// Database sync
db.sequelize.sync({ force: true }) // force: true will drop the table if it already exists, default value is false, Production environment should set it to false
    .then(() => {
        console.log('Database synced');

        // Do not do  anything before database sync
        const authRoutes = require('./routes/authRoutes');
        const propertyRoutes = require("./routes/propertyRoutes.js"); 
        // Import other routes...

        // Use routes
        app.get("/", (req, res) => {res.json(`Hello, this is the QLMS backend server on port ${PORT}!`);});
        app.use('/api/auth', authRoutes);
        app.use('/api/properties', propertyRoutes);
        // Use other routes...

        // Listen to port
        const PORT = process.env.PORT || 8000;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error syncing database: ', error);
    });

// Path: server/src/routes/authRoutes.js
