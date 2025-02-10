import "./App.css";
import NavBar from "./components/NavBar";
import NavBarShopping from "./components/NavBar_Shopping";
import ProductPanel from "./components/ProductPanel";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <NavBarShopping></NavBarShopping>
      <ProductPanel></ProductPanel>
    </>
  );
}

export default App;
