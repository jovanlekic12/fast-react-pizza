import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  isLoading: true,
};

const url = "https://react-fast-pizza-api.onrender.com/api/menu";

export const getMenuItems = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
  } catch (error) {
    console.log(error);
  }
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
});

export default menuSlice.reducer;
