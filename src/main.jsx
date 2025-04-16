import { StrictMode, useEffect, useId, useState } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import indexRoute from "./routes/indexRoute.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "./styles/themes.jsx";
import { CartContext } from "./context/cartContext.jsx";
import { UserContext } from "./context/userContext.jsx";
import { getCookieValue } from "./utils/Cookies.js";
const router = createBrowserRouter(indexRoute);
// todo: later refactor to separate module
export default function ConTextApp() {
  const [cartItems, setCartItems] = useState([]);
  // be careful with the Id and ID
  const [userId, setUserID] = useState(null);

  function addToCart(newCartItem) {
    let newCart = [...cartItems].push(newCartItem);
    setCartItems(newCart);
  }

  function setUserId(userId) {
    setUserID(userId);
  }

  return (
    <UserContext.Provider value={{ userId, setUserId }}>
      <CartContext.Provider value={{ cartItems, addToCart }}>
        <RouterProvider router={router}></RouterProvider>
      </CartContext.Provider>{" "}
    </UserContext.Provider>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <ConTextApp></ConTextApp>
    </ThemeProvider>
  </StrictMode>
);
