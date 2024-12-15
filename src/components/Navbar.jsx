import Input from "./reusable/Input";
import { useSelector } from "react-redux";
import { Link } from "react-router";

function Navbar() {
  const { userName } = useSelector((store) => store.global);

  return (
    <nav className="navbar">
      <Link to="/" className="home__link">
        <h1>Fast React Pizza Co.</h1>
      </Link>
      <Input placeholder="Search order #" type="text" />
      {userName ? <h3>{userName}</h3> : ""}
    </nav>
  );
}

export default Navbar;
