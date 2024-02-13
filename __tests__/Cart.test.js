

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import Cart from '../src/pages/Cart/Cart.jsx';

describe('Cart component', () => {
  it('renders the component with an empty cart message', () => {
    render(<Cart />, { wrapper: MemoryRouter });

    // Check if the empty cart message is displayed
    expect(screen.getByText("You don't have any cart... yet !")).toBeInTheDocument();
  });

  it('renders the component with cart items', () => {
    const mockCartData = {
      creations: [
        {
          productId: {
            _id: '1',
            title: 'Sample Product',
            img: 'sample-image.jpg',
            price: 10,
          },
          quantity: 2,
        },
      ],
    };

    render(<Cart />, { wrapper: MemoryRouter });

    // Check if the cart items are rendered
    expect(screen.getByText('Sample Product')).toBeInTheDocument();
    expect(screen.getByText('Quantity:')).toBeInTheDocument();
    expect(screen.getByText('20€')).toBeInTheDocument();
  });

  // You can add more tests for other functionality as needed
});
