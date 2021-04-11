import React from 'react';
import Userpage from '../User/Userpage';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('User Page Tests', () => {
  const containerSetup = () => {
    const { container } = render(<Userpage />);
    return container;
  };

  const screenSetup = () => {
    const { screen } = render(<Userpage />);
    return screen;
  };

  const getByTextSetup = () => {
    const { getByText } = render(<Userpage />);
    return getByText;
  };

  test('ensures the form does not render if not logged in', () => {
    const { getByTestId } = render(<Userpage />);

    const form = getByTestId('failed-login');
    expect(form).toBeTruthy();
  });
});
