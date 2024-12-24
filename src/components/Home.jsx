import Navbar from "./Navbar";
import Input from "./reusable/Input";
import { useDispatch, useSelector } from "react-redux";
import { setName } from "../feature/globalStateSlice";
import { useState } from "react";
import { useNavigate } from "react-router";
import Button from "./reusable/Button";
function Home() {
  const [inputValue, setInputValue] = useState("");
  const { userName } = useSelector((store) => store.global);

  const dispatch = useDispatch();
  let navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(setName(inputValue));
    navigate("/menu");
  }

  return (
    <main className="main__container">
      <Navbar></Navbar>
      <div className="title__div">
        <h1>The best pizza .</h1>
        <h2>Straight out of the oven, straight to you .</h2>
      </div>
      {userName ? (
        <Button type="button" onClick={() => navigate("/menu")}>
          CONTINUE ORDERING
        </Button>
      ) : (
        <form
          className="homepage__form"
          onSubmit={(event) => handleSubmit(event)}
        >
          <p>👋🏼 Welcome! Please start telling us your name:</p>
          <Input
            placeholder="Your full name"
            type="text"
            onChange={(event) => setInputValue(event.target.value)}
          />
          {inputValue ? <Button type="button">Start ordering</Button> : ""}
        </form>
      )}
    </main>
  );
}

export default Home;
