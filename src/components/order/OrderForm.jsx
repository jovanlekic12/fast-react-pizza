import Navbar from "../Navbar";
import { useEffect, useState } from "react";
import Input from "../reusable/Input";
import { useDispatch, useSelector } from "react-redux";
import { selectTotalPrice } from "../../feature/cart/cartSlice";
import { clearCart } from "../../feature/cart/cartSlice";
import { Await, useNavigate } from "react-router";

function OrderForm() {
  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [location, setLocation] = useState();
  const { userName } = useSelector((store) => store.global);
  const { cartItems } = useSelector((store) => store.cart);
  const [orderID, setOrderID] = useState("");
  const [newCart, setCart] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function getLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
  }

  const fetchLocation = async () => {
    try {
      const response = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}`
      );
      const data = await response.json();
      setLocation(`${data.city}, ${data.locality}, ${data.countryName}`);
    } catch (error) {
      console.log(error);
    }
  };

  function handleSetCart() {
    const newCart = cartItems.map((item) => {
      return {
        pizzaId: item.id,
        name: item.name,
        quantity: item.amount,
        unitPrice: item.unitPrice,
        totalPrice: item.unitPrice * item.amount,
      };
    });
    setCart(newCart);
  }
  const [body, setBody] = useState({
    address: "",
    cart: [],
    customer: userName,
    phone: "",
    position: "",
    priority: false,
  });
  useEffect(() => {
    handleSetCart();
  }, []);

  useEffect(() => {
    if (location) {
      handleUpdateField("address", location);
    }
  }, [location]);

  const totalPrice = useSelector(selectTotalPrice);
  const url = "https://react-fast-pizza-api.onrender.com/api/order";

  async function fetchOrder() {
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      setOrderID(data.data.id);
      return data.data.id;
    } catch (error) {
      console.error("Error placing order:", error);
      throw error;
    }
  }

  function handleUpdateField(name, field) {
    const newBody = { ...body, [name]: field };
    setBody(newBody);
    setBody((prev) => {
      return { ...prev, cart: newCart };
    });
  }

  async function handleSubmitForm(event) {
    event.preventDefault();
    try {
      const orderId = await fetchOrder();
      navigate(`/order/${orderId}`);
      dispatch(clearCart());
    } catch (error) {
      console.error("Error during order submission:", error);
    }
  }

  return (
    <form className="order__form" onSubmit={(event) => handleSubmitForm(event)}>
      <div className="input__div">
        <label htmlFor="FirstName">First Name</label>
        <Input
          type="text"
          name="customer"
          placeholder="Your first name"
          value={userName}
          onChange={(event) =>
            handleUpdateField(
              event.target.getAttribute("name"),
              event.target.value
            )
          }
        ></Input>
      </div>
      <div className="input__div">
        <label htmlFor="PhoneNumber">Phone Number</label>
        <Input
          type="text"
          name="phone"
          placeholder="Your phone number"
          onChange={(event) =>
            handleUpdateField(
              event.target.getAttribute("name"),
              event.target.value
            )
          }
        ></Input>
      </div>
      <div className="input__div">
        <label htmlFor="address">Address</label>
        <div>
          <Input
            type="text"
            name="address"
            value={location}
            placeholder="Your address"
            onChange={(event) =>
              handleUpdateField(
                event.target.getAttribute("name"),
                event.target.value
              )
            }
          ></Input>
          <button
            type="button"
            onClick={() => {
              getLocation();
              fetchLocation();
            }}
          >
            GET POSITION
          </button>
        </div>
      </div>
      <div className="checkbox__div">
        <input
          type="checkbox"
          name="priority"
          value={userName}
          onChange={(event) =>
            handleUpdateField(
              event.target.getAttribute("name"),
              event.target.checked
            )
          }
        ></input>
        <label htmlFor="checkbox">Want to give your order priority?</label>
      </div>
      <button className="order__form__btn">ORDER NOW FOR ${totalPrice}</button>
    </form>
  );
}

export default OrderForm;
