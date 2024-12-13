function CartItem() {
  return (
    <li className="cart__list__item">
      <div>
        <p>{amount}x</p>
        <p>{name}</p>
      </div>
      <p>{price}</p>
      <div>
        <div>
          <button
            onClick={() => {
              dispatch(decrease({ id }));
              handleDecrease();
            }}
          >
            -
          </button>
          <h1>{amount}</h1>
          <button
            onClick={() => {
              dispatch(increase({ id }));
              setAmount((prev) => prev + 1);
            }}
          >
            +
          </button>
        </div>
        <button
          className="menu__item__delete"
          onClick={() => {
            dispatch(removeItem(id));
            handleDelete();
          }}
        >
          delete
        </button>
      </div>
    </li>
  );
}

export default CartItem;
