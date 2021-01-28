const express = require('express');
const admin = require('firebase-admin');
const db = require('../services/firestore');

const router = express.Router();
const { FieldValue } = admin.firestore;

// Routes
// POST method route
router.post('/update', async (req, res) => {
  const userRef = db.collection('users').doc(req.body.id);

  await userRef.update({
    timestamp: FieldValue.serverTimestamp(),
    address: req.body.address,
    fName: req.body.fName,
    lName: req.body.lName,
    email: req.body.email,
    image: req.body.image,
  });

  res.send(req.body);
});

// POST method route
router.post('/delete', async (req, res) => {
  await db.collection('users').doc(req.body.id).delete();
  res.send(req.body);
});

module.exports = router;
