import { Box, Container, Skeleton } from "@mui/material";
import NavBar from "./NavBar";
import NavBarShopping from "./NavBar_Shopping";
import NavFooter from "./NavFooter";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCookieValue } from "../utils/Cookies";
function Order() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  // this get review should use jwt to get view of user

  useEffect(() => {
    let ignore = false;
    fetch(`http://localhost:3000/users/${id}/reviews`, {
      mode: "cors",
      headers: { authorization: getCookieValue("Authorization") },
    })
      .then((response) => response.json())
      .then((response) => {
        if (!ignore) {
          const { userReviews } = response;
          const data = userReviews.map((element) => {
            return element;
          });
          setData(data);
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
      <Box component={Container} flex={"auto"} display={"flex"}>
        {data == null ? (
          <>
            <div style={{ display: "flex", width: "100%" }}>
              <Skeleton
                variant="rounded"
                width={"100%"}
                height={"100%"}
                animation={"pulse"}
              ></Skeleton>
            </div>
          </>
        ) : (
          <p>Fetched</p>
        )}
      </Box>
      <NavFooter></NavFooter>
    </>
  );
}
export default Order;
