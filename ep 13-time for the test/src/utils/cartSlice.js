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
