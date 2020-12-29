const express = require('express');
const passport = require('../services/passport');

const router = express.Router();

router.get(
  '/',
  passport.authenticate('google', {
    scope: ['email', 'profile'],
  })
);

// router.get(
//   '/callback',
//   passport.authenticate('google', {
//     successRedirect: 'http://localhost:3000',
//     failureRedirect: 'http://google.ca',
//   }),
//   (req, res) => {
//     res.redirect('http://localhost:8000/auth/google/callback');
//     res.send('you reached the redirect URI');
//   }
// );

router.get(
  '/callback',
  passport.authenticate('google', {
    successRedirect: 'http://localhost:3000',
    failureRedirect: 'http://google.ca',
  }),
  (req, res) => {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    // console.log(req.user);
  }
);

router.post(
  '/callback',
  passport.authenticate('google', (req, res) => {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    // console.log(req.user.username);
  })
);

router.get('/current_user', (req, res) => {
  res.sendStatus(req.user.username);
});

module.exports = router;
