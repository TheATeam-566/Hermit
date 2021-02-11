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

// GET all items in all categories within the menu
router.get('/categories/allitems', async (req, res) => {
  const dbRef = db.collection('db').doc('menu').collection('items');
  const snapshot = await dbRef.get();

  const tempArray = [];
  snapshot.forEach((doc) => {
    tempArray.push(doc.data().items);
  });

  const array = [];
  tempArray.forEach((col) => {
    Object.values(col).map((item) => array.push(item));
  });

  res.json(array);
});

// GET the items within the menu
router.get('/:category/items', async (req, res) => {
  const dbRef = db.collection('db').doc('menu').collection('items').doc(req.params.category); // Will need to pass the category via request, body or param?
  const snapshot = await dbRef.get();

  res.json(snapshot.data().items);
});

// GET description field of a single category
router.get('/:category/description', async (req, res) => {
  const dbRef = db.collection('db').doc('menu').collection('items').doc(req.params.category);
  const snapshot = await dbRef.get();

  res.json(snapshot.data().description);
});

module.exports = router;
