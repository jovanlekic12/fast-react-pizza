import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCartItem,
  decrease,
  increase,
  removeItem,
} from "../feature/cart/cartSlice";

function MenuItem(props) {
  const [isInCart, setIsInCart] = useState(false);
  const [amount, setAmount] = useState(1);

  const dispatch = useDispatch();
  const { id, name, unitPrice, imageUrl, ingredients, soldOut, handleAddItem } =
    props;

  function handleDecrease() {
    if (amount === 1) {
      setIsInCart(false);
      return;
    } else setAmount((prev) => prev - 1);
  }

  function handleDelete() {
    setAmount(1);
    setIsInCart(false);
  }

  return (
    <li className="menu__list__item" id={id}>
      <section>
        <img src={imageUrl} alt="picture of pizza" className="pizza__photo" />
        <div className="menu__item__infos">
          <h3 className="menu__item__name">{name}</h3>
          <h3 className="menu__item__ingredients">{ingredients}</h3>
          {soldOut ? (
            <h3>SOLD OUT</h3>
          ) : (
            <h3 className="menu__item__price">${unitPrice}</h3>
          )}
        </div>
      </section>
      {isInCart ? (
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
      ) : (
        <button
          className="add__to__cart__btn"
          onClick={() => {
            dispatch(addCartItem(handleAddItem(id)));
            setIsInCart(true);
          }}
        >
          add to cart
        </button>
      )}
    </li>
  );
}

export default MenuItem;
