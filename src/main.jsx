import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import indexRoute from "./routes/indexRoute.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "./styles/themes.jsx";
import { CartContext } from "./context/cartContext.jsx";
import { UserContext } from "./context/userContext.jsx";
import AuthorizationContext from "./context/authorizationContext.jsx";
import { deleteCookie, getCookieValue } from "./utils/Cookies.js";
import userService from "./services/userService.js";
import cartService from "./services/cartService.js";
import orderService from "./services/orderService.js";
const router = createBrowserRouter(indexRoute);

// todo: later refactor to separate module
export default function ConTextSetUp() {
  const [userId, setUserID] = useState(null);

  function setUserId(userId) {
    setUserID(userId);
  }

  function removeUserId() {
    setUserID(null);
  }

  // set authorization context
  const [authorization, setAuthorization] = useState(
    getCookieValue("Authorization")
  );

  function removeAuthorization() {
    deleteCookie("Authorization");
    setCartItems([]);
  }

  const [cart, setCart] = useState([]);

  function addCartItems(newCartItem) {
    // need function check if item already in cart
    const newItems = [...cart];
    newItems.push(newCartItem);
    setCart(newItems);
  }

  function setCartItems(cartItems) {
    setCart(cartItems);
  }

  function removeCartItem(cartItem) {
    const newItems = cart.filter(
      (e) => e.recordProduct.productId != cartItem.productId
    );
    postCart(newItems);
    setCartItems(newItems);
  }

  function updateCartItem(cartItem) {
    const { productId } = cartItem.recordProduct;
    const { quantity } = cartItem;

    const newItems = cart.map((e) => {
      if (e.recordProduct.productId == productId) {
        e.quantity = quantity;
      }
      return e;
    });
    postCart(newItems);
    setCartItems(newItems);
  }

  function postCart(newItems) {
    const updateCart = cartService.update;
    updateCart(userId, authorization, newItems);
  }

  useEffect(() => {
    if (authorization == "") {
      return;
    }
    let authentication = userService.authenticate;
    authentication(authorization, setUserId);
  }, []);

  useEffect(() => {
    if (userId == null) {
      return;
    }
    const fetchCart = cartService.fetch;
    fetchCart(userId, authorization, setCartItems);
  }, [userId]);

  return (
    <AuthorizationContext.Provider
      value={{ authorization, setAuthorization, removeAuthorization }}
    >
      <UserContext.Provider value={{ userId, setUserId, removeUserId }}>
        <CartContext.Provider
          value={{
            cart,
            addCartItems,
            setCartItems,
            removeCartItem,
            updateCartItem,
          }}
        >
          <ThemeProvider theme={theme}>
            <RouterProvider router={router}></RouterProvider>
          </ThemeProvider>
        </CartContext.Provider>
      </UserContext.Provider>
    </AuthorizationContext.Provider>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ConTextSetUp></ConTextSetUp>
  </StrictMode>
);
