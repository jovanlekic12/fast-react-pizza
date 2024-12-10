import { useSelector } from "react-redux";

function MenuItem(props) {
  const { menuItems } = useSelector((store) => store.menu);

  const { id, name, unitPrice, imageUrl, ingredients, soldOut } = props;

  console.log(menuItems);

  return (
    <li className="menu__list__item">
      <img src={imageUrl} alt="picture of pizza" />
      <div className="menu__list__item__name__div">
        <h3>{name}</h3>
        <h3>{ingredients}</h3>
        {soldOut ? <h3>SOLD OUT</h3> : <h3>${unitPrice}</h3>}
      </div>
      <button className="add__to__cart__btn">add to cart</button>
    </li>
  );
}

export default MenuItem;
