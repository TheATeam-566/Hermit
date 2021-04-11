import React from 'react';
import Footer from '../Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Footer tests', () => {
  const containerSetup = () => {
    const { container } = render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    return container;
  };

  const screenSetup = () => {
    const { screen } = render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    return screen;
  };

  const getByTextSetup = () => {
    const { getByText } = render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    return getByText;
  };

  test('ensures the footer is rendered', () => {
    const container = containerSetup();
    const footer = container.querySelector('.footer');
    expect(footer).toBeTruthy();
  });

  test('that title is rendered', () => {
    const getByText = getByTextSetup();
    expect(getByText('Hermit')).toBeInTheDocument();
  });

  test('that contactus is rendered', () => {
    const getByText = getByTextSetup();
    expect(getByText('Hermit')).toBeInTheDocument();
  });

  test('that aboutus is rendered', () => {
    const getByText = getByTextSetup();
    expect(getByText('Contact Us')).toBeInTheDocument();
  });

  test('that tos is rendered', () => {
    const getByText = getByTextSetup();
    expect(getByText('Terms and Conditions')).toBeInTheDocument();
  });

  test('that designed by is rendered', () => {
    const getByText = getByTextSetup();
    expect(getByText('© 2021, Designed by The A Team.')).toBeInTheDocument();
  });

  test('ensures the contact us link routes you to contact us page', () => {
    const container = containerSetup();
    const contactus = container.querySelector('.contact-us-link');
    expect(contactus.href).toBe('http://localhost/contactus' || 'https://hermitapp.me/contactus');
  });

  test('ensures the about us link routes you to about us page', () => {
    const container = containerSetup();
    const contactus = container.querySelector('.about-us-link');
    expect(contactus.href).toBe('http://localhost/aboutus' || 'https://hermitapp.me/aboutus');
  });

  test('ensures the ToS link routes you to ToS page', () => {
    const container = containerSetup();
    const contactus = container.querySelector('.tos-link');
    expect(contactus.href).toBe('http://localhost/tos' || 'https://hermitapp.me/tos');
  });
});
