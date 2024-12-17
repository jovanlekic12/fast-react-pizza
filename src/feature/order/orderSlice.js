import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  order: "",
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    getOrder: (state, action) => {
      state.order = action.payload;
    },
  },
});

export const { getOrder } = orderSlice.actions;

export default orderSlice.reducer;
