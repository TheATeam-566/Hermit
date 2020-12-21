const express = require('express');
// const cors = require('cors');
const menuRouter = require('./routes/menuitems');
const drinkRouter = require('./routes/drinkitems');

const app = express();
const port = 8000;

// const whitelist = [
//   'http://localhost:8000',
//   'http://localhost:5000',
//   'http://localhost:3000',
//   'http://hermitapp.me:8000',
//   'http://hermitapp.me:5000',
// ];
// const corsOptions = {
//   origin(origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
// };

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });

// app.use(cors(corsOptions));

app.use('/menuitems', menuRouter);
app.use('/drinkitems', drinkRouter);

app.listen(port, () => console.log(`Express server started on port ${port}`));

module.exports = app;
