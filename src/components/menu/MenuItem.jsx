import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCartItem,
  decrease,
  increase,
  removeItem,
} from "../../feature/cart/cartSlice";

import { updateMenuItemAmount } from "../../feature/globalStateSlice";
import Button from "../reusable/Button";

function MenuItem(props) {
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);
  useEffect(() => {
    dispatch(updateMenuItemAmount({ amount, id }));
  }, [amount]);

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
            <Button
              onClick={() => {
                dispatch(decrease({ id }));
                handleDecrease();
              }}
            >
              -
            </Button>
            <h1>{itemAmount}</h1>
            <Button
              onClick={() => {
                dispatch(increase({ id }));
                setAmount((prev) => prev + 1);
              }}
            >
              +
            </Button>
          </div>
          <Button
            onClick={() => {
              dispatch(removeItem(id));
              setAmount(0);
            }}
          >
            delete
          </Button>
        </div>
      ) : (
        <Button
          className="add__to__cart__btn"
          onClick={() => {
            dispatch(addCartItem(handleAddItem(id)));
            setAmount(1);
          }}
        >
          add to cart
        </Button>
      )}
    </li>
  );
}

export default MenuItem;
