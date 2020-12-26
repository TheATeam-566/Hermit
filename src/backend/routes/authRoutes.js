const express = require('express');
const passport = require('../services/passport');

const router = express.Router();

router.get(
  '/',
  passport.authenticate('google', {
    scope: ['https://www.googleapis.com/auth/plus.login'],
  })
);
router.get(
  '/callback',
  passport.authenticate('google', {
    successRedirect: 'http://localhost:3000',
    failureRedirect: 'http://google.ca',
  }),
  (req, res) => {
    res.redirect('http://localhost:8000/auth/google/callback');
    res.send('you reached the redirect URI');
  }
);

module.exports = router;
