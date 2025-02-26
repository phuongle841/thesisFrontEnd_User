import { useState } from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";
function NavBar() {
  const [input, setInput] = useState("");
  const onChangeInput = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="navBar">
      <Link to={"/"}>Home</Link>
      <p>Delivery to VietNam</p>
      <div className="SearchBar">
        <input type="text" value={input} onChange={onChangeInput} />
      </div>
      <p>EN</p>
      <p>Hello, User.name</p>
      <p>Return & Order</p>
      <p>Cart</p>
    </div>
  );
}
export default NavBar;
