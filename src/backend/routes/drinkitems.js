const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const beerItems = [
    { id: 1, description: 'Heineken' },
    { id: 2, description: 'Rum and Coke' },
    { id: 3, description: 'Actually Good Beer' },
  ];
  res.send(beerItems);
});

module.exports = router;
