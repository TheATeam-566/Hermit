const express = require('express');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
const passport = require('./services/passport');
const drinkRouter = require('./routes/drinkitems');
const menuRouter = require('./routes/menu');
const oauthRouter = require('./routes/authRoutes');

const app = express();
const port = 8000;

app.use(
  cookieSession({
    keys: [keys.cookie],
    maxAge: 7 * 24 * 60 * 60 * 1000,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/drinkitems', drinkRouter);
app.use('/api/menu', menuRouter);
app.use('/auth/google', oauthRouter);
app.listen(port, () => console.log(`Express server started on port ${port}`));

module.exports = app;
