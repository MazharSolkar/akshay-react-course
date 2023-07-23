## React Router

It is a fully-featured client and server-side routing library for React.

Helps Create and navigate between different URLs that make up your web application.

`<Outlet />` : The Outlet component is a special component provided by react-router-dom that acts as a placeholder for rendering child components based on the current URL.

### Configuring Routes

`<Main />`

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

`<App />`

```javascript
import './App.css';
import Home from './components/Home';
import About from './components/About';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import OrderSummary from './components/OrderSummary';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='order-summary' element={<OrderSummary />} />
      </Routes>
    </div>
  );
};
export default App;
```

`<Navbar />`

```javascript
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='p-2 mb-10 bg-red-400'>
      <NavLink
        to='/'
        className='mx-2'
        style={({ isActive }) => ({
          fontWeight: isActive ? 'bold' : 'normal',
          TextDecoder: isActive ? 'underline' : 'none',
        })}>
        Home
      </NavLink>
      <NavLink
        to='about'
        className='mx-2'
        style={({ isActive }) => ({
          fontWeight: isActive ? 'bold' : 'normal',
          TextDecoder: isActive ? 'underline' : 'none',
        })}>
        About
      </NavLink>
    </div>
  );
};
export default Navbar;
```

> Advantage of NavLink Over Link:
>
> NavLink adds active class on current active link, it also gives us boolean value for active link.

### Navigating programmatically

> Navigating on button click (using useNavigate hook)

`<Home />`

```javascript
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => navigate('order-summary')}>Place Order</button>
    </div>
  );
};
export default Home;
```

`<OrderSummary />`

```javascript
import { useNavigate } from 'react-router-dom';

const OrderSummary = () => {
  const navigate = useNavigate();
  return (
    <section className='w-full flex justify-center items-center'>
      <div>
        <h1>Order Confirmed!</h1>
        <button
          className='border-2 border-purple-300 rounded-lg px-4 mt-4'
          onClick={() => {
            navigate(-1);
          }}>
          Go back
        </button>
      </div>
    </section>
  );
};
export default OrderSummary;
```

### When no route matches (\*)

`<App />`

```javascript
import NotFound from './components/NotFound';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default App;
```

### Nested Routes

<img src="https://github.com/MazharSolkar/akshay-react-course/assets/86589812/90a25750-37ce-4780-885f-3fd7e5cf1b8a" width=500 />

<br />

`<App />`

```javascript
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='order-summary' element={<OrderSummary />} />
        <Route path='products' element={<Products />}>
          <Route path='new' element={<NewProducts />} />
          <Route path='featured' element={<FeaturedProducts />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default App;
```

`<Products />`

```javascript
import { Link, Outlet } from 'react-router-dom';

const Products = () => {
  return (
    <div>
      <h1>Products</h1>
      <input
        type='text'
        placeholder='searc products...'
        className='border-2 border-green-500 rounded-lg text-left px-2'
      />
      <div className='mt-5 p-4 bg-yellow-100'>
        <Link to='featured' className='mr-3'>
          Featured
        </Link>
        <Link to='new' className='mr-3'>
          New
        </Link>
      </div>
      <Outlet />
    </div>
  );
};
export default Products;
```

### Index Route

When We navigate to <Products /> page I want to display either <FeaturedProducts /> or <newProducts /> by default.

`<App />`

```javascript
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='order-summary' element={<OrderSummary />} />
        <Route path='products' element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path='new' element={<NewProducts />} />
          <Route path='featured' element={<FeaturedProducts />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default App;
```

> Now when we go to Products page by default we will got to `featured route`.

### Dynamic Routes

<img src="https://github.com/MazharSolkar/akshay-react-course/assets/86589812/9a05a995-b03f-4a62-9fe9-e4211cd8a318" width=500 />

`<Users />`

```javascript
import { Outlet } from 'react-router-dom';

const Users = () => {
  return (
    <div>
      <h1>Users page</h1>
      <Outlet />
    </div>
  );
};
export default Users;
```

`<UserDetails />`

```javascript
const UserDetails = () => {
  return (
    <div>
      <h1>User Details</h1>
    </div>
  );
};
export default UserDetails;
```

`<App />`

```javascript
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='order-summary' element={<OrderSummary />} />
        <Route path='products' element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path='new' element={<NewProducts />} />
          <Route path='featured' element={<FeaturedProducts />} />
        </Route>
        <Route path='users' element={<Users />} />
        <Route path='users/:userId' element={<UserDetails />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default App;
```

### URL Parameters

`<UserDetails />`

```javascript
import { useParams } from 'react-router-dom';

const UserDetails = () => {
  console.log(useParams());
  const { userId } = useParams();

  return (
    <div>
      <h1>User Details {userId}</h1>
    </div>
  );
};
export default UserDetails;
```

### Lazy Loading

<!-- ===================================================== -->

## Complete View (Code Evolution Approach)

`<Main />`

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

`<App />`

```javascript
import './App.css';
import Home from './components/Home';
import About from './components/About';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import OrderSummary from './components/OrderSummary';
import NotFound from './components/NotFound';
import Products from './components/Products';
import NewProducts from './components/NewProducts';
import FeaturedProducts from './components/FeaturedProduct';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import Admin from './components/Admin';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='order-summary' element={<OrderSummary />} />
        <Route path='products' element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path='new' element={<NewProducts />} />
          <Route path='featured' element={<FeaturedProducts />} />
        </Route>
        <Route path='users' element={<Users />} />
        <Route path='users/:userId' element={<UserDetails />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default App;
```

## Complete View (Akshay Approach)

`<Main />`

```javascript
import { RouterProvider } from 'react-router-dom';
import { appRouter } from './App';
```

`<App />`

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import OrderSummary from './components/OrderSummary';
import NotFound from './components/NotFound';
import Products from './components/Products';
import NewProducts from './components/NewProducts';
import FeaturedProducts from './components/FeaturedProduct';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import Admin from './components/Admin';

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

let appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true, // Use 'index: true' for the default index route
        element: <Home />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'order-summary',
        element: <OrderSummary />,
      },
      {
        path: 'products',
        element: <Products />,
        children: [
          {
            index: true, // Use 'index: true' for the default index route
            element: <FeaturedProducts />,
          },
          {
            path: 'featured',
            element: <FeaturedProducts />,
          },
          {
            path: 'new',
            element: <NewProducts />,
          },
        ],
      },
      {
        path: 'users',
        element: <Users />,
      },
      {
        path: 'users/:userId',
        element: <UserDetails />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<RouterProvider router={appRouter} />);

export default App;
```
