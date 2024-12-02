import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Menu from "./components/Menu";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="menu" element={<Menu />} />
    </Routes>
  );
}

export default App;
