const express = require('express');
const menuRouter = require('./routes/menuitems');
const drinkRouter = require('./routes/drinkitems');

const app = express();
const port = 8000;

app.use('/api/menuitems', menuRouter);
app.use('/api/drinkitems', drinkRouter);

app.listen(port, () => console.log(`Express server started on port ${port}`));

module.exports = app;
