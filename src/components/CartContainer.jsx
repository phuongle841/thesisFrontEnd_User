import "../styles/CartContainer.css";
import PropTypes from "prop-types";
import { Box, Button, Divider, Snackbar } from "@mui/material";
import { useContext, useDeferredValue, useEffect, useState } from "react";
import { CartContext } from "../context/cartContext";
import { delay } from "../utils/Delay";
function CartBox({ item, i }) {
  const [amount, setAmount] = useState(item.amount ? item.amount : 1);

  var timeout;
  const [open, setOpen] = useState(false);

  const { productId } = item;
  const { removeCartItem } = useContext(CartContext);

  return (
    <>
      <div className="CartBox">
        <div className="CartBox-left">
          <h1>{i}</h1>
          <h3>{item.productName}</h3>
          <p>Amount: {amount}</p>
        </div>
        <div className="CartBox-right">
          <Button
            onClick={async () => {
              setOpen(true);
              clearTimeout(timeout);
              await delay(2000);
              removeCartItem(productId);
              timeout = setTimeout(function () {
                setOpen(false);
              }, 2000);
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
  const [orderState, setOrderState] = useState(false);
  const { cart } = useContext(CartContext);

  useEffect(() => {
    console.log(cart);
  }, [orderState]);

  function handleOrder() {
    setOrderState(true);
  }
  return (
    <>
      <Box className="cartContainer">
        {data.map((item, i) => {
          return <CartBox key={item.productId} i={i} item={item}></CartBox>;
        })}
        <Box onClick={handleOrder}>
          <Button>Order</Button>
        </Box>
      </Box>
    </>
  );
}

CartContainer.PropTypes = { data: PropTypes.arrayOf(PropTypes.object) };

export default CartContainer;
