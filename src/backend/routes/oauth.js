const express = require('express');

const router = express.Router();

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const oauthKeys = require('../oauthKey');

passport.use(
  new GoogleStrategy(
    {
      clientID: oauthKeys.googleclientID,
      clientSecret: oauthKeys.googleclientSecret,
      callbackURL: '/auth/google/callback',
    },
    (accessToken, refreshToken, profile) => {
      console.log('access token: ', accessToken);
      console.log('refresh token: ', refreshToken);
      console.log('profile: ', profile);
    }
  )
);

router.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);
router.get(
  'http://localhost:8000/auth/google/callback',
  passport.authenticate('google'),
  (req, res) => {
    res.redirect('http://hermitapp.me');
    res.send('you reached the redirect URI');
  }
);

/*
app.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    console.log('this is the request:', req);

    // Successful authentication, redirect home.
    res.redirect('http://hermitapp.me');
    console.log('this is after hermitapp.me');
  }
);
*/

module.exports = router;
