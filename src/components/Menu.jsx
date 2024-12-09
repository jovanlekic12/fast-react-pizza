import Navbar from "./Navbar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function Menu() {
  const dispatch = useDispatch();

  useEffect(dispatch(fetchItems()), []);

  return (
    <main className="main__container">
      <Navbar />
    </main>
  );
}

export default Menu;

//postaviti share layout (navbar)
//napraviti redux slice koji se zove globalStateSlice
//u njemu ces imati Loading i user
//onda napraviti pocetnu stranu
//pogledati router link
