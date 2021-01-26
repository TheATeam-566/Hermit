const express = require('express');

const router = express.Router();
const keys = require('../config/keys');
// eslint-disable-next-line import/order
const stripe = require('stripe')(keys.stripeSecretKey);

router.post('/', async (req, res) => {
  const charge = await stripe.charges.create({
    amount: req.body.amount * 100,
    currency: 'cad',
    description: '', // Update this later with an order number or something
    source: req.body.id,
  });

  if (charge.status === 'succeeded') {
    res.status(200);
  }
});

module.exports = router;
