## Single Responsibility Principle

- It says that component should have single responsibility.

- eg: **_RestaurantCard Component_** have single responsibility to display card.

- eg: **_Header Component_** is responsible for displaying only header.

## Modularity

- Code is divided into small components.
- Advantages:
  - code reusability.
  - code become more testable.
  - code become more maintainable.

## Custom Hooks

- Hook is just a utility function
- Custom hooks help us to make code more modular.

## My code

**_RestaurantMenu Component_** is responsible for fetching restaurants and displaying them on the UI.

- We will use custom hook to fetch restaurants. so that **_RestaurantMenu Component_** can have single responsibility which is displaying them on UI.

> RestaurantMenu Component

```javascript
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {
  const { resId } = useParams();

  // custom hook for fetching restaurants info
  const restaurantInfo = useRestaurantMenu(resId);

  if (restaurantInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    restaurantInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
      ?.card;

  console.log(itemCards);
  return (
    <div className='menu-container'>
      <h1>{name}</h1>
      <p>
        {cuisines.join(', ')} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card?.info?.name}>
            {item.card?.info?.name} -
            {item.card?.info?.price / 100 ||
              item?.card?.info?.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
```

> useRestaurantMenu Hook

```javascript
import { useEffect, useState } from 'react';
import { MENUE_API } from '../utils/config';

const useRestaurantMenu = (resId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  fetchData = async () => {
    const data = await fetch(MENUE_API + resId);
    const json = await data.json();
    setRestaurantInfo(json.data);
  };

  return restaurantInfo;
};

export default useRestaurantMenu;
```

## Custom Hook for checking online offline status

> Header Component

```javascript
const Header = () => {
  const [value, setValue] = useState('login');

  const onlineStatus = useOnlineStatus;
  return (
    <div className='header-container'>
      <div className='logo-container'>
        <MdFoodBank className='logo' />
      </div>
      <ul>
        <li>Online Status : {onlineStatus ? '🟢' : '❌'}</li>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/about'}>About</Link>
        </li>
        <li>
          <Link to={'/contact'}>Contact</Link>
        </li>
        <li>
          <Link to={'/grocery'}>Grocery</Link>
        </li>
        <li>Cart</li>
        <button
          className='auth-btn'
          onClick={() => {
            value === 'login' ? setValue('logout') : setValue('login');
            console.log('clicked auat thn');
          }}>
          {value}
        </button>
      </ul>
    </div>
  );
};

export default Header;
```

> useOnlineStatus Hook

```javascript
import { useEffect, useState } from 'react';

const useOnlineStatus = () => {
  // not need of any i/p from user
  // check if online
  const [onlineStatus, setOnlineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener('offline', () => {
      setOnlineStatus(false);
    });

    window.addEventListener('online', () => {
      setOnlineStatus(true);
    });
  }, []);

  // boolean value (return state variable)
  return onlineStatus;
};

export default useOnlineStatus;
```

> How to think for building custom hook

- what is i/p of hook and what it o/p
- in case of useRestaurantMEnu i/p was resId and o/p was restaurantInfo
- return state variable from custom hook

# How to make large scale applications performant.

- We use bundler (eg: parcel) to bundle our code.
- Parcel bundles our code means it will combine all the javascript files and return a single javascript file.

## Problem with single bundled file

- The file size becomes larger, it make our app slow.
- We need to split this javascript bundle into smaller, more manageable chunks.
- this splitting is called **_code splitting._**

## Code splitting

In code splitting, the goal is to break down the application's JavaScript bundle into smaller, more manageable chunks instead of having one large bundle. This technique helps improve the performance and loading time of the application.

**_By splitting the code into smaller bundles, you can load only the necessary code for a particular route or component when it's needed._**

Code splitting is achieved through dynamic imports. React.lazy is used for doing dynamic imports.

> Example

MakeMyTrip have alot of service like hotel booking, flight booking on different different routes.

So we split the javascript bundle of MakeMyTrip in such a way that when user is on hotel booking route only load neccessay bundle for that particular route.

When user moves to flight booking route then load necessay bundle for that route.

## Achieving Code splitting

Code splitting is achieved through dynamic imports. React.lazy is used for doing dynamic imports.

### Dynamic Imports

It allows to load code only when it is needed.

### Route-based Code Splitting

> In my website implementing code splitting for grocery Route (where I have grocery store).
> And about Route.

> App.js

```javascript
import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';

import {
  createBrowserRouter,
  ReactProvider,
  RouterProvider,
  Outlet,
} from 'react-router-dom';

// Dynamic import using React.lazy
const Grocery = lazy(() => import('./components/Grocery'));
const About = lazy(() => import('./components/About'));

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: (
          <Suspense fallback={<h1>Loading about...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/grocery',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: '/restaurant/:resId',
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
```
