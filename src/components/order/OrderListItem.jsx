import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function OrderItem(props) {
  const { quantity, name, totalPrice, pizzaId } = props;
  const [ingredients, setIngredients] = useState("");
  const { menuItems } = useSelector((store) => store.global);

  useEffect(() => {
    const pizza = menuItems.find((item) => item.id === pizzaId);
    if (pizza) {
      setIngredients(menuItems.find((item) => item.id === pizzaId).ingredients);
    }
  }, []);

  return (
    <li className="order__li">
      <div className="order__li__info">
        <div>
          <p>{quantity}x</p>
          <p>{name}</p>
        </div>
        <p className="order__li__ingredients">
          {ingredients && ingredients.join(", ")}
        </p>
      </div>
      <h5>${totalPrice}</h5>
    </li>
  );
}

export default OrderItem;
