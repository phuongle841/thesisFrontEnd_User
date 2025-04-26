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
import { deleteCookie, getCookieValue } from "../utils/Cookies";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import useSyncCart from "../hooks/useSyncCart";
import cartService from "../services/cartService";
import userService from "../services/userService";

function NavBar() {
  const navigate = useNavigate();
  const { userId, setUserId } = useContext(UserContext);
  const { cart, setCartItems } = useContext(CartContext);

  const Authorization = getCookieValue("Authorization");

  const [anchorElUser, setAnchorElUser] = useState(null);

  function logout() {
    deleteCookie("Authorization");
    setUserId(null);
    setCartItems([]);
    navigate("/login");
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
    if (Authorization == "") {
      return;
    }
    let authentication = userService.authenticate;
    authentication(Authorization, setUserId);
  }, []);

  // set cart context
  useEffect(() => {
    if (userId == null) {
      return;
    }
    const fetchCart = cartService.fetch;
    fetchCart(userId, Authorization, setCartItems);
  }, []);

  // post user cart
  // useSyncCart({ userId, cart, cookieState });

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
