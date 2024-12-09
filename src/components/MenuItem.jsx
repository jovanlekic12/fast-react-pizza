import { useState } from "react";
import { useSelector } from "react-redux";

function MenuItem(props) {
  const [isInCart, setIsInCart] = useState(false);

  const { id, name, unitPrice, imageUrl, ingredients, soldOut } = props;

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
            <button>-</button>
            <h1></h1>
            <button>+</button>
          </div>
          <button className="menu__item__delete">delete</button>
        </div>
      ) : (
        <button
          className="add__to__cart__btn"
          onClick={() => setIsInCart(true)}
        >
          add to cart
        </button>
      )}
    </li>
  );
}

export default MenuItem;
