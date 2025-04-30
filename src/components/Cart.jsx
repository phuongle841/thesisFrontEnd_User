import { useContext, useEffect, useId, useState } from "react";
import { getCookieValue } from "../utils/Cookies";
import NavBar from "./NavBar";
import NavBarShopping from "./NavBar_Shopping";
import NavFooter from "./NavFooter";
import { Box, Button, Container, Divider, Typography } from "@mui/material";
import { UserContext } from "../context/userContext";
import SearchIcon from "@mui/icons-material/Search";
import CartContainer from "./CartContainer";
import { CartContext } from "../context/cartContext";
import { Link as RouterLink } from "react-router-dom";
import orderService from "../services/orderService";
import cartService from "../services/cartService";
import { OrderContext } from "../context/orderContext";
function Cart() {
  // how about set a use state here, every time remove the thing will change
  // and the popup go up
  const { userId } = useContext(UserContext);
  const { cart } = useContext(CartContext);
  const { orders, order } = useContext(OrderContext);

  function handleOrder() {
    order(cart);
  }

  return (
    <>
      <NavBar></NavBar>
      <NavBarShopping></NavBarShopping>
      <Box
        component={Container}
        flex={"auto"}
        display={"flex"}
        flexDirection={"column"}
      >
        {cart.length != 0 ? (
          <>
            <CartContainer data={cart}></CartContainer>
            <Box onClick={handleOrder} sx={{ alignSelf: "end" }}>
              <Button>Order</Button>
            </Box>
          </>
        ) : (
          <div style={{ width: "100%" }}>
            <h2>
              <SearchIcon></SearchIcon>There no item in here?{" "}
            </h2>
            <Divider></Divider>
            <h2>Want to wonder around to find something interesting</h2>
            <Typography component={RouterLink} to={"/"}>
              Today&#39;s deal
            </Typography>
          </div>
        )}
      </Box>

      <NavFooter></NavFooter>
    </>
  );
}

export default Cart;
