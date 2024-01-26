const jwt = require('jsonwebtoken');
const db = require('../models/index'); 
const OAuthToken = db.OAuthToken;

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
    oauth_provider: 'Google',
    oauth_provider_user_id: profile.id,
    email: profile.emails[0].value,
    first_name: profile.name.givenName,
    last_name: profile.name.familyName
  };

  findOrCreateUser(userData, (err, user) => {
    if (err) {
        return done(err);
      }

    saveOrUpdateOAuthToken(user.userId, accessToken, refreshToken);

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    done(null, { user, token });
  });
};

const saveOrUpdateOAuthToken = (userId, accessToken, refreshToken) => {
    OAuthToken.upsert({
      userId: userId,
      accessToken: accessToken,
      refreshToken: refreshToken,
      expiresIn: new Date(Date.now() + 3600000), 
      provider: 'Google'
    })
    .then(() => console.log('OAuth Token saved or updated'))
    .catch(err => console.error('Error saving OAuth Token:', err));
  }

// Other Methods
