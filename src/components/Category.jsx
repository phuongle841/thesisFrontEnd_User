import NavBar from "./NavBar";
import NavBarShopping from "./NavBar_Shopping";
import NavFooter from "./NavFooter";

// Display list of products
function Category(pros) {
  return (
    <>
      <NavBar></NavBar>
      <NavBarShopping></NavBarShopping>
      <div className="Category">
        <p>this is Category</p>
        <p>Which display a list of products</p>
      </div>
      <NavFooter></NavFooter>
    </>
  );
}
export default Category;
