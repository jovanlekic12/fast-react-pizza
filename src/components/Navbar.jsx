import Input from "./reusable/Input";
import { useSelector } from "react-redux";
import { Link } from "react-router";

function Navbar() {
  const { userName } = useSelector((store) => store.global);

  return (
    <nav className="navbar">
      <h1>Fast React Pizza Co.</h1>
      <Input placeholder="Search order #" type="text" />
      {userName ? <h3>{userName}</h3> : ""}
    </nav>
  );
}

export default Navbar;
