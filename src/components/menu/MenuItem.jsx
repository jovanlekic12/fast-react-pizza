import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCartItem,
  decrease,
  increase,
  removeItem,
} from "../../feature/cart/cartSlice";

import { updateMenuItemAmount } from "../../feature/globalStateSlice";

function MenuItem(props) {
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();

  const {
    id,
    name,
    unitPrice,
    imageUrl,
    ingredients,
    soldOut,
    handleAddItem,
    itemAmount,
  } = props;

  function handleDecrease() {
    if (amount === 1) {
      return;
    } else setAmount((prev) => prev - 1);
  }

  return (
    <li className="menu__list__item" id={id}>
      <section>
        <img
          src={imageUrl}
          alt="picture of pizza"
          className={soldOut ? "sold__out pizza__photo" : "pizza__photo"}
        />
        <div className="menu__item__infos">
          <h3 className="menu__item__name">{name}</h3>
          <h3 className="menu__item__ingredients">{ingredients.join(", ")}</h3>
          {soldOut ? (
            <h3 className="sold__out">SOLD OUT</h3>
          ) : (
            <h3 className="menu__item__price">${unitPrice}</h3>
          )}
        </div>
      </section>
      {soldOut ? (
        ""
      ) : amount > 0 ? (
        <div className="menu__item__btn__div">
          <div>
            <button
              onClick={() => {
                dispatch(decrease({ id }));
                dispatch(updateMenuItemAmount({ amount, id }));
                handleDecrease();
              }}
            >
              -
            </button>
            <h1>{itemAmount}</h1>
            <button
              onClick={() => {
                dispatch(increase({ id }));
                setAmount((prev) => prev + 1);
                dispatch(updateMenuItemAmount({ amount, id }));
              }}
            >
              +
            </button>
          </div>
          <button
            className="menu__item__delete"
            onClick={() => {
              dispatch(removeItem(id));
              setAmount(0);
              dispatch(updateMenuItemAmount({ amount, id }));
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
            setAmount(1);
          }}
        >
          add to cart
        </button>
      )}
    </li>
  );
}

export default MenuItem;
