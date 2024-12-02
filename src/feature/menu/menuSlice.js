import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  isLoading: true,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
});

export default menuSlice.reducer;
