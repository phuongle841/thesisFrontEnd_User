import { Box, Container } from "@mui/material";
import NavBar from "./NavBar";
import NavBarShopping from "./NavBar_Shopping";
import NavFooter from "./NavFooter";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/userContext";
import { getCookieValue } from "../utils/Cookies";
function Location() {
  const { userId } = useContext(UserContext);
  const cookieState = getCookieValue("Authorization");
  useEffect(() => {
    let ignore = false;
    if (getCookieValue("Authorization") != "" && userId == null) {
      fetch(`http://localhost:3000/location/${userId}/`, {
        mode: "cors",
        headers: { Authorization: cookieState },
      })
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          if (ignore == false) {
            console.log(response);
          }
        })
        .catch((error) => console.error(error));
    }
    return () => {
      ignore = true;
    };
  }, []);
  return (
    <>
      <NavBar></NavBar>
      <NavBarShopping></NavBarShopping>
      <Box component={Container}></Box>
      <NavFooter></NavFooter>
    </>
  );
}
export default Location;
