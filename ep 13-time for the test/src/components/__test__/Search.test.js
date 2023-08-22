import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MOCK_DATA from '../mocks/mockResListData.json';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import Body from '../Body';
import { execPath } from 'process';
import { log } from 'console';

// mock fetch function
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it('should search ResList fro burger text input', async () => {
  // render
  // whenever you are using fetch, state update wrap component which you are rendering inside act(async ()=()) function
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  // query
  const cardsBeforeSearch = screen.getAllByTestId('resCard');
  // assert
  expect(cardsBeforeSearch.length).toBe(9);

  // query
  const searchBtn = screen.getByRole('button', { name: 'Search' });
  // assert
  expect(searchBtn).toBeInTheDocument();

  // query
  const searchInput = screen.getByTestId('searchInput');

  fireEvent.change(searchInput, { target: { value: 'burger' } });
  fireEvent.click(searchBtn);
  const cardsAfterSearch = screen.getAllByTestId('resCard');

  // assert
  expect(cardsAfterSearch.length).toBe(1);
});

it('should filter top rated restaurants', async () => {
  // render
  await act(() =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  // query
  const cardsBeforeFilter = screen.getAllByTestId('resCard');
  // assertion
  expect(cardsBeforeFilter.length).toBe(9);

  // query
  const topRatedBth = screen.getByRole('button', {
    name: 'Top Rated Restaurants',
  });
  fireEvent.click(topRatedBth);

  const cardsAfterFilter = screen.getAllByTestId('resCard');
  // assert
  expect(cardsAfterFilter.length).toBe(5);
});
