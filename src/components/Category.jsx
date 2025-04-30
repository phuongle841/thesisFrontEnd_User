import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import NavBarShopping from "./NavBar_Shopping";
import NavFooter from "./NavFooter";
import CategoriesProductPanel from "./CategoriesProductPanel";
import { useState, useEffect, useContext, useId } from "react";
import ResultDisplayBar from "./ResultDisplayBar";
import { Skeleton } from "@mui/material";
import CategoryService from "../services/CategoryService";
import { CartContext } from "../context/cartContext";
import cartService from "../services/cartService";
import { UserContext } from "../context/userContext";
import AuthorizationContext from "../context/authorizationContext";

// Display list of products
function Category() {
  const { id } = useParams();
  const [data, setData] = useState();
  const { cart } = useContext(CartContext);
  const { userId } = useContext(UserContext);
  const { authorization } = useContext(AuthorizationContext);

  useEffect(() => {
    if (userId == null || cart.length == 0) {
      return;
    }
    const updateCart = cartService.update;
    updateCart(userId, authorization, cart);
  }, [cart]);

  useEffect(() => {
    const fetchCategory = CategoryService.fetch;
    fetchCategory(id, setData);
  }, []);

  return (
    <>
      <NavBar></NavBar>
      <NavBarShopping></NavBarShopping>
      <ResultDisplayBar></ResultDisplayBar>
      {data ? (
        <CategoriesProductPanel data={data}></CategoriesProductPanel>
      ) : (
        <Skeleton></Skeleton>
      )}
      <NavFooter></NavFooter>
    </>
  );
}
export default Category;
