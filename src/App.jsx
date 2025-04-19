import "./App.css";
import "@fontsource/roboto/300.css";

import NavBar from "./components/NavBar";
import NavBarShopping from "./components/NavBar_Shopping";
import NavFooter from "./components/NavFooter";
import ProductPanel from "./components/ProductPanel";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./context/userContext";
import { getCookieValue } from "./utils/Cookies";

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
