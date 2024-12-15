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
        return { ...item, itemAmount: 1 };
      });
    },
    updateMenuItemAmount: (state, { type, payload: { amount, id } }) => {
      let item = state.menuItems.find((item) => item.id === id);
      item.itemAmount = amount;
    },
  },
});

export const { setName, setMenuItems, updateMenuItemAmount } =
  globalSlice.actions;

export default globalSlice.reducer;
