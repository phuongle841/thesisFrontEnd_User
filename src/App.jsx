import "./App.css";
import NavBar from "./components/NavBar";
import NavBarShopping from "./components/NavBar_Shopping";
import NavFooter from "./components/NavFooter";
import ProductPanel from "./components/ProductPanel";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <NavBarShopping></NavBarShopping>
      <ProductPanel></ProductPanel>
      <NavFooter></NavFooter>
    </>
  );
}

export default App;
