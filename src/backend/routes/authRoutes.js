const express = require('express');
const passport = require('../services/passport');

const router = express.Router();

router.get(
  '/',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);
router.get(
  '/callback',
  passport.authenticate('google', { failureRedirect: 'http://google.ca' }),
  (req, res) => {
    res.redirect('/');
    res.send('you reached the redirect URI');
  }
);

module.exports = router;
