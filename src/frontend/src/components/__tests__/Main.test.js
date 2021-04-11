import React from 'react';
import Main from '../Main/Main';
import Userpage from '../User/Userpage';
import { BrowserRouter } from 'react-router-dom';
import { render, getByTestId, within } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Main tests', () => {
  const containerSetup = () => {
    const { container } = render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );
    return container;
  };

  const screenSetup = () => {
    const { screen } = render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );
    return screen;
  };

  const getByTextSetup = () => {
    const { getByText } = render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );
    return getByText;
  };

  test('Ensures that container in main renders', () => {
    const container = containerSetup();
    const main = container.querySelector('.main-container');
    expect(main).toBeTruthy();
  });

  test('Ensures that Header in main renders', () => {
    const container = containerSetup();
    const header = container.querySelector('.header-divider');
    expect(header).toBeTruthy();
  });

  test('ensures the footer is rendered', () => {
    const container = containerSetup();
    const footer = container.querySelector('.footer');
    expect(footer).toBeTruthy();
  });
});
