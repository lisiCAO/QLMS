const jwt = require('jsonwebtoken');
const db = require('../models/index');
const OAuthToken = db.oauth_token;

const User = db.user;

const findOrCreateUser = (userData, callback) => {
  User.findOrCreate({
    where: { oauth_provider_user_id: userData.oauth_provider_user_id, oauth_provider: userData.oauth_provider },
    defaults: userData
  })
    .then(([user, created]) => {
      callback(null, user);
    })
    .catch(err => {
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
    role: "tenant"
  };

  findOrCreateUser(userData, (err, user) => {
    if (err) {
      return done(err);
    }
    saveOrUpdateOAuthToken(user.id, accessToken, refreshToken, profile.provider, profile.id);
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    done(null, { user, token });
  });

};

const saveOrUpdateOAuthToken = (userId, accessToken, refreshToken, provider, oauth_provider_user_id) => {
  OAuthToken.upsert({
    user_id: userId,
    access_token: accessToken,
    refresh_token: refreshToken,
    expires_in: new Date(Date.now() + 3600000),
    provider: provider,
    oauth_provider_user_id: oauth_provider_user_id
  })
    .then(() => console.log('OAuth Token saved or updated'))
    .catch(err => console.error('Error saving OAuth Token:', err));
}

// Other Methods