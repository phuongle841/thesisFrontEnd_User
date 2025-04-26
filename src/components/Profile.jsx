import {
  Avatar,
  Box,
  Card,
  CardMedia,
  Container,
  Skeleton,
  Typography,
} from "@mui/material";
import NavBar from "./NavBar";
import NavBarShopping from "./NavBar_Shopping";
import NavFooter from "./NavFooter";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Profile_ReviewContainer from "./Profile_ReviewContainer";
import userService from "../services/userService";

function Profile() {
  const [user, setUserInformation] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    const fetchUser = userService.fetch;
    fetchUser(id, "", false, setUserInformation);
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
        {user != null ? (
          <>
            <Card>
              <CardMedia
                id="profile-background"
                height={"200px"}
                component={"img"}
                sx={{ marginBottom: "-5%", boxShadow: "none" }}
                image={user.userBackgroundUrl}
              ></CardMedia>
              <Box display={"flex"} alignItems={"end"}>
                <Avatar
                  src={user.userAvatarUrl}
                  sx={{
                    width: "130px",
                    height: "130px",
                    marginLeft: 5,
                  }}
                ></Avatar>
                <Box>
                  <Typography>{user.userName}</Typography>
                  <Typography>{user.userEmail}</Typography>
                </Box>
              </Box>
            </Card>
            <Profile_ReviewContainer
              reviews={user.userReviews}
            ></Profile_ReviewContainer>
          </>
        ) : (
          <Skeleton></Skeleton>
        )}
      </Box>
      <NavFooter></NavFooter>
    </>
  );
}
export default Profile;
