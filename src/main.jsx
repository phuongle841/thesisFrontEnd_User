import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import indexRoute from "./routes/indexRoute.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "./styles/themes.jsx";
import { CartContext } from "./context/cartContext.jsx";
import { UserContext } from "./context/userContext.jsx";

const router = createBrowserRouter(indexRoute);
// todo: later refactor to separate module
export default function ConTextApp() {
  const [cart, setCart] = useState([]);
  // be careful with the Id and ID
  const [userId, setUserID] = useState(null);

  function addCartItems(newCartItem) {
    const newItems = [...cart];
    newItems.push({ productId: parseInt(newCartItem) });
    setCart(newItems);
  }

  function setCartItems(cartItems) {
    setCart(cartItems);
  }
  function removeCartItem(cartItems) {
    const newItems = cart.filter((e) => e.productId != cartItems);
    setCart(newItems);
  }

  function setUserId(userId) {
    setUserID(userId);
  }

  return (
    <UserContext.Provider value={{ userId, setUserId }}>
      <CartContext.Provider
        value={{ cart, addCartItems, setCartItems, removeCartItem }}
      >
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
