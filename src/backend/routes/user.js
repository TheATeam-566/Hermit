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
    lastUpdated: FieldValue.serverTimestamp(),
    address: req.body.address,
    city: req.body.city,
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

// POST method to create the Order Object in Firebase per User.`
router.post('/orders/:userid', async (req, res) => {
  const dbRef = db.collection('users').doc(req.body.id);
  const doc = await dbRef.get();

  // if the user exists, create a new document with a random id inside the orders subcollection
  if (doc.exists) {
    const orderRef = db.collection('users').doc(req.body.id).collection('orders').doc();
    const { id } = orderRef;

    await orderRef.set({
      OrderInfo: {
        orderID: id,
        orderStatus: 0,
        orderTime: FieldValue.serverTimestamp(),
        stripeConfirmationID: req.body.StripeConfirmationID,
        orderSource: req.body.source,
      },
      DeliveryInfo: {
        deliveryTime: req.body.delivery.driveTime,
        totalKM: req.body.delivery.KM,
        destinationAddress: req.body.delivery.destinationAddress,
        sourceAddress: req.body.delivery.deliveryAddress,
      },
      Items: req.body.cart,
      Totals: req.body.totals,
    });
    res.status(201);
  } else {
    // Not authorized
    res.status(401).send('You are unauthorized');
  }
});

router.get('/orders/:userid', async (req, res) => {
  const orderHistoryRef = db.collection('users').doc(req.params.userid).collection('orders');
  const snapshot = await orderHistoryRef.get();
  const orders = [];

  // if user has no order history, respond with 404
  if (snapshot.empty) {
    res.status(404);
  } else {
    snapshot.forEach((doc) => {
      orders.push(doc.data());
    });

    res.status(200).json(orders);
  }
});

router.get('/report', async (req, res) => {
  const dbRef = db.collection('users');
  const snapshot = await dbRef.get();

  const todayDate = new Date();

  const orders = [];
  const tempUsers = [];

  snapshot.forEach((user) => {
    tempUsers.push(user.data());
  });
  // eslint-disable-next-line no-restricted-syntax
  for await (const users of tempUsers) {
    const dbRef2 = dbRef.doc(`${users.id}`).collection('orders');
    const snapshot2 = await dbRef2.get();
    if (snapshot2.empty) {
      res.status(404);
    } else {
      orders.push(
        snapshot2.docs.map((doc) => {
          const orderDate = new Date(doc.data().OrderInfo.orderTime._seconds * 1000);
          const userOrders = [];
          if (
            orderDate.getUTCDate() === todayDate.getUTCDate() &&
            orderDate.getUTCMonth() + 1 === todayDate.getUTCMonth() + 1
          ) {
            userOrders.push(doc.data());
          }

          return userOrders;
        })
      );
    }
  }
  res.json(orders);
});

module.exports = router;
