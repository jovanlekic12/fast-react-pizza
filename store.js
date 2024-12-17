import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./src/feature/globalStateSlice";
import cartReducer from "./src/feature/cart/cartSlice";
import orderReducer from "./src/feature/order/orderSlice";
export const store = configureStore({
  reducer: {
    global: globalReducer,
    cart: cartReducer,
    order: orderReducer,
  },
});
