import React from 'react';
import Food from '../Food/Food';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Food Categories Tests', () => {
  const containerSetup = () => {
    const { container } = render(<Food />);
    return container;
  };

  const screenSetup = () => {
    const { screen } = render(<Food />);
    return screen;
  };

  const getByTextSetup = () => {
    const { getByText } = render(<Food />);
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

  test('ensures the list-group-ul is rendered', () => {
    const container = containerSetup();
    const cardDeck = container.querySelector('.list-group-ul');
    expect(cardDeck).toBeTruthy();
  });
});
