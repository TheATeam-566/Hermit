import React from 'react';
import FoodCard from '../Food/FoodCard';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Food Card Tests', () => {
  const containerSetup = () => {
    const { container } = render(<FoodCard />);
    return container;
  };

  const screenSetup = () => {
    const { screen } = render(<FoodCard />);
    return screen;
  };

  const getByTextSetup = () => {
    const { getByText } = render(<FoodCard />);
    return getByText;
  };

  test('check that the component rendered', () => {
    const container = containerSetup();
    expect(container).toBeTruthy();
  });

  test('ensures the card-deck is rendered', () => {
    const container = containerSetup();
    const cardDeck = container.querySelector('.card-deck');
    expect(cardDeck).toBeTruthy();
  });

  test('ensures the card-column is rendered', () => {
    const container = containerSetup();
    const cardColumns = container.querySelector('.card-columns');
    expect(cardColumns).toBeTruthy();
  });
});
