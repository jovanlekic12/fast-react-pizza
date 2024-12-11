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
    addCartItem: (state, action) => {
      const item = action.payload;
      state.cartItems.push(item);
    },
  },
});

export const { clearCart, addCartItem } = cartSlice.actions;

export default cartSlice.reducer;
