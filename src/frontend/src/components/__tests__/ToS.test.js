import React from 'react';
import ToS from '../ToS/ToS';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('ensures that all tos containers render', () => {
  const { container } = render(<ToS />);

  const descriptions = container.querySelectorAll('.description');
  expect(descriptions.length).toBe(22);
});
