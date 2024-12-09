import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  isLoading: true,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.userName = action.payload;
    },
  },
});

export const { setName } = globalSlice.actions;

export default globalSlice.reducer;
