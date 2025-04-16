import { useContext, useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LoginIcon from "@mui/icons-material/Login";
import { Badge, Box, Button, Menu } from "@mui/material";
import Asynchronous from "./AsynchronousSearchBar";
import DirectoryLink from "./DirectoryLink";
import { DirectoryLinkSetting } from "./DirectoryLink";
import { deleteCookie, getCookieValue, setCookie } from "../utils/Cookies";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const { userId, setUserId } = useContext(UserContext);

  const [anchorElUser, setAnchorElUser] = useState(null);

  function logout() {
    deleteCookie("Authorization");
    // same as but still have to reload page
    // link: https://stackoverflow.com/questions/21920162/cookie-not-set-until-a-second-refresh
    // setCookie("Authorization", "");
    setUserId(null);
    navigate("/");
  }

  const settings = [
    { setting: "profile", link: `/profile/${userId}`, callBack: () => {} },
    { setting: "dashboard", link: "/", callBack: () => {} },
    {
      setting: "logout",
      link: "",
      callBack: logout,
    },
  ];
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  useEffect(() => {
    let ignore = false;

    if (getCookieValue("Authorization") != "" && userId == null) {
      fetch(`http://localhost:3000/users/authenticate`, {
        mode: "cors",
        headers: { Authorization: getCookieValue("Authorization") },
      })
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          if (ignore == false) {
            setUserId(response.userId);
          }
        })
        .catch((error) => console.error(error));
    }
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <Box
      display={"flex"}
      alignContent={"center"}
      justifyContent={"center"}
      padding={"2px"}
    >
      <DirectoryLink
        link={"/"}
        buttonValue={"Home"}
        icon={<HomeIcon></HomeIcon>}
      ></DirectoryLink>
      <DirectoryLink
        link={userId ? `/location/${userId}` : `/login`}
        buttonValue={"Delivery to VietNam"}
        icon={<LocationOnIcon></LocationOnIcon>}
      ></DirectoryLink>

      <Box flex={"auto"}>
        <Asynchronous></Asynchronous>
      </Box>

      <DirectoryLink
        link={userId ? `/order/${userId}` : `/login`}
        buttonValue={"Return & Order"}
        icon={<AirportShuttleIcon></AirportShuttleIcon>}
      ></DirectoryLink>

      <DirectoryLink
        link={userId ? `/cart/${userId}` : `/login`}
        buttonValue={"Cart"}
        icon={
          <Badge badgeContent={4} color="primary" size={"small"}>
            <ShoppingCartIcon></ShoppingCartIcon>
          </Badge>
        }
      ></DirectoryLink>
      {userId != null ? (
        <>
          <Button onClick={handleOpenUserMenu}>
            <AccountCircleIcon></AccountCircleIcon>
            {"Hello"}
          </Button>
          <Menu
            sx={{ mt: "45px" }}
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((item) => (
              <DirectoryLinkSetting
                key={item.setting}
                link={item.link}
                buttonValue={item.setting}
                callbackFunction={item.callBack}
              ></DirectoryLinkSetting>
            ))}
          </Menu>
        </>
      ) : (
        <DirectoryLink
          link={"/login"}
          buttonValue={"Login"}
          icon={<LoginIcon></LoginIcon>}
        ></DirectoryLink>
      )}
    </Box>
  );
}
export default NavBar;
