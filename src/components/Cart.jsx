import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Cart() {
  const { cartItems } = useSelector((store) => store.cart);
  const { userName } = useSelector((store) => store.global);
  return (
    <main>
      <Navbar />
      <a href="/menu">Back to menu</a>
      <h1>Your cart, {userName}</h1>
      <ul className="cart__list">
        {cartItems.map((item) => {
          return <CartItem {...item} key={item.id} />;
        })}
      </ul>
      <Footer />
    </main>
  );
}

export default Cart;
