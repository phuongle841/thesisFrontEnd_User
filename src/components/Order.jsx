import { Box, Container } from "@mui/material";
import { useEffect, useState, useContext } from "react";

import NavBar from "./NavBar";
import NavBarShopping from "./NavBar_Shopping";
import NavFooter from "./NavFooter";
import orderService from "../services/orderService";
import { UserContext } from "../context/userContext";
import AuthorizationContext from "../context/authorizationContext";
import EmptyOrderPlaceholder from "./EmptyOrderPlaceholder";
import OrderList from "./OrderList";

// Constants
const PAGE_SIZE = 10;

export default function Order() {
  const { userId } = useContext(UserContext);
  const { authorization } = useContext(AuthorizationContext);

  const [orders, setOrders] = useState([]);

  const [totalPages, setTotalPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch orders
  useEffect(() => {
    if (!userId) return;

    orderService.fetch(
      userId,
      authorization,
      (data) => {
        setOrders(data.orders);
        setTotalPages(Math.floor(data.count.Order / PAGE_SIZE));
      },
      (currentPage - 1) * PAGE_SIZE,
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
        gap={"20px"}
        backgroundColor="#F0E4D3"
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
