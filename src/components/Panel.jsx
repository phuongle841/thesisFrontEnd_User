import { Card, CardMedia, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function Panel({ item }) {
  const { categoryId, categoryImage, categoryTitle } = item;

  const img = categoryImage;
  const title = categoryTitle;
  const link = "/category/" + categoryId;

  return (
    <Card
      sx={{
        padding: 2,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
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
