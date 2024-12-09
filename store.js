import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./src/feature/menu/menuSlice";
import globalReducer from "./src/feature/globalStateSlice";
export const store = configureStore({
  reducer: {
    menu: menuReducer,
    global: globalReducer,
  },
});
