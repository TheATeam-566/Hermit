import React from 'react';
import ToS from '../ToS/ToS';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('TOS Tests', () => {
  const containerSetup = () => {
    const { container } = render(<ToS />);
    return container;
  };

  const screenSetup = () => {
    const { screen } = render(<ToS />);
    return screen;
  };

  const getByTextSetup = () => {
    const { getByText } = render(<ToS />);
    return getByText;
  };

  test('ensures that all tos containers render', () => {
    const { container } = render(<ToS />);

    const descriptions = container.querySelectorAll('.description');
    expect(descriptions.length).toBe(22);
  });
});
