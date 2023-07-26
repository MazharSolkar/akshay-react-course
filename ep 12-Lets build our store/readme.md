# Redux Toolkit (RTK) (Read from official doc counter example)

### Install two libraries required for working with redux

- @reduxjs/tookit
- react-redux

```bash
npm install @reduxjs/toolkit react-redux
```

### Create a Redux Store

Create a file named `appStore.js`. Import the `{configureStorezzzzz}` API from Redux Toolkit exporting it:

`appStore`

```javascript
import { configureStore } from '@reduxjs/toolkit';

const appStore = configureStore({
  // this reducer contain reducers for different different slices
  reducer: {},
});

export default appStore;
```

> `appStore` is redux container which have multiple slices.

### Provide the Redux Store to React

Once the store is created, we can make it available to our React components by putting a React-Redux <Provider> around our application in `src/App.js`. Import the Redux store we just created, put a <Provider> around your <App>, and pass the store as a prop:

`<App />`

```javascript
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

const App = () => {
  return (
    <Provider store={appStore}>
      <div>
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};
```

### Create a Redux State Slice

Add a new file named `src/utils/CartSlice.js`. In that file, import the `{createSlice}` API from Redux Toolkit.

Creating a slice requires a string `name` to identify the slice, an `initial state value`, and `one or more reducer functions to define how the state can be updated`.

Once a slice is created, we can export the generated Redux action creators and the reducer function for the whole slice.

`<cartSlice />`

```javascript
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // mutating the state here
      console.log(action.type);
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0; //[]
    },
  },
});

// exporting actions
export const { addItem, removeItems, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
```

### Add Slice Reducers to the Store

- Create cartSlice
- dispatch(action)
- selector (reading data)

### Add Slice Reducers to the Store

`appStore.js`

```javascript
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

const appStore = configureStore({
  // this reducer contain reducers for different different slices
  reducer: {
    // cartSlice
    cart: cartReducer,
  },
});

export default appStore;
```

### Use Redux State and Actions in React Components

Now we can use the React-Redux hooks to let React components interact with the Redux store.

We can read data from the store with `useSelector`, and dispatch actions using `useDispatch`. Create a `src/features/counter/Counter.js` file with a <Counter> component inside, then import that component into App.js and render it inside of <App>.

`<ItemList />`

```js
import CDN_URL from '../utils/config';

import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    // Dispatch an action

    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className='p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between'>
          <div className='w-9/12'>
            <div className='py-2'>
              <span>{item?.card?.info?.name}</span>
              <span>
                -₹
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className='text-xs '>{item.card.info.description}</p>
          </div>
          <div className='lg:p-4 w-3/12 '>
            <div className='absolute '>
              <button
                className='lg:p-2 bg-black text-white shadow-lg'
                onClick={() => handleAddItem(item)}>
                Add +
              </button>
            </div>
            <img src={CDN_URL + item?.card?.info?.imageId} className='w-full' />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
```

> When user will click on `Add+` button item will be added to action.payload

```js
const dispatch = useDispatch();

const handleAddItem = (item) => {
  // Dispatch an action

  dispatch(addItem(item));

  // It is passed as 2nd argument to reducer function of cartSlice
};
```

> Now when user will click on `Add+` button we dispatch(addItem(item)) it will call the appropriate reducer function and add the item to redux store.
>
> We are reading cartSlice `state` using selectorHook in `<Header />` component, we are displaying length of items on Cart (which is present on Header). `dispatch(addItem(item))`

It will dispatch action object which will look like below.

```js
action: {
  type: 'addItem';
  playload: item;
}
```

### Subscribing `<Header />` component to store.

> so that it can read data from store.

```js
import { useSelector } from 'react-redux';

const Header = () => {
  // Subscribing to the redux store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className='header-container border-2 border-red-400 flex flex-col items-center lg:flex-row lg:justify-between'>
      <div className='logo-container'>
        <MdFoodBank className='logo w-20 h-20 m-1 text-orange-400' />
      </div>
      <ul className='flex flex-col items-center lg:flex-row lg:px-4'>
        <li className='p-1 mb-1 lg:mx-4 font-bold text-xl'>
          // =============================================================
          <Link to={'/cart'}>Cart ({cartItems.length} items)</Link>
          // =============================================================
        </li>
      </ul>
    </div>
  );
};

export default Header;
```

<img src="https://github.com/MazharSolkar/akshay-react-course/assets/86589812/4ba8476d-59bc-4276-a3a2-11bd84b8e068" width=500 />

<br />

---

---

When you click on Cart(x items) on Header you will be redirected to cart page
there we are displaying items added to cart state. using `selector`

<Cart />

```js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../utils/cartSlice';
import ItemList from './ItemList';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className='text-center m-4 p-4'>
      <h1 className='text-2xl font-bold'>Cart</h1>
      <div className='w-6/12 m-auto'>
        <button
          className='p-2 m-2 bg-black text-white rounded-lg'
          onClick={handleClearCart}>
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h1>Cart is empty. Add items to the cart!</h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
```

<img src="https://github.com/MazharSolkar/akshay-react-course/assets/86589812/dd0cb4b5-95b6-4a7f-af3e-81aa1d65464d" width=500 />

<br />
