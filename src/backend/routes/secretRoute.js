const express = require('express');

const router = express.Router();

function isUserAuthenticated(req, res, next) {
  if (req.user) {
    next();
  } else {
    res.send('You must login!');
  }
}
router.get('/', isUserAuthenticated, (req, res) => {
  res.send('You have reached the secret route');
});

module.exports = router;
