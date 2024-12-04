import Navbar from "./Navbar";
import Input from "./reusable/Input";

function Home() {
  return (
    <main className="main__container">
      <Navbar></Navbar>
      <div>
        <h1>The best pizza .</h1>
        <h2>Straight out of the oven, straight to you .</h2>
      </div>
      <form className="homepage__form">
        <p>👋🏼 Welcome! Please start telling us your name:</p>
        <Input placeholder="Your full name" type="text" />
      </form>
    </main>
  );
}

export default Home;
