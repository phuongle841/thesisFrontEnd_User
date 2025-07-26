import "../styles/DescriptionPanel.css";
import { Rating, Typography } from "@mui/material";
import AmountSelectBox from "./AmountSelectBox";
import { Link as RouterLink } from "react-router-dom";
function DescriptionPanel({ data }) {
  const {
    productName,
    productRating,
    productPrice,
    productOrderAmount,
    productDescription,
    productDetails,
    Category,
  } = data;

  return (
    <div className="DescriptionPanel">
      <h2 className="ProductTitle">{productName}</h2>
      <Rating
        defaultValue={productRating}
        sx={{ width: "1", maxWidth: "max-content" }}
      ></Rating>
      <p>{productPrice}$</p>
      <div>
        <p>Number of item:</p>
        <div className="AmountSelect">
          {Array.isArray(productOrderAmount) &&
            productOrderAmount.map(({ Amount, data }) => {
              return (
                <AmountSelectBox
                  Amount={Amount}
                  data={data}
                  key={Amount}
                ></AmountSelectBox>
              );
            })}
        </div>
      </div>
      <hr />
      <p>About this item</p>
      <ul className="Description">{productDescription}</ul>
      <p>Details</p>
      <ul className="Details">{productDetails}</ul>
      <p>Category</p>
      <ul className="Category">
        {Category.map((e) => {
          const link = `/category/${e.categoryId}`;

          return (
            <p key={e.categoryId}>
              <Typography component={RouterLink} to={link}>
                {e.categoryTitle}
              </Typography>
            </p>
          );
        })}
      </ul>
    </div>
  );
}
export default DescriptionPanel;
