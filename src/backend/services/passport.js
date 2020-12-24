const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');
const oauthKeys = require('../config/keys');

passport.use(
  new GoogleStrategy(
    {
      clientID: oauthKeys.googleClientID,
      clientSecret: oauthKeys.googleClientSecret,
      callbackURL: 'http://localhost:8000/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(User);
      // const newUser = new User();
      // newUser({
      //   googleId: profile.id,
      // });
      done('error', User);
    }
  )
);

module.exports = passport;
