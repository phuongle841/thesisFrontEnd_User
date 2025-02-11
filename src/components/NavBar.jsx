import "../styles/NavBar.css";
function NavBar() {
  return (
    <div className="navBar">
      <p>HOME</p>
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
