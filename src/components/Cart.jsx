import { useContext, useEffect, useState } from "react";
import { getCookieValue } from "../utils/Cookies";
import NavBar from "./NavBar";
import NavBarShopping from "./NavBar_Shopping";
import NavFooter from "./NavFooter";
import {
  Box,
  Button,
  Container,
  Divider,
  Skeleton,
  Typography,
} from "@mui/material";
import { UserContext } from "../context/userContext";
import SearchIcon from "@mui/icons-material/Search";
import CartContainer from "./CartContainer";
import { CartContext } from "../context/cartContext";
import { Router, Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";

function Cart() {
  const { userId } = useContext(UserContext);
  const { cart } = useContext(CartContext);

  const [orderState, setOrderState] = useState(false);
  const cookieState = getCookieValue("Authorization");
  useEffect(() => {
    let ignore = false;
    if (userId != null && orderState == true) {
      const data = cart.map((e) => e.productId);
      fetch(`http://localhost:3000/users/${userId}/orders`, {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: cookieState,
        },
        body: JSON.stringify({ data: data }),
      })
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          if (ignore == false) {
            // todo
          }
        })
        .catch((error) => console.error(error));
    }
    return () => {
      ignore = true;
    };
  }, [orderState]);

  function handleOrder() {
    setOrderState(true);
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
