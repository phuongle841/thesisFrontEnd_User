import { Card, CardHeader, CardMedia, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function Panel({ item }) {
  const { productId, productImages, productName } = item;

  const img = productImages[0];
  const title = productName;
  const link = "/category/" + productId;

  return (
    <Card sx={{ padding: 2, height: "min-content" }}>
      <Typography component={RouterLink} to={link} padding={1}>
        {title}
      </Typography>
      <CardMedia
        padding={2}
        component={RouterLink}
        to={link}
        image={img}
        sx={{ height: "200px" }}
      ></CardMedia>
      <Typography component={RouterLink} to={link}>
        <p>see more</p>
      </Typography>
    </Card>
  );
}
export default Panel;
