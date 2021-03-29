import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Button from 'react-bootstrap/Button';

class Stripe extends Component {
  render() {
    return (
      <StripeCheckout
        amount={this.props.amount * 100}
        token={(token) => this.props.receiveTokenFromStripe(token)}
        stripeKey={
          'pk_test_51I8Y7uGynRV7QxZ9uA7aadky2oZi8M8BK7XjXa3nXx2xSBAwB6zbIoJ0RoBmxZ23GqdGgMZnzYZ1nJ6y0Btl6A8M00oH5JQ2O1'
        } // publishable key
        name={this.props.name}
        currency={this.props.currency}
        email={this.props.email}
        shippingAddress={this.props.shippingAddress.address + ' ' + this.props.shippingAddress.city}
        billingAddress={this.props.billingAddress.address + ' ' + this.props.billingAddress.city}
        label={this.props.label}
      >
        <Button variant="success" className="btn-round animation-on-hover">
          Pay Now
        </Button>
      </StripeCheckout>
    );
  }
}

export default Stripe;
