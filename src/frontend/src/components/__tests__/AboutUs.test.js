import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('About Us Tests', () => {
  const containerSetup = () => {
    const { container } = render(<AboutUs />);
    return container;
  };

  const screenSetup = () => {
    const { screen } = render(<AboutUs />);
    return screen;
  };

  const getByTextSetup = () => {
    const { getByText } = render(<AboutUs />);
    return getByText;
  };

  test('loads and displays the about us page', () => {
    const { getByText } = render(<AboutUs />);

    expect(getByText('The A Team')).toBeInTheDocument();
    expect(getByText('Plamen Velkov')).toBeInTheDocument();
    expect(getByText('Chris Pinkney')).toBeInTheDocument();
    expect(getByText('Nilan Patel')).toBeInTheDocument();
    expect(getByText('Andre Gopichan')).toBeInTheDocument();
  });

  test('renders four positions', () => {
    const { getAllByText } = render(<AboutUs />);

    const positions = getAllByText('Position:');
    expect(positions.length).toBe(4);
  });

  test('renders the four team navigation buttons', () => {
    const { container } = render(<AboutUs />);

    const buttons = container.querySelector('.carousel-indicators');
    expect(buttons).toBeTruthy();
  });

  test('renders four experiences', () => {
    const { getAllByText } = render(<AboutUs />);

    const experience = getAllByText('Experience:');
    expect(experience.length).toBe(4);
  });

  test('ensures that the descriptions render', () => {
    const { container } = render(<AboutUs />);

    const description = container.querySelector('.description');
    expect(description).toBeTruthy();
  });
});
