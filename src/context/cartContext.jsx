import { createContext } from "react";

export const CartContext = createContext({
  cartItems: [],
  addCartItems: () => {},
  removeCartItem: () => {},
  setCartItems: () => {},
});
