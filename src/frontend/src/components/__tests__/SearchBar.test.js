import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('SearchBar tests', () => {
  const containerSetup = () => {
    const { container } = render(<SearchBar />);
    return container;
  };

  const screenSetup = () => {
    const { screen } = render(<SearchBar />);
    return screen;
  };

  const getByTextSetup = () => {
    const { getByText } = render(<SearchBar />);
    return getByText;
  };

  test('total text should be rendered', () => {
    const container = containerSetup();
    const searchBar = container.querySelector('.search-form');
    expect(searchBar).toBeTruthy();
  });
});
