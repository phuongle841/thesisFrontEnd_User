import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import indexRoute from "./routes/indexRoute.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "./styles/themes.jsx";
import { CartContext } from "./context/cartContext.jsx";
import { UserContext } from "./context/userContext.jsx";
import { OrderContext } from "./context/orderContext.jsx";
import AuthorizationContext from "./context/authorizationContext.jsx";
import { deleteCookie, getCookieValue } from "./utils/Cookies.js";
import userService from "./services/userService.js";
import cartService from "./services/cartService.js";
import orderService from "./services/orderService.js";
const router = createBrowserRouter(indexRoute);

// todo: later refactor to separate module
export default function ConTextSetUp() {
  const Authorization = getCookieValue("Authorization");

  const [userId, setUserID] = useState(null);

  function setUserId(userId) {
    setUserID(userId);
  }
  // set authorization context
  const [authorization, setAuthorization] = useState(
    getCookieValue("Authorization")
  );

  function removeAuthorization() {
    deleteCookie("Authorization");
    setUserId(null);
    setCartItems([]);
  }

  const [cart, setCart] = useState([]);

  function addCartItems(newCartItem) {
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
    const updateCart = cartService.update;
    updateCart(userId, authorization, newItems);
    setCart(newItems);
  }

  useEffect(() => {
    if (Authorization == "") {
      return;
    }
    let authentication = userService.authenticate;
    authentication(Authorization, setUserId);
  }, []);

  useEffect(() => {
    if (userId == null) {
      return;
    }
    const fetchCart = cartService.fetch;
    fetchCart(userId, Authorization, setCartItems);
  }, [userId]);

  useEffect(() => {
    if (userId == null) {
      return;
    }
    const fetchOrders = orderService.fetch;
    fetchOrders(userId, authorization, addOrderItems);
  }, [userId]);

  const [orders, setOrders] = useState([]);

  function order(order) {
    // update to zero cart first
    const updateCart = cartService.update;
    updateCart(userId, authorization, []);
    const updateOrder = orderService.order;
    updateOrder(userId, authorization, order, () => {
      console.log("working");
      // but the amazon is separate teh cart into multiples orders
      //
    });
    // then update order
    // then update the current cart
    // how about update order?
    setCart([]);
  }

  function addOrderItems(value) {
    setOrders(value);
  }
  function removeOrderItems(value) {
    setOrders(value);
  }

  return (
    <AuthorizationContext.Provider
      value={{ authorization, setAuthorization, removeAuthorization }}
    >
      <UserContext.Provider value={{ userId, setUserId }}>
        <OrderContext.Provider
          value={{ orders, addOrderItems, removeOrderItems, order }}
        >
          <CartContext.Provider
            value={{ cart, addCartItems, setCartItems, removeCartItem }}
          >
            <ThemeProvider theme={theme}>
              <RouterProvider router={router}></RouterProvider>
            </ThemeProvider>
          </CartContext.Provider>
        </OrderContext.Provider>
      </UserContext.Provider>
    </AuthorizationContext.Provider>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ConTextSetUp></ConTextSetUp>
  </StrictMode>
);
