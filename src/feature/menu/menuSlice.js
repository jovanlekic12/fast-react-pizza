import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  isLoading: true,
};

const url = "https://react-fast-pizza-api.onrender.com/api/menu";

export const getMenuItems = fetch(url);

const menuSlice = createSlice({
  name: "menu",
  initialState,
});

export default menuSlice.reducer;
