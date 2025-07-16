import { Box, Button, Card, Pagination, Typography } from "@mui/material";
import { useRef, useState } from "react";
import useDidUpdateEffect from "../hooks/useDidUpdateEffect";
import orderService from "../services/orderService";
import { Link as RouterLink } from "react-router-dom";
import moment from "moment";

export default function OrderList({
  orders,
  authorization,
  totalPages,
  currentPage,
  onPageChange,
}) {
  return (
    <Box padding={2}>
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
    </Box>
  );
}

function OrderCard({ data, authorization }) {
  const [quantity, setQuantity] = useState(data.quantity);
  const [feedback, setFeedback] = useState("");
  const feedbackRef = useRef(null);

  const { orderDate, orderStatus, ProductId, Product } = data;
  const { productName, productPrice, productImages } = Product;

  useDidUpdateEffect(() => {
    if (!feedback) return;
    const feedbackMsg = document.createElement("p");
    feedbackMsg.textContent = feedback;
    feedbackRef.current.appendChild(feedbackMsg);
    setTimeout(() => feedbackMsg.remove(), 3000);
  }, [feedback]);

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

      <Box
        display="flex"
        gap={2}
        p={2}
        border="1px solid #000"
        borderRadius={"10px"}
      >
        <Box>
          <img
            src={productImages[0]}
            alt={productName}
            width="100px"
            height="100px"
          />
        </Box>

        {/* Quantity */}
        <Box display="flex" flexDirection="column">
          {orderStatus === "PREPARED" ? (
            <>
              <h3>Quantity: {quantity}</h3>
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
          <Box>
            <Typography>Price{productPrice}</Typography>
          </Box>
          <Box>
            <Typography>Status: {orderStatus}</Typography>
          </Box>
          <Typography variant="body2">
            Last updated: {moment(orderDate).format("LLLL")}
          </Typography>
        </Box>
      </Box>

      <Button>Paid</Button>
    </Card>
  );
}
