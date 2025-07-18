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
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import AuthorizationContext from "../context/authorizationContext";

function NavBar() {
  const navigate = useNavigate();
  const { userId, setUserId, removeUserId } = useContext(UserContext);
  const { cart, setCartItems } = useContext(CartContext);
  const { authorization, removeAuthorization } =
    useContext(AuthorizationContext);
  const [anchorElUser, setAnchorElUser] = useState(null);

  function logout() {
    removeAuthorization();
    removeUserId();
    navigate("/login");
  }

  const settings = [
    { setting: "profile", link: `/profile/${userId}`, callBack: () => {} },
    {
      setting: "dashboard",
      link: "http://localhost:5174/",
      callBack: () => {},
    },
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
        link={userId ? `/location` : `/login`}
        buttonValue={"Delivery to VietNam"}
        icon={<LocationOnIcon></LocationOnIcon>}
      ></DirectoryLink>

      <Box flex={"auto"}>
        <Asynchronous></Asynchronous>
      </Box>

      <DirectoryLink
        link={userId ? `/order` : `/login`}
        buttonValue={"Return & Order"}
        icon={<AirportShuttleIcon></AirportShuttleIcon>}
      ></DirectoryLink>

      <DirectoryLink
        link={userId ? `/cart` : `/login`}
        buttonValue={"Cart"}
        icon={
          <Badge badgeContent={cart.length} color="primary" size={"small"}>
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
