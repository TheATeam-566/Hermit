import React from 'react';
import Footer from '../Footer/Footer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('ensures the form does not render if not logged in', () => {
  const { getByTestId } = render(<Footer />);

  const form = getByTestId('failed-login');
  expect(form).toBeTruthy();
});
