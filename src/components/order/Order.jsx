import Navbar from "../Navbar";
import OrderForm from "./OrderForm";

function OrderPage() {
  return (
    <main className="main__container">
      <Navbar></Navbar>
      <section className="cart__container">
        <h1>Ready to order? Let's go!</h1>
        <OrderForm></OrderForm>
      </section>
    </main>
  );
}

export default OrderPage;
