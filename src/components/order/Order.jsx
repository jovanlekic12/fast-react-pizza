import { useSelector } from "react-redux";
import Navbar from "../Navbar";
import { useParams } from "react-router";

function Order() {
  const { order } = useSelector((store) => store.order);

  let params = useParams();

  console.log(params);

  return (
    <main className="main__container">
      <Navbar></Navbar>
      <section className="cart__container">
        <h1>KURCINA</h1>
      </section>
    </main>
  );
}

export default Order;
