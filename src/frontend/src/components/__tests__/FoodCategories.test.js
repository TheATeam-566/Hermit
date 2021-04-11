import React from 'react';
import FoodCategories from '../Food/FoodCategories';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Food Categories Tests', () => {
  const containerSetup = () => {
    const { container } = render(<FoodCategories />);
    return container;
  };

  const screenSetup = () => {
    const { screen } = render(<FoodCategories />);
    return screen;
  };

  const getByTextSetup = () => {
    const { getByText } = render(<FoodCategories />);
    return getByText;
  };

  test('check that the component rendered', () => {
    const container = containerSetup();
    expect(container).toBeTruthy();
  });

  test('ensures the list-group-ul is rendered', () => {
    const container = containerSetup();
    const cardDeck = container.querySelector('.list-group-ul');
    expect(cardDeck).toBeTruthy();
  });
});
