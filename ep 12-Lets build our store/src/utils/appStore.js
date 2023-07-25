import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

// app store is redux container which have multiple slices
const appStore = configureStore({
  // this reducer contain reducers for different different slices
  reducer: {
    // cart
    cart: cartReducer,
  },
});

export default appStore;
