import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../Header';
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';
import { BrowserRouter } from 'react-router-dom';

it('should render Header component with login button', () => {
  // render - renders on js dom
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  // js dom understant react code but it doesn't understand redux code like useSelector()
  // to make js dom understant Link component we wrapped it inside BrowserRouter component

  // Querying
  const loginButton = screen.getByRole('button', { name: 'login' });
  // const loginButton = screen.getByText('login');

  // Assert
  expect(loginButton).toBeInTheDocument();
});

it('should render Header component with a Cart itmes 0 button', () => {
  // render - renders on js dom
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  // js dom understant react code but it doesn't understand redux code like useSelector() method of redux
  // to make js dom understant Link component we wrapped it inside BrowserRouter component

  // Querying
  const cartItems = screen.getByText('Cart (0 items)');

  // Assert
  expect(cartItems).toBeInTheDocument();
});

it('should change login button to logout on click', () => {
  // render - renders on js dom
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // Querying
  const loginButton = screen.getByRole('button', { name: 'login' });

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole('button', { name: 'logout' });

  // Assert
  expect(logoutButton).toBeInTheDocument();
});
