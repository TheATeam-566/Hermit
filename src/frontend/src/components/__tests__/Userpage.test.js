import React from 'react';
import Userpage from '../User/Userpage';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('ensures the form does not render if not logged in', () => {
  const { getByTestId } = render(<Userpage />);

  const form = getByTestId('failed-login');
  expect(form).toBeTruthy();
});
