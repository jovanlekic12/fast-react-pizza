import { useState } from "react";
import Input from "./reusable/Input";
import { useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router";

function Navbar() {
  const [input, setInput] = useState();
  const { userName } = useSelector((store) => store.global);
  const navigate = useNavigate();

  function handleSubmit() {
    navigate(`order/${input}`);
  }

  return (
    <nav className="navbar">
      <Link to="/" className="home__link">
        <h1>Fast React Pizza Co.</h1>
      </Link>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Search order #"
          type="text"
          onChange={(event) => setInput(event.target.value)}
        />
      </form>
      {userName ? <h3>{userName}</h3> : ""}
    </nav>
  );
}

export default Navbar;
