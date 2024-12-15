import { useSelector } from "react-redux";
import { selectTotalAmount, selectTotalPrice } from "../feature/cart/cartSlice";
import { useNavigate } from "react-router";
function Footer() {
  const navigate = useNavigate();
  const totalAmount = useSelector(selectTotalAmount);
  const totalPrice = useSelector(selectTotalPrice);
  return (
    <footer className="footer">
      <h1>
        {totalAmount} PIZZAS ${totalPrice}
      </h1>
      <button onClick={() => navigate("/cart")}>OPEN CART&rarr;</button>
    </footer>
  );
}

export default Footer;
