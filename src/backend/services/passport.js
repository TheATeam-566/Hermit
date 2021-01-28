const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');
const oauthKeys = require('../config/keys');
const { getUser, getOrSetUser } = require('../models/UserData');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  getUser(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: oauthKeys.googleClientID,
      clientSecret: oauthKeys.googleClientSecret,
      callbackURL: '/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      const data = {
        id: profile.id,
        fName: profile.name.givenName,
        lName: profile.name.familyName,
        email: profile._json.email,
        image: profile._json.picture,
        auth: profile.provider,
        accessToken,
        dateUserCreated: new Date().toLocaleString(),
      };

      // create a new user object using the data object created above
      const newUser = new User(data);
      getOrSetUser(newUser).then((user) => {
        done(null, user);
      });
    }
  )
);

module.exports = passport;
