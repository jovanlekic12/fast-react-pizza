import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  isLoading: true,
  menuItems: [],
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.userName = action.payload;
    },
    setMenuItems: (state, action) => {
      state.menuItems = action.payload;
      state.menuItems = state.menuItems.map((item) => {
        return { ...item, amount: 1, isInCart: false };
      });
    },
  },
});

export const { setName, setMenuItems } = globalSlice.actions;

export default globalSlice.reducer;
