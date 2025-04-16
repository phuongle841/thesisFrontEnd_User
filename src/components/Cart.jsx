import { useContext, useEffect, useState } from "react";
import { getCookieValue, deleteCookie } from "../utils/Cookies";
import NavBar from "./NavBar";
import NavBarShopping from "./NavBar_Shopping";
import NavFooter from "./NavFooter";
import { useNavigate } from "react-router-dom";
import { Button, Skeleton } from "@mui/material";
import { UserContext } from "../context/userContext";
import CartContainer from "./CartContainer";

function Cart() {
  const [data, setData] = useState([]);
  const { userId, setUserId } = useContext(UserContext);
  const cookieState = getCookieValue("Authorization");

  useEffect(() => {
    let ignore = false;
    fetch(`http://localhost:3000/users/${userId}/cart`, {
      mode: "cors",
      headers: { Authorization: cookieState },
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (ignore == false) {
          const { productList } = response;
          setData(productList);
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
      {data.length != 0 ? (
        <CartContainer data={data}></CartContainer>
      ) : (
        <Skeleton></Skeleton>
      )}
      <NavFooter></NavFooter>
    </>
  );
}

export default Cart;
