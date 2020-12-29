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

// this route will use the method above to determine whether or not a user has been authenticated
router.get('/test', isUserAuthenticated, (req, res) => {
  res.send('User is authenticated');
});

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['email', 'profile'],
  })
);

router.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: 'http://localhost:3000',
    failureRedirect: 'http://google.ca',
  }),
  (req, res) => {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
  }
);

router.get('/current_user', (req, res) => {
  res.send(req.user);
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('http://localhost:3000/');
});

module.exports = router;
