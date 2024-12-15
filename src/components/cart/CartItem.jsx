import { useDispatch } from "react-redux";
import { increase } from "../../feature/cart/cartSlice";
import { decrease } from "../../feature/cart/cartSlice";
import { removeItem } from "../../feature/cart/cartSlice";
function CartItem({ id, name, amount, unitPrice, setAmount, handleDelete }) {
  const dispatch = useDispatch();
  return (
    <li className="cart__list__item">
      <div className="cart__info__div">
        <p>{amount}x</p>
        <p>{name}</p>
      </div>
      <p className="cart__pizza__price">${unitPrice * amount}</p>
      <div className="menu__item__btn__div">
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
