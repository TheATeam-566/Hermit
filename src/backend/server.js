const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const cors = require('cors');

const keys = require('./config/keys');
const passport = require('./services/passport');
const menuRouter = require('./routes/menu');
const oauthRouter = require('./routes/auth');
const userRouter = require('./routes/user');
const stripeRouter = require('./routes/stripe');

const app = express();
const PORT = 8000;

app.use(cors());
// Specify the cookie secret. Persis this cookie for 7 days.
app.use(
  cookieSession({
    keys: [keys.cookie],
    maxAge: 7 * 24 * 60 * 60 * 1000,
  })
);

// Use middlewares
// For information on why we need bodyParser in order to access the body of a post request when using express: https://stackoverflow.com/questions/38306569/what-does-body-parser-do-with-express
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use('/api/menu', menuRouter); // Use the menu api
app.use('/submit', menuRouter); // Use the submit api fr
app.use('/auth', oauthRouter); // Auth routes
app.use('/user', userRouter, cors());
app.use('/api/stripe', stripeRouter);

app.listen(PORT, () => console.log(`Express server started on port ${PORT}`));

module.exports = app;
