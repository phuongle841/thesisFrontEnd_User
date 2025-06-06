import { createContext } from "react";

export const CartContext = createContext({
  cartId: null,
  cartItems: [],
  setCartItems: () => {},
  addCartItems: () => {},
  removeCartItem: () => {},
  updateCartItem: () => {},
});
