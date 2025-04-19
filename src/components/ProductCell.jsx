import { Link as RouterLink } from "react-router";
import {
  Button,
  Card,
  Link,
  CardContent,
  CardMedia,
  CardActions,
} from "@mui/material";
import Rating from "@mui/material/Rating";

import Badge from "./Badge";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
function ProductCell(props) {
  const { addCartItems } = useContext(CartContext);
  const link = `/product/${props.data.productId}`;
  const { productId } = props.data;
  return (
    <Card sx={{ height: "auto", padding: 1 }}>
      {props.data.badge ? <Badge category={props.data.badge}></Badge> : <></>}
      <CardMedia
        component={RouterLink}
        to={link}
        image={props.data.productImg}
        sx={{ height: 300 }}
      ></CardMedia>
      <CardContent>
        <Link
          className="p-4-lines-limit"
          component={RouterLink}
          to={"/product/" + props.data.productId}
          underline="none"
          color="error"
        >
          {props.data.productTitle}
        </Link>
        <br />
        <Rating
          defaultValue={props.data.productRating}
          sx={{ width: "1", maxWidth: "max-content" }}
        />
        <p>{props.data.productPrice} vnd</p>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          onClick={() => {
            addCartItems(productId);
          }}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}
export default ProductCell;
