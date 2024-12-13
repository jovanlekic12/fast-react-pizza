import { useSelector } from "react-redux";
import { selectTotalAmount, selectTotalPrice } from "../feature/cart/cartSlice";
function Footer() {
  const { amount, price } = useSelector((store) => store.cart);
  const totalAmount = useSelector(selectTotalAmount);
  const totalPrice = useSelector(selectTotalPrice);
  return (
    <footer className="footer">
      <h1>
        {totalAmount} PIZZAS ${totalPrice}
      </h1>
      <button>OPEN CART&rarr;</button>
    </footer>
  );
}

export default Footer;
