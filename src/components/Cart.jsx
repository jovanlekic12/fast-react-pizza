import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "../feature/cart/cartSlice";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router";

function Cart() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);
  const { userName } = useSelector((store) => store.global);
  return (
    <main className="main__container">
      <Navbar />
      <section className="cart__container">
        <Link to="/menu">Back to menu</Link>
        <h1>Your cart, {userName}</h1>
        <ul className="cart__list">
          {cartItems.map((item) => {
            return <CartItem {...item} key={item.id} />;
          })}
        </ul>
        <div className="cart__div__btn">
          <button className="order__btn">ORDER PIZZAS</button>
          <button
            className="clear__cart__btn"
            onClick={() => dispatch(clearCart())}
          >
            CLEAR CART
          </button>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default Cart;