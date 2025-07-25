import "../styles/CartContainer.css";
import { Box, Button, Divider, Snackbar } from "@mui/material";
import { useContext, useState } from "react";
import { CartContext } from "../context/cartContext";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";
import { Typography } from "@mui/material";

function CartBox({ item, i }) {
  const [quantity, setQuantity] = useState(item.quantity ? item.quantity : 1);
  const { updateCartItem, removeCartItem } = useContext(CartContext);
  const [open, setOpen] = useState(false);
  const link = `/product/${item.recordProduct.productId}`;

  function handleQuantityOnChange(event) {
    setQuantity(event.target.value);
  }
  function onSave() {
    // not sure to update to server here or update to server in main.jsx
    item.quantity = quantity;
    updateCartItem(item);
  }
  function onDiscard() {
    setQuantity(item.quantity);
  }

  return (
    <>
      <div className="CartBox">
        <div className="CartBox-left" style={{ flex: "auto" }}>
          <Typography component={RouterLink} to={link}>
            <h3>
              No.{i + 1} {item.recordProduct.productName}{" "}
            </h3>
          </Typography>
          <h3>
            Product Id: {item.recordProduct.productId}- Price:{" "}
            {item.recordProduct.productPrice}
          </h3>
          <input
            type="number"
            name="quantity"
            className="quantity"
            min={0}
            value={quantity}
            onChange={handleQuantityOnChange}
          />
          {quantity != item.quantity && (
            <>
              <button onClick={onSave}>Save</button>
              <button onClick={onDiscard}>Discard</button>
            </>
          )}
        </div>
        <Box className="CartBox-mid">
          <Box sx={{}}>
            <img
              src={item.recordProduct.productImages[0]}
              alt=""
              width={"100px"}
              height={"100px"}
            />
          </Box>
        </Box>
        <div className="CartBox-right">
          <Button
            onClick={() => {
              removeCartItem(item.recordProduct);
            }}
          >
            remove
          </Button>
          <Snackbar
            open={open}
            onClose={() => setOpen(false)}
            message="Test snackbar"
          />
        </div>
      </div>
      <Divider></Divider>
    </>
  );
}

function CartContainer({ data }) {
  return (
    <>
      <Box className="cartContainer">
        {data.map((item, i) => {
          return (
            <CartBox
              key={item.recordProduct.productId}
              i={i}
              item={item}
            ></CartBox>
          );
        })}
      </Box>
    </>
  );
}

export default CartContainer;
