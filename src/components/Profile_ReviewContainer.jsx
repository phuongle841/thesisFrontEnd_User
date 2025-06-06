import { Card, CardContent, Rating, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import "../styles/ProfileReviewContainer.css";
function Profile_ReviewContainer({ reviews }) {
  return (
    <div className="reviewContainer">
      {Array.isArray(reviews) ? (
        reviews.map((e, i) => {
          const link = `/product/${e.productId}`;
          return (
            <Card
              key={i}
              sx={{
                border: "1px solid #000",
              }}
              component={RouterLink}
              to={link}
            >
              <CardContent className="cardReview">
                <h3>{e.reviewTitle}</h3>
                <Typography sx={{ flex: "auto" }}>
                  {e.reviewDescription}
                </Typography>
                <Rating
                  defaultValue={e.reviewRating}
                  sx={{ width: "1", maxWidth: "max-content" }}
                ></Rating>
              </CardContent>
            </Card>
          );
        })
      ) : (
        <p>error when fetching</p>
      )}{" "}
    </div>
  );
}
export default Profile_ReviewContainer;
