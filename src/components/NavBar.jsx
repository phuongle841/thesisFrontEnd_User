import "../styles/NavBar.css";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className="navBar">
      <p>
        <Link to={"/"}>Home</Link>
      </p>
      <p>Delivery to VietNam</p>
      <div className="SearchBar">
        <input type="text" value="Search" />
      </div>
      <p>EN</p>
      <p>Hello, User.name</p>
      <p>Return & Order</p>
      <p>Cart</p>
    </div>
  );
}
export default NavBar;
