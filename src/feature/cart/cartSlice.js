import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  price: 0,
  amount: 0,
  isOpened: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    addItem: (state, action) => {
      state.cartItems.push(action.payload);
    },
  },
});
