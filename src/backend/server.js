const { json } = require('express');
const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/api/menuitems', (req, res) => {
  console.log('hi there');
  var menuItems = [
    { id: 1, description: 'Chocolate Cheesecake' },
    { id: 2, description: 'Strawberry Cheesecake' },
    { id: 3, description: 'Vanilla Cheesecake' },
  ];
  res.json(menuItems);
});

app.listen(port, () => console.log(`Server started on port ${port}`));
