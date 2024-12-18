function OrderItem(props) {
  const { quantity, name, totalPrice } = props;

  return (
    <li className="order__li">
      <div className="order__li__info">
        <div>
          <p>{quantity}x</p>
          <p>{name}</p>
        </div>
        <p className="order__li__ingredients">tomato</p>
      </div>
      <h5>${totalPrice}</h5>
    </li>
  );
}

export default OrderItem;
