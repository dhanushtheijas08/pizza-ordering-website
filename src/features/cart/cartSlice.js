import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  carts: [],
};
// this is
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
      if (item.quantity < 1) cartSlice.caseReducers.deleteItem(state, action);
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

export const getTotalOrders = (state) =>
  state.cart.carts.reduce((acc, cur) => acc + cur.quantity, 0);

export const getTotalPrice = (state) =>
  state.cart.carts.reduce((acc, cur) => acc + cur.quantity * cur.unitPrice, 0);

export const getOrderQuantity = (state) => state.cart.carts.find;
