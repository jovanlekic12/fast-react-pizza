import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    getOrder: (state, action) => {
      state.orders.push(action.payload);
    },
  },
});

export const { getOrder } = orderSlice.actions;

export default orderSlice.reducer;
