import { createContext } from "react";

export const CartContext = createContext({
  cartId: null,
  cartItems: [],
  addCartItems: () => {},
  removeCartItem: () => {},
  setCartItems: () => {},
});
