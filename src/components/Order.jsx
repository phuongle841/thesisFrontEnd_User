import { Box, Container } from "@mui/material";
import NavBar from "./NavBar";
import NavBarShopping from "./NavBar_Shopping";
import NavFooter from "./NavFooter";
function Order() {
  return (
    <>
      <NavBar></NavBar>
      <NavBarShopping></NavBarShopping>
      <Box component={Container}></Box>
      <NavFooter></NavFooter>
    </>
  );
}
export default Order;
