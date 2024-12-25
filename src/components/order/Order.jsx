import { useSelector } from "react-redux";
import Navbar from "../Navbar";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { format, differenceInMinutes } from "date-fns";
import OrderItem from "./OrderListItem";
function Order() {
  const url = "https://react-fast-pizza-api.onrender.com/api/order/";

  const now = new Date();
  let formatedDate = null;

  async function fetchOrderFromServer() {
    const response = await fetch(url + params.id);
    const data = await response.json();
    return data.data;
  }

  const fetchData = async () => {
    try {
      const data = await fetchOrderFromServer();
      setOrder(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPriority = async () => {
    try {
      const response = await fetch(url + params.id, {
        method: "PATCH",
        body: JSON.stringify({ priority: true }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setOrder(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const [order, setOrder] = useState({});
  let params = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const {
    cart,
    id,
    customer,
    estimatedDelivery,
    orderPrice,
    priority,
    priorityPrice,
    status,
  } = order;

  if (estimatedDelivery) {
    formatedDate = new Date(estimatedDelivery);
  }

  const timeLeft = formatedDate ? differenceInMinutes(formatedDate, now) : null;
  const formattedDeliveryDate = formatedDate
    ? format(formatedDate, "MMM d, hh:mm a")
    : "Invalid date";

  return (
    <main className="main__container">
      <Navbar></Navbar>
      <section className="cart__container">
        <div className="status__div">
          <h1>Order #{id} status</h1>
          <div>
            {priority ? <h1 className="priority">PRIORITY</h1> : ""}
            <h1 className="preparing__order">PREPARING ORDER</h1>
          </div>
        </div>
        <div className="order__time__div">
          {timeLeft !== null ? (
            <>
              <h1>Only {timeLeft} minutes left</h1>
              <p>(Estimated delivery: {formattedDeliveryDate})</p>
            </>
          ) : (
            <h1>Estimated delivery time is not available</h1>
          )}
        </div>
        <ul className="final__order__list">
          {cart &&
            cart.map((item) => {
              return <OrderItem {...item} key={item.pizzaId} />;
            })}
        </ul>
        <h4 className="order__price">Price pizza: ${orderPrice}</h4>
        <h3 className="order__price">
          To pay on delivery: $
          {priority ? priorityPrice + orderPrice : orderPrice}
        </h3>
        {priority ? (
          ""
        ) : (
          <button className="priorty__btn" onClick={fetchPriority}>
            MAKE PRIORITY
          </button>
        )}
      </section>
    </main>
  );
}

export default Order;
