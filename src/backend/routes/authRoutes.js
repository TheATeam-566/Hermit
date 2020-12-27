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

router.get('/callback', passport.authenticate('google'));

router.get('/current_user', (req, res) => {
  res.sendStatus(req.user);
});

module.exports = router;
