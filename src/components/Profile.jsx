import {
  Avatar,
  Box,
  Card,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import NavBar from "./NavBar";
import NavBarShopping from "./NavBar_Shopping";
import NavFooter from "./NavFooter";
import { useState, useEffect } from "react";
function Profile() {
  const [data, setData] = useState();

  useEffect(() => {
    let ignore = false;
    fetch("http://localhost:3000/user/reviews", { mode: "cors" })
      .then((response) => response.json())
      .then((response) => {
        if (!ignore) {
          setData(response);
        }
      })
      .catch((error) => console.error(error));
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <>
      <NavBar></NavBar>
      <NavBarShopping></NavBarShopping>
      <Box component={Container} flex={"auto"}>
        <Card>
          <CardMedia
            id="profile-background"
            height={"200px"}
            component={"img"}
            sx={{ marginBottom: "-5%", boxShadow: "none" }}
            image="https://pbs.twimg.com/profile_banners/1200578060719779840/1709963098/1500x500"
          ></CardMedia>
          <Box display={"flex"} alignItems={"end"}>
            <Avatar
              src="https://pbs.twimg.com/profile_images/1766336382090510336/oxWOI8LE_400x400.jpg"
              sx={{
                width: "130px",
                height: "130px",
                marginLeft: 5,
              }}
            ></Avatar>
            <Box>
              <Typography>Dolls</Typography>
              <Typography>@ITITIU20281</Typography>
            </Box>
          </Box>
        </Card>
        {data ? <Box></Box> : <></>}
      </Box>
      <NavFooter></NavFooter>
    </>
  );
}
export default Profile;
