const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const menuItems = [
    { id: 1, description: 'Chocolate Cheesecake' },
    { id: 2, description: 'Strawberry Cheesecake' },
    { id: 3, description: 'Vanilla Cheesecake' },
  ];
  res.send(menuItems);
});

module.exports = router;
