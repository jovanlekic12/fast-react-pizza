import Navbar from "../Navbar";
import Input from "../reusable/Input";
import { useSelector } from "react-redux";
import { selectTotalPrice } from "../../feature/cart/cartSlice";

function OrderForm() {
  const totalPrice = useSelector(selectTotalPrice);

  return (
    <form className="order__form">
      <div className="input__div">
        <label htmlFor="FirstName">First Name</label>
        <Input type="text" placeholder="Your first name"></Input>
      </div>
      <div className="input__div">
        <label htmlFor="PhoneNumber">Phone Number</label>
        <Input type="text" placeholder="Your phone number"></Input>
      </div>
      <div className="input__div">
        <label htmlFor="address">Address</label>
        <Input type="text" placeholder="Your address"></Input>
        <button>GET POSITION</button>
      </div>
      <div className="checkbox__div">
        <Input type="checkbox"></Input>
        <label htmlFor="checkbox">Want to give your order priority?</label>
      </div>
      <button className="order__form__btn">ORDER NOW FOR ${totalPrice}</button>
    </form>
  );
}

export default OrderForm;
