import React from 'react';
import Header from '../Header/Header';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Header tests', () => {
  const containerSetup = () => {
    const { container } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    return container;
  };

  const screenSetup = () => {
    const { screen } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    return screen;
  };

  const getByTextSetup = () => {
    const { getByText } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    return getByText;
  };

  test('ensures the header is rendered', () => {
    const container = containerSetup();
    const header = container.querySelector('.user-action-button');
    expect(header).toBeTruthy();
  });

  test('ensures the hermit home link routes you to /', () => {
    const container = containerSetup();
    const homeLink = container.querySelector('.home');
    expect(homeLink.href).toBe('http://localhost/' || 'https://hermitapp.me/');
  });

  test('ensures the signin/signout buttons are rendered', () => {
    const container = containerSetup();
    const actionButtons = container.querySelector('.user-action-button');
    expect(actionButtons).toBeTruthy();
  });

  test('ensures the signin button routes you to google auth', () => {
    const container = containerSetup();
    const signin = container.querySelector('.btn-round');
    expect(signin.href).toBe(
      'http://localhost/auth/google/' || 'https://hermitapp.me/auth/google/'
    );
  });

  test('ensures the cart button is rendered', () => {
    const container = containerSetup();
    const cart = container.querySelector('.cart-button');
    expect(cart).toBeTruthy();
  });

  test('total text should be rendered', () => {
    const getBy = getByTextSetup();
    expect(getBy('Total:')).toBeInTheDocument();
  });
});
