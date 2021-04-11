import React from 'react';
import ContactUs from '../ContactUs/ContactUs';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Contact Us Tests', () => {
  const containerSetup = () => {
    const { container } = render(<ContactUs />);
    return container;
  };

  const screenSetup = () => {
    const { screen } = render(<ContactUs />);
    return screen;
  };

  const getByTextSetup = () => {
    const { getByText } = render(<ContactUs />);
    return getByText;
  };

  test('ensures that address is rendered', () => {
    const { getByText } = render(<ContactUs />);

    expect(getByText('Address')).toBeInTheDocument();
  });

  test('ensures that email is rendered', () => {
    const { getByText } = render(<ContactUs />);

    expect(getByText('Email')).toBeInTheDocument();
  });

  test('ensures that phone number is rendered', () => {
    const { getByText } = render(<ContactUs />);

    expect(getByText('Phone Number')).toBeInTheDocument();
  });

  test('ensures that contact is rendered', () => {
    const { getByText } = render(<ContactUs />);

    expect(getByText('Contact')).toBeInTheDocument();
  });

  test('renders the four containers', () => {
    const { container } = render(<ContactUs />);

    const column = container.querySelector('.col-lg-3');
    expect(column).toBeTruthy();
  });

  test('checks for the values of the address container', () => {
    const { getByTestId } = render(<ContactUs />);

    const column = getByTestId('add-column');
    const addInfo = column.querySelector('.info');
    const infoTitle = addInfo.querySelector('.info-title');
    expect(column).toBeTruthy();
    expect(addInfo).toBeTruthy();
    expect(infoTitle).toBeTruthy();
  });

  test('checks for the values of the email container', () => {
    const { getByTestId } = render(<ContactUs />);

    const column = getByTestId('email-column');
    const addInfo = column.querySelector('.info');
    const infoTitle = addInfo.querySelector('.info-title');
    expect(column).toBeTruthy();
    expect(addInfo).toBeTruthy();
    expect(infoTitle).toBeTruthy();
  });

  test('checks for the values of the phone container', () => {
    const { getByTestId } = render(<ContactUs />);

    const column = getByTestId('phone-column');
    const addInfo = column.querySelector('.info');
    const infoTitle = addInfo.querySelector('.info-title');
    expect(column).toBeTruthy();
    expect(addInfo).toBeTruthy();
    expect(infoTitle).toBeTruthy();
  });

  test('checks for the values of the contact container', () => {
    const { getByTestId } = render(<ContactUs />);

    const column = getByTestId('contact-column');
    const addInfo = column.querySelector('.info');
    const infoTitle = addInfo.querySelector('.info-title');
    expect(column).toBeTruthy();
    expect(addInfo).toBeTruthy();
    expect(infoTitle).toBeTruthy();
  });
});
