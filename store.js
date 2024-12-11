import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./src/feature/globalStateSlice";
import cartReducer from "./src/feature/cart/cartSlice";
export const store = configureStore({
  reducer: {
    global: globalReducer,
    cart: cartReducer,
  },
});
