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
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Profile_ReviewContainer from "./Profile_ReviewContainer";
import { UserContext } from "../context/userContext";
function Profile() {
  const [user, setUserInformation] = useState([]);

  const fakeData = {
    userName: "Dolls",
    userEmail: "@ITITIU20281",
    userBackgroundUrl:
      "https://pbs.twimg.com/profile_banners/1200578060719779840/1709963098/1500x500",
    userAvatarUrl:
      "https://pbs.twimg.com/profile_images/1766336382090510336/oxWOI8LE_400x400.jpg",
    userReviews: [],
  };

  const [reviews, setReview] = useState([]);

  const { id } = useParams();
  console.log();

  useEffect(() => {
    let ignore = false;
    if (id != null) {
      fetch(`http://localhost:3000/users/${id}/reviews`, { mode: "cors" })
        .then((response) => response.json())
        .then((response) => {
          if (!ignore) {
            setReview(response);
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
      <Box
        component={Container}
        flex={"auto"}
        display={"flex"}
        flexDirection={"column"}
      >
        <Card>
          <CardMedia
            id="profile-background"
            height={"200px"}
            component={"img"}
            sx={{ marginBottom: "-5%", boxShadow: "none" }}
            image={fakeData.userBackgroundUrl}
          ></CardMedia>
          <Box display={"flex"} alignItems={"end"}>
            <Avatar
              src={fakeData.userAvatarUrl}
              sx={{
                width: "130px",
                height: "130px",
                marginLeft: 5,
              }}
            ></Avatar>
            <Box>
              <Typography>{fakeData.userName}</Typography>
              <Typography>{fakeData.userEmail}</Typography>
            </Box>
          </Box>
        </Card>
        {reviews.length == 0 ? (
          <Skeleton variant="rounded" animation={"pulse"}></Skeleton>
        ) : (
          <Profile_ReviewContainer
            reviews={reviews.userReviews}
          ></Profile_ReviewContainer>
        )}
      </Box>
      <NavFooter></NavFooter>
    </>
  );
}
export default Profile;
