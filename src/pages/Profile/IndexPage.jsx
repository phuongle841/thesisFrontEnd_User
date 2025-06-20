import {
  Avatar,
  Box,
  Card,
  CardMedia,
  Container,
  Skeleton,
  Typography,
} from "@mui/material";
import DirectoryLink from "../../components/DirectoryLink";
import Profile_ReviewContainer from "../../components/Profile_ReviewContainer";
import EditIcon from "@mui/icons-material/Edit";

import { useContext, useEffect, useState } from "react";

import { UserDataContext } from "../../components/Profile";
import { UserContext } from "../../context/userContext";

function ProfileIndex() {
  const { user } = useContext(UserDataContext);
  const { userId } = useContext(UserContext);

  return (
    <>
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
              <Box className={"editBox"}>
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
                <Box sx={{ flex: "auto" }}></Box>
                {user.userId == userId && (
                  <Box id={"editButton"}>
                    <DirectoryLink
                      link={"setting"}
                      buttonValue={"Edit profile"}
                      icon={<EditIcon></EditIcon>}
                    ></DirectoryLink>
                  </Box>
                )}
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
    </>
  );
}
export default ProfileIndex;
