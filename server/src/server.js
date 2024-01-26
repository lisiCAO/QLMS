const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./models"); //import models and sequelize instance
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const authController = require('./controllers/authController'); 
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();

// sync database
db.sequelize
    .sync()
    .then(() => {
        console.log("Database synced");
    })
    .catch((error) => {
        console.error("Error syncing database: ", error);
    });

// define routes
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
    res.json(`Hello, this is the QLMS backend server on port ${PORT}!`);
});

// app.use('/api', require('./routes/api'));

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  }, authController.googleAuthCallback));
  
  passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(obj, done) {
    done(null, obj);
  });
  
  app.use(passport.initialize());
  
  app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] }));
  
  app.get('/auth/google/callback', 
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
      res.cookie('jwt', req.user.token, { httpOnly: true });
      res.redirect('/'); 
    });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
