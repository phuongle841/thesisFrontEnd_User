import { Box, Container } from "@mui/material";
import NavBar from "./NavBar";
import NavBarShopping from "./NavBar_Shopping";
import NavFooter from "./NavFooter";
import { useContext, useEffect, useId, useState } from "react";
import { UserContext } from "../context/userContext";
import { getCookieValue } from "../utils/Cookies";
import locationService from "../services/locationService";
function Location() {
  const [data, setData] = useState(null);
  const { userId } = useContext(UserContext);
  const Authorization = getCookieValue("Authorization");
  useEffect(() => {
    if (!useId) {
      return;
    }
    const fetchLocation = locationService.fetch;
    fetchLocation(userId, Authorization, setData);
  }, []);

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
        {data != null && <p>{data.location}</p>}
      </Box>
      <NavFooter></NavFooter>
    </>
  );
}
export default Location;
