/* eslint-disable import/order */
const express = require('express');

const router = express.Router();
const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

router.post('/', async (req, res) => {
  const charge = await stripe.charges.create({
    amount: Math.round(req.body.amount.toFixed(2) * 100),
    currency: 'cad',
    description: '', // Update this later with an order number or something
    source: req.body.id,
  });
  if (charge.status === 'succeeded') {
    // if order was successful send 200 and respond accordingly
    res.status(200).json(charge);
  } else {
    // if order did not succeed, respond with 503 Service Unavailable
    res.status(503);
  }
});

module.exports = router;
