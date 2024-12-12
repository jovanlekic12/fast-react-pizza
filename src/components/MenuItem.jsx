import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCartItem,
  decrease,
  increase,
  removeItem,
} from "../feature/cart/cartSlice";

function MenuItem(props) {
  const dispatch = useDispatch();
  const {
    id,
    name,
    unitPrice,
    imageUrl,
    ingredients,
    soldOut,
    amount,
    handleAddItem,
    isInCart,
  } = props;

  const { menuItems } = useSelector((store) => store.global);
  console.log("cart", menuItems);
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
            <button onClick={() => dispatch(decrease({ id }))}>-</button>
            <h1>{amount}</h1>
            <button onClick={() => dispatch(increase({ id }))}>+</button>
          </div>
          <button
            className="menu__item__delete"
            onClick={() => dispatch(removeItem(id))}
          >
            delete
          </button>
        </div>
      ) : (
        <button
          className="add__to__cart__btn"
          onClick={() => {
            dispatch(addCartItem(handleAddItem(id)));
          }}
        >
          add to cart
        </button>
      )}
    </li>
  );
}

export default MenuItem;
