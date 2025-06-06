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
function ProductCell({ data }) {
  console.log(data);

  const { addCartItems } = useContext(CartContext);

  const link = `/product/${data.productId}`;
  return (
    <Card sx={{ height: "auto", padding: 1 }}>
      {data.badge ? <Badge category={data.badge}></Badge> : <></>}
      <CardMedia
        component={RouterLink}
        to={link}
        image={data.productImages[0]}
        sx={{ height: 300 }}
      ></CardMedia>
      <CardContent>
        <Link
          className="p-4-lines-limit"
          component={RouterLink}
          to={"/product/" + data.productId}
          underline="none"
          color="error"
        >
          {data.productName}
        </Link>
        <br />
        <Rating
          defaultValue={data.productRating}
          sx={{ width: "1", maxWidth: "max-content" }}
        />
        <p>{data.productPrice} vnd</p>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          onClick={() => {
            addCartItems({ quantity: 1, recordProduct: data });
          }}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}
export default ProductCell;
