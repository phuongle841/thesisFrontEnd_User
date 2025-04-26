import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import indexRoute from "./routes/indexRoute.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "./styles/themes.jsx";
import { CartContext } from "./context/cartContext.jsx";
import { UserContext } from "./context/userContext.jsx";
import AuthorizationContext from "./context/authorizationContext.jsx";
import { getCookieValue } from "./utils/Cookies.js";
const router = createBrowserRouter(indexRoute);

// todo: later refactor to separate module
export default function ConTextApp() {
  const [cart, setCart] = useState([]);
  // be careful with the Id and ID

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

  const [userId, setUserID] = useState(null);

  function setUserId(userId) {
    setUserID(userId);
  }
  // set authorization context
  const [authorization, setAuthorization] = useState(
    getCookieValue("Authorization")
  );

  return (
    <AuthorizationContext.Provider value={{ authorization, setAuthorization }}>
      <UserContext.Provider value={{ userId, setUserId }}>
        <CartContext.Provider
          value={{ cart, addCartItems, setCartItems, removeCartItem }}
        >
          <ThemeProvider theme={theme}>
            <RouterProvider router={router}></RouterProvider>
          </ThemeProvider>
        </CartContext.Provider>
      </UserContext.Provider>{" "}
    </AuthorizationContext.Provider>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ConTextApp></ConTextApp>
  </StrictMode>
);
