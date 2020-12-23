const express = require('express');

// const menuRouter = require('./routes/menuitems');
const drinkRouter = require('./routes/drinkitems');
const menuRouter = require('./routes/menu');
const oauthRouter = require('./routes/oauth');

const app = express();
const port = 8000;

// app.use('/api/menuitems', menuRouter);

app.use('/api/drinkitems', drinkRouter);
app.use('/api/menu', menuRouter);
app.use('/auth/google', oauthRouter);
// app.use('/api/menu/categories', menuRouter);
app.listen(port, () => console.log(`Express server started on port ${port}`));

module.exports = app;
