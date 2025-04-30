import {
  Box,
  Button,
  Container,
  Divider,
  Tooltip,
  Typography,
} from "@mui/material";
import NavBar from "./NavBar";
import NavBarShopping from "./NavBar_Shopping";
import NavFooter from "./NavFooter";
import { OrderContext } from "../context/orderContext";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState, useContext } from "react";
import { Link as RouterLink } from "react-router-dom";

function OrderBar({ data }) {
  const header = data.orderDate;
  return (
    <div>
      <p>{header}</p>
      {data.orderRecord.map((e) => {
        const key = header + e.recordProduct.productName;
        return <OrderItem key={key} data={e}></OrderItem>;
      })}
      <Button>Remove</Button>
      <Button>Paid</Button>
    </div>
  );
}

function OrderItem({ data }) {
  const { OrderId, ProductId, quantity, recordProduct } = data;

  const { productName } = recordProduct;
  return (
    <Box padding={1} display={"flex"}>
      <Tooltip
        title={productName}
        color="#f5f5f9"
        placement="top"
        enterDelay={200}
        leaveDelay={200}
      >
        <Typography
          component={"p"}
          width={"200px"}
          sx={{ whiteSpace: "nowrap", overflow: "hidden" }}
          textOverflow={"ellipsis"}
        >
          {productName}
        </Typography>{" "}
      </Tooltip>
      *{quantity}
    </Box>
  );
}

function Order() {
  const { orders } = useContext(OrderContext);
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
        {orders == [] ? (
          <div style={{ width: "100%" }}>
            <h2>
              <SearchIcon></SearchIcon>There no item in here?{" "}
            </h2>
            <Divider></Divider>
            <h2>Want to wonder around to find something interesting</h2>
            <Typography component={RouterLink} to={"/"}>
              Today&#39;s deal
            </Typography>
          </div>
        ) : (
          orders.map((e) => <OrderBar key={e.orderId} data={e}></OrderBar>)
        )}
      </Box>
      <NavFooter></NavFooter>
    </>
  );
}
export default Order;
