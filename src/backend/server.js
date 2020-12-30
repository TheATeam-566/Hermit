const express = require('express');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
const passport = require('./services/passport');
const menuRouter = require('./routes/menu');
const oauthRouter = require('./routes/authRoutes');

const app = express();
const PORT = 8000;

// Specify the cookie secret. Persis this cookie for 7 days.
app.use(
  cookieSession({
    keys: [keys.cookie],
    maxAge: 7 * 24 * 60 * 60 * 1000,
  })
);
// Use middlewares
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/menu', menuRouter); // Use the menu api
app.use('/auth', oauthRouter); // Auth routes

app.listen(PORT, () => console.log(`Express server started on port ${PORT}`));

module.exports = app;
