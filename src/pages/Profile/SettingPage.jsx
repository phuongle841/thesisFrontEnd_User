import { Box, Container } from "@mui/material";
import { useContext } from "react";
import { UserDataContext } from "../../components/Profile";

function ProfileSetting() {
  const { user } = useContext(UserDataContext);
  console.log(user);

  return (
    <Box
      component={Container}
      flex={"auto"}
      display={"flex"}
      flexDirection={"column"}
    >
      {user != null &&
        Object.keys(user)?.map((key, value) => {
          console.log(key + " " + user[key]);

          return <p key={key}>{key}</p>;
        })}
    </Box>
  );
}

export default ProfileSetting;
