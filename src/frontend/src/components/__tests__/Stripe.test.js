import React from 'react';
import Stripe from '../Stripe/Stripe';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Stripe Tests', () => {
  const containerSetup = () => {
    const { container } = render(<Stripe />);
    return container;
  };

  const screenSetup = () => {
    const { screen } = render(<Stripe />);
    return screen;
  };

  const getByTextSetup = () => {
    const { getByText } = render(<Stripe />);
    return getByText;
  };

  test('ensures that Stripe component renders (with required props)', () => {
    const { container } = render(
      <Stripe
        amount={100}
        token={'abc123'}
        stripeKey={
          'pk_test_51I8Y7uGynRV7QxZ9uA7aadky2oZi8M8BK7XjXa3nXx2xSBAwB6zbIoJ0RoBmxZ23GqdGgMZnzYZ1nJ6y0Btl6A8M00oH5JQ2O1'
        } // publishable key
        name={'Plamen Velkov'}
        currency={'CAD'}
        email={'plamen@email.com'}
        shippingAddress={true}
        billingAddress={true}
        label={'Checkout'}
      />
    );
    expect(container).toBeTruthy();
  });
});
