import { createContext } from "react";
export const OrderContext = createContext({
  orders: [],
  addOrder: () => {},
  removeOrder: () => {},
  order: () => {},
});
