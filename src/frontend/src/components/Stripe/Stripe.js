import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Stripe extends Component {
  render() {
    return (
      <>
        <StripeCheckout
          amount={this.props.amount * 100}
          token={(token) => this.props.receiveTokenFromStripe(token)}
          stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
          name={this.props.name}
          currency={this.props.currency}
          email={this.props.email}
          shippingAddress={
            this.props.shippingAddress.address + ' ' + this.props.shippingAddress.city
          }
          billingAddress={this.props.billingAddress.address + ' ' + this.props.billingAddress.city}
          label={this.props.label}
        />
      </>
    );
  }
}

export default Stripe;
