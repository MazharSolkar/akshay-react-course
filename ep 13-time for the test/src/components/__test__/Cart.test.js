import { act } from 'react-dom/test-utils';
import RestaurantMenu from '../RestaurantMenu';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import MOCK_DATA from '../mocks/mockResMenu.json';
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';
import Header from '../Header';
import Cart from '../Cart';

// mock fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

// ==============
// TEST CASES
// ==============

it('should render the menu items when an accordion is clicked', async () => {
  // render
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );
  const accordianHeader = screen.getByText('Veg Pizza (18)');
  fireEvent.click(accordianHeader);

  expect(screen.getAllByTestId('foodItems').length).toBe(18);
});

it('should display the initial cart state', async () => {
  // render
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );
  expect(screen.getByText('Cart (0 items)')).toBeInTheDocument();
});

it('should add items to the cart', async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText('Veg Pizza (18)');
  fireEvent.click(accordianHeader);

  const addBtns = screen.getAllByRole('button', { name: 'Add +' });
  fireEvent.click(addBtns[0]);
  expect(screen.getByText('Cart (1 items)')).toBeInTheDocument();

  fireEvent.click(addBtns[1]);
  expect(screen.getByText('Cart (2 items)')).toBeInTheDocument();

  expect(screen.getAllByTestId('foodItems').length).toBe(20);
});

it('should clear the cart and reset the menu items', async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );
  const accordianHeader = screen.getByText('Veg Pizza (18)');
  fireEvent.click(accordianHeader);

  expect(screen.getAllByTestId('foodItems').length).toBe(20);

  fireEvent.click(screen.getByRole('button', { name: 'Clear Cart' }));

  expect(screen.getAllByTestId('foodItems').length).toBe(18);
  expect(
    screen.getByText('Cart is empty. Add items to the cart!')
  ).toBeInTheDocument();
});
