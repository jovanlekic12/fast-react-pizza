import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Menu from "./components/menu/Menu";
import Cart from "./components/cart/Cart";
import OrderPage from "./components/order/Order";
import { useEffect } from "react";
import { calculateTotals } from "./feature/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="menu" element={<Menu />} />
      <Route path="cart" element={<Cart />} />
      <Route path="order/new" element={<OrderPage />} />
    </Routes>
  );
}

export default App;
