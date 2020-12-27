const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');
const oauthKeys = require('../config/keys');
const writeUserData = require('../models/UserData');
const getUser = require('../models/UserData');
const db = require('./firestore');

passport.serializeUser((user, done) => {
  console.log('hi there partner');
  done(null, user);
});

passport.deserializeUser((id, done) => {
  console.log('hi there partner');
  done(null, id);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: oauthKeys.googleClientID,
      clientSecret: oauthKeys.googleClientSecret,
      callbackURL: 'http://localhost:8000/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      // console.log(profile);
      const data = {
        id: profile.id,
        // address: profile.address,
        fName: profile.name.givenName,
        lName: profile.name.familyName,
        // email: profile.emails[0].value,
        // image: profile.photos[0].value,
        auth: 'Google',
      };
      const newUser = new User(data);
      // const test = getUser();
      // console.log(data);
      // const newLocal = writeUserData(newUser);
      db.collection('users')
        .doc(`${newUser.id}`)
        .set(JSON.parse(JSON.stringify(newUser))); // insert into DB worked - see https://stackoverflow.com/questions/46578701/firestore-add-custom-object-to-db
      passport.serializeUser(newUser, done);
      console.log(newUser);
      return done(null, { newUser });
    }
  )
);

module.exports = passport;
