import Navbar from "./Navbar";
import { fetchItems } from "../feature/menu/menuSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function Menu() {
  const dispatch = useDispatch();

  useEffect({}, []);

  return (
    <main className="main__container">
      <Navbar />
      <h1>mjau</h1>
    </main>
  );
}

export default Menu;

//postaviti share layout (navbar)
//napraviti redux slice koji se zove globalStateSlice
//u njemu ces imati Loading i user
//onda napraviti pocetnu stranu
//pogledati router link
