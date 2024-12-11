import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setMenuItems } from "../feature/globalStateSlice";
import MenuItem from "./MenuItem";
function Menu() {
  const url = "https://react-fast-pizza-api.onrender.com/api/menu";
  const dispatch = useDispatch();

  const fetchItems = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch(setMenuItems(data.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const { menuItems } = useSelector((store) => store.global);
  console.log(menuItems);

  return (
    <main className="main__container">
      <Navbar />
      <ul className="menu__list">
        {menuItems &&
          menuItems.map((item) => {
            return <MenuItem key={item.id} {...item} />;
          })}
      </ul>
    </main>
  );
}

export default Menu;

//postaviti share layout (navbar)
//napraviti redux slice koji se zove globalStateSlice
//u njemu ces imati Loading i user
//onda napraviti pocetnu stranu
//pogledati router link
