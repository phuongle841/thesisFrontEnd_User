import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Typography,
} from "@mui/material";

import NavBar from "./NavBar";
import NavBarShopping from "./NavBar_Shopping";
import NavFooter from "./NavFooter";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState, useContext, useId, useRef } from "react";
import { Link as RouterLink, useParams } from "react-router-dom";
import orderService from "../services/orderService";
import { UserContext } from "../context/userContext";
import AuthorizationContext from "../context/authorizationContext";
import moment from "moment";
import useDidUpdateEffect from "../hooks/useDidUpdateEffect";

function OrderBar({ data, authorization }) {
  const now = moment(data.orderDate);
  const date = now.format("dddd, MMMM Do YYYY, h:mm:ss a");

  const { ProductId, orderId } = data;
  const [quantity, setQuantity] = useState(data.quantity);
  const [feedback, setFeedback] = useState("");
  const { productName, productPrice, productImages } = data.Product;
  const { orderStatus } = data;
  const feedbackElement = useRef(null);

  function handleQuantityOnChange(event) {
    setQuantity(event.target.value);
  }

  function onSave() {
    data.quantity = quantity;
    updateOrder(data);
  }

  function onDiscard() {
    setQuantity(data.quantity);
  }

  function updateOrder(order) {
    const update = orderService.update;
    update(authorization, order, setFeedback);
  }

  useDidUpdateEffect(() => {
    removeElement();
  }, [feedback]);

  function removeElement() {
    const newDiv = document.createElement("p");
    const newContent = document.createTextNode(feedback);
    newDiv.appendChild(newContent);
    feedbackElement.current.appendChild(newDiv);
    setTimeout(function () {
      newDiv.remove();
    }, 3000);
  }

  return (
    <div>
      <Card sx={{ padding: 2 }}>
        <Typography component={RouterLink} to={`/product/${ProductId}`}>
          {productName}
        </Typography>
        <Box display={"flex"} padding={2} border={"1px solid #000"}>
          <Box
            className="quantity-box"
            display={"flex"}
            flexDirection={"column"}
          >
            <p>Quantity</p>
            {orderStatus == "PREPARED" ? (
              <>
                <input
                  type="number"
                  name="quantifyInput"
                  id={`quantity-${orderId}`}
                  value={quantity}
                  onChange={handleQuantityOnChange}
                />
                {quantity != data.quantity && (
                  <>
                    <button onClick={onSave}>Save</button>
                    <button onClick={onDiscard}>Discard</button>
                  </>
                )}
              </>
            ) : (
              <p>{quantity}</p>
            )}
          </Box>

          <div className="price-box">
            <p>Price</p>
            <p>{productPrice}</p>
          </div>
          <div className="display-image">
            <Box>
              <img
                src={productImages[0]}
                alt=""
                width={"100px"}
                height={"100px"}
              />
            </Box>
          </div>
          <p>{orderStatus}</p>
          <div ref={feedbackElement}></div>
        </Box>
        <p>Last update:{date}</p>
        <Button>Remove</Button>
        <Button>Paid</Button>
      </Card>
    </div>
  );
}

function Order() {
  const { userId } = useContext(UserContext);
  const { authorization } = useContext(AuthorizationContext);
  const { page } = useParams();
  const tabs = [
    { name: "order" },
    { name: "buy again" },
    { name: "cancelled orders" },
  ];
  const [orders, setOrders] = useState([]);
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  const [currentPage, setCurrentPage] = useState(page ? page : 0);
  const PAGE_SELECT = 10;

  useEffect(() => {
    if (userId == null) {
      return;
    }
    const fetch = orderService.fetch;
    fetch(
      userId,
      authorization,
      setOrders,
      currentPage * PAGE_SELECT,
      PAGE_SELECT
    );
  }, [userId]);

  return (
    <>
      <NavBar></NavBar>
      <NavBarShopping></NavBarShopping>
      <Box
        component={Container}
        flex={"auto"}
        display={"flex"}
        flexDirection={"column"}
        gap={2}
      >
        <Box>
          {orders == [] ? (
            <div style={{ width: "100%" }}>
              <h2>
                <SearchIcon></SearchIcon>There no item in here?
              </h2>
              <Divider></Divider>
              <h2>Want to wonder around to find something interesting</h2>
              <Typography component={RouterLink} to={"/"}>
                Today&#39;s deal
              </Typography>
            </div>
          ) : (
            orders.map((e) => (
              <OrderBar
                key={e.orderId}
                data={e}
                authorization={authorization}
              ></OrderBar>
            ))
          )}
        </Box>
      </Box>
      <NavFooter></NavFooter>
    </>
  );
}
export default Order;
