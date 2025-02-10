import "../styles/NavBar.css";
function NavBar() {
  return (
    <div className="navBar">
      <div className="HomePage">
        <p>DT</p>
        <p>Delivery to VietNam</p>
      </div>
      <div className="SearchBar">
        <p>Search </p>
      </div>
      <div className="UserBar">
        <p>EN</p>
        <p>Hello, User.name</p>
        <p>Return & Order</p>
        <p>Cart</p>
      </div>
    </div>
  );
}
export default NavBar;
