import React from 'react';
import Header from '../Header/Header';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('ensures the form does not render if not logged in', () => {
  const { getByTestId } = render(<Header />);

  const form = getByTestId('failed-login');
  expect(form).toBeTruthy();
});
