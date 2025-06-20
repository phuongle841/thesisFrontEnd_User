import { Box, Button, Container } from "@mui/material";
import NavBar from "./NavBar";
import NavBarShopping from "./NavBar_Shopping";
import NavFooter from "./NavFooter";
import { useContext, useEffect, useId, useState } from "react";
import { UserContext } from "../context/userContext";
import { getCookieValue } from "../utils/Cookies";
import locationService from "../services/locationService";

function LocationList({ locations }) {
  const [edit, setEdit] = useState();

  return (
    <Box>
      {locations.map((element) => {
        console.log(element);
        return (
          <Box key={element.locationId}>
            <span>{element.address}</span>
            <span>
              <Button>Edit</Button>
              <Button>Remove</Button>
            </span>
          </Box>
        );
      })}
    </Box>
  );
}

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
  console.log(data);

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
        {data != null && <LocationList locations={data}></LocationList>}
      </Box>
      <NavFooter></NavFooter>
    </>
  );
}
export default Location;
