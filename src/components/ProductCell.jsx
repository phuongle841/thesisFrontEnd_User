import { Link as RouterLink } from "react-router";
import {
  Box,
  Button,
  Card,
  Link,
  CardContent,
  CardMedia,
  CardActions,
} from "@mui/material";
import Rating from "@mui/material/Rating";

import Badge from "./Badge";
function ProductCell(props) {
  return (
    <Card sx={{ height: "auto" }}>
      {props.data.badge ? <Badge category={props.data.badge}></Badge> : <></>}
      <CardMedia
        component="img"
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
        <Rating defaultValue={2} sx={{ width: "1", maxWidth: "max-content" }} />
        <p>{props.data.productPrice} vnd</p>
      </CardContent>
      <CardActions>
        <Button variant="contained">Add to Cart</Button>
      </CardActions>
    </Card>
  );
}
export default ProductCell;
