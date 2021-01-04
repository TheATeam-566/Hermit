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

// GET the items within the menu
router.get('/:category/items', async (req, res) => {
  const dbRef = db.collection('db').doc('menu').collection('items').doc(req.params.category); // Will need to pass the category via request, body or param?
  const snapshot = await dbRef.get();
  // console.log('this is the snapshot: ', snapshot.data().items);
  // Code below is from GET categories above.
  // const array = [];
  // snapshot.forEach((doc) => {
  //   array.push(doc.data().items);
  //   console.log(doc.items.data());
  // });
  // console.log('this is the array', array);

  res.json(snapshot.data().items);
});

module.exports = router;
