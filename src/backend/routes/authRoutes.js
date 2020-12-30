const express = require('express');
const passport = require('../services/passport');

const router = express.Router();

// this method is used to test whether a user has been authenticated or not
const isUserAuthenticated = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.send('User is not authenticated!');
  }
};

// This route will use the method above to determine whether or not a user has been authenticated.
// Used for testing purposes.
router.get('/test', isUserAuthenticated, (req, res) => {
  res.send('User is authenticated');
});

// Sends the current user who is logged in.
// Used for testing purposes.
router.get('/current_user', (req, res) => {
  res.send(req.user);
});

// Used in the Google OAuth flow. Specify email and user profile to return.
router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['email', 'profile'],
  })
);

// Callback function when a user is properly authenticated.
router.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: 'http://hermitapp.me',
    failureRedirect: 'http://google.ca',
  }),
  (req, res) => {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
  }
);

// Logs the user out.
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('http://hermitapp.me');
});

module.exports = router;
