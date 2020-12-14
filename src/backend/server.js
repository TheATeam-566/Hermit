const { json } = require('express');
const express = require('express');
const app = express();
const port = 5000;

app.get('/api/menuitems', (req, res) => {
  var menuItems = [
    { id: 1, description: 'Chocolate Cheesecake' },
    { id: 2, description: 'Strawberry Cheesecake' },
    { id: 3, description: 'Vanilla Cheesecake' },
  ];
  res.json(menuItems);
});

app.listen(port, () => console.log(`Server started on port ${port}`));
