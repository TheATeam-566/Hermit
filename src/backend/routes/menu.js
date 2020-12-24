const express = require('express');

const router = express.Router();

const db = require('../services/firestore');

// Routes

// GET the entire menu
router.get('/', async (req, res) => {
  const dbRef = db.collection('db').doc('menu').collection('items');
  const snapshot = await dbRef.get();

  const array = [];
  snapshot.forEach((doc) => {
    array.push(doc.data());
  });

  res.json(array);
});

// GET the categories within the menu
router.get('/categories', async (req, res) => {
  const dbRef = db.collection('db').doc('menu').collection('items');
  const snapshot = await dbRef.get();

  const array = [];
  snapshot.forEach((doc) => {
    array.push(doc.get('title'));
  });

  res.json(array);
});

module.exports = router;
