import Navbar from "../Navbar";
import { useDispatch, useSelector } from "react-redux";
import MenuItem from "../menu/MenuItem";
import Footer from "../Footer";
import useGetItems from "./useGetItems";

function Menu() {
  const dispatch = useDispatch();

  const { menuItems } = useSelector((store) => store.global);
  const { cartItems } = useSelector((store) => store.cart);
  function handleAddItem(id) {
    const item = menuItems.find((item) => item.id === id);
    return item;
  }

  useGetItems();

  return (
    <main className="main__container">
      <Navbar />
      <ul className="menu__list">
        {menuItems &&
          menuItems.map((item) => {
            return (
              <MenuItem key={item.id} {...item} handleAddItem={handleAddItem} />
            );
          })}
      </ul>
      {cartItems.length > 0 && <Footer></Footer>}
    </main>
  );
}

export default Menu;

//postaviti share layout (navbar)
//napraviti redux slice koji se zove globalStateSlice
//u njemu ces imati Loading i user
//onda napraviti pocetnu stranu
//pogledati router link
