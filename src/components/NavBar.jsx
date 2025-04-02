import { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
// import "../styles/NavBar.css";
import { Link as RouterLink } from "react-router-dom";
import { Box, Button, Input, Link, TextField } from "@mui/material";
import Asynchronous from "./AsynchronousSearchBar";
function NavBar() {
  const directories = [
    { link: "", name },
    { link: "", name },
    { link: "", name },
    { link: "", name },
  ];
  return (
    <Box
      display={"flex"}
      alignContent={"center"}
      justifyContent={"center"}
      padding={"2px"}
    >
      <Link
        component={RouterLink}
        to={"/"}
        underline="none"
        color="primary"
        display={"inherit"}
      >
        <Button>Home</Button>
      </Link>
      <Button>
        <p>Delivery to VietNam</p>
      </Button>

      <Box flex={"auto"}>
        <Asynchronous></Asynchronous>
      </Box>
      <Link
        component={RouterLink}
        to={"/login"}
        display={"inherit"}
        underline="none"
      >
        <Button>
          <p>hello, signin</p>
        </Button>
      </Link>
      <Button>
        <AirportShuttleIcon />
        <p>Return & Order</p>
      </Button>
      <Link
        component={RouterLink}
        to={"/cart"}
        display={"inherit"}
        underline="none"
      >
        <Button>
          <ShoppingCartIcon />
          <p>Cart</p>
        </Button>
      </Link>
    </Box>
  );
}
export default NavBar;
