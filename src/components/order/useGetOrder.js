import { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react";
const url = "https://react-fast-pizza-api.onrender.com/api/order/";

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

export default function () {
  const [order, setOrder] = useState({});
  let params = useParams();

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchOrderFromServer();
        setOrder(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
}

async function fetchOrderFromServer() {
  const response = await fetch(url);
  const data = await response.json();
  return data.data;
}
