import { useSelector } from "react-redux";

function Footer() {
  const { amount, price } = useSelector((store) => store.cart);

  return (
    <footer className="footer">
      <h1>
        {amount} PIZZAS ${price}
      </h1>
      <button>OPEN CART&rarr;</button>
    </footer>
  );
}

export default Footer;
