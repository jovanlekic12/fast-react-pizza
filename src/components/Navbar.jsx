import Input from "./reusable/Input";
import { useSelector } from "react-redux";

function Navbar() {
  const { userName } = useSelector((store) => store.global);

  return (
    <nav className="navbar">
      <h1>FAST REACT PIZZA</h1>
      <Input placeholder="Search order #" type="text" />
      {userName ? <h3>{userName}</h3> : ""}
    </nav>
  );
}

export default Navbar;
