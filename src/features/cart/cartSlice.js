import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  carts: [
    {
      id: '10',
      name: 'Sample',
      quantity: 5,
      unitPrice: 10,
    },
    {
      id: '12',
      name: 'Sample',
      quantity: 5,
      unitPrice: 10,
    },
  ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.carts.push(action.payload);
    },
    deleteItem(state, action) {
      state.carts = state.carts.filter((order) => order.id !== action.payload);
    },
    increaseItemQuanitiy(state, action) {
      const item = state.carts.find((order) => order.id === action.payload);
      item.quantity++;
    },
    decreaseItemQuanitiy(state, action) {
      const item = state.carts.find((order) => order.id === action.payload);
      item.quantity--;
    },
    clearItem(state) {
      state.carts = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuanitiy,
  decreaseItemQuanitiy,
  clearItem,
} = cartSlice.actions;
export default cartSlice.reducer;
