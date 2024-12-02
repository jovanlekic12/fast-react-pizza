import Input from "./reusable/Input";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>FAST REACT PIZZA</h1>
      <Input placeholder="Search order #" type="text" />
    </nav>
  );
}
