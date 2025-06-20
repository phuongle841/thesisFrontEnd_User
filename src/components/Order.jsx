import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Pagination,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState, useContext, useRef } from "react";
import { Link as RouterLink, useSearchParams } from "react-router-dom";
import moment from "moment";

import NavBar from "./NavBar";
import NavBarShopping from "./NavBar_Shopping";
import NavFooter from "./NavFooter";
import orderService from "../services/orderService";
import { UserContext } from "../context/userContext";
import AuthorizationContext from "../context/authorizationContext";
import useDidUpdateEffect from "../hooks/useDidUpdateEffect";

// Constants
const PAGE_SIZE = 10;

export default function Order() {
  const { userId } = useContext(UserContext);
  const { authorization } = useContext(AuthorizationContext);

  const [orders, setOrders] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams] = useSearchParams();

  // Sync page from URL
  useEffect(() => {
    const pageFromURL = parseInt(searchParams.get("page"), 10);
    setCurrentPage(!isNaN(pageFromURL) && pageFromURL > 0 ? pageFromURL : 1);
  }, [searchParams]);

  // Fetch orders
  useEffect(() => {
    if (!userId) return;

    orderService.fetch(
      userId,
      authorization,
      (data) => {
        setOrders(data.orders);
        setTotalPages(Math.ceil(data.count / PAGE_SIZE));
      },
      currentPage * PAGE_SIZE,
      PAGE_SIZE
    );
  }, [userId, authorization, currentPage]);

  return (
    <>
      <NavBar />
      <NavBarShopping />
      <Box
        component={Container}
        flex="auto"
        display="flex"
        flexDirection="column"
        gap={2}
      >
        <Box>
          {orders.length === 0 ? (
            <EmptyOrderPlaceholder />
          ) : (
            <OrderList
              orders={orders}
              authorization={authorization}
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={(_, page) => setCurrentPage(page)}
            />
          )}
        </Box>
      </Box>
      <NavFooter />
    </>
  );
}

// 🧾 Empty state
function EmptyOrderPlaceholder() {
  return (
    <Box width="100%">
      <Typography variant="h6">
        <SearchIcon /> There are no items here.
      </Typography>
      <Divider />
      <Typography variant="h6">
        Want to wander around to find something interesting?
      </Typography>
      <Typography component={RouterLink} to="/">
        Today&#39;s Deals
      </Typography>
    </Box>
  );
}

// 📦 Order List
function OrderList({
  orders,
  authorization,
  totalPages,
  currentPage,
  onPageChange,
}) {
  return (
    <>
      {orders.map((order) => (
        <OrderCard
          key={order.orderId}
          data={order}
          authorization={authorization}
        />
      ))}
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={onPageChange}
      />
    </>
  );
}

// 🧾 Individual Order Card
function OrderCard({ data, authorization }) {
  const [quantity, setQuantity] = useState(data.quantity);
  const [feedback, setFeedback] = useState("");
  const feedbackRef = useRef(null);

  const { orderDate, orderStatus, orderId, ProductId, Product } = data;
  const { productName, productPrice, productImages } = Product;

  useDidUpdateEffect(() => {
    if (!feedback) return;
    const feedbackMsg = document.createElement("p");
    feedbackMsg.textContent = feedback;
    feedbackRef.current.appendChild(feedbackMsg);
    setTimeout(() => feedbackMsg.remove(), 3000);
  }, [feedback]);

  const handleQuantityChange = (e) => setQuantity(e.target.value);

  const saveQuantity = () => {
    const updatedOrder = { ...data, quantity };
    orderService.update(authorization, updatedOrder, setFeedback);
  };

  const discardChanges = () => setQuantity(data.quantity);

  return (
    <Card sx={{ padding: 2, marginBottom: 2 }}>
      <Typography
        component={RouterLink}
        to={`/product/${ProductId}`}
        variant="h6"
      >
        {productName}
      </Typography>

      <Box display="flex" gap={2} p={2} border="1px solid #000">
        {/* Quantity */}
        <Box display="flex" flexDirection="column">
          <Typography>Quantity</Typography>
          {orderStatus === "PREPARED" ? (
            <>
              <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
              />
              {quantity != data.quantity && (
                <>
                  <Button onClick={saveQuantity}>Save</Button>
                  <Button onClick={discardChanges}>Discard</Button>
                </>
              )}
            </>
          ) : (
            <Typography>{quantity}</Typography>
          )}
        </Box>

        {/* Price */}
        <Box>
          <Typography>Price</Typography>
          <Typography>{productPrice}</Typography>
        </Box>

        {/* Image */}
        <Box>
          <img
            src={productImages[0]}
            alt={productName}
            width="100px"
            height="100px"
          />
        </Box>

        {/* Status & Feedback */}
        <Box>
          <Typography>{orderStatus}</Typography>
          <div ref={feedbackRef} />
        </Box>
      </Box>

      <Typography variant="body2">
        Last updated: {moment(orderDate).format("LLLL")}
      </Typography>
      <Button>Remove</Button>
      <Button>Paid</Button>
    </Card>
  );
}
