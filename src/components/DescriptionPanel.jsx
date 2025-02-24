import "../styles/DescriptionPanel.css";
import Rating from "react-rating";
import AmountSelectBox from "./AmountSelectBox";
import { useState } from "react";
function DescriptionPanel({ data }) {
  const [currentOrderedItem, setCurrentOrderedItem] = useState(null);
  const {
    productName,
    productRating,
    productPrice,
    productOrderAmount,
    productDescription,
  } = data;
  return (
    <div className="DescriptionPanel">
      <h2 className="ProductTitle">{productName}</h2>
      <Rating initialRating={productRating}></Rating>
      <p>{productPrice}$</p>
      <div>
        <p>Number of item:</p>
        <div className="AmountSelect">
          {productOrderAmount.map(({ Amount, data }) => {
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
      <ul className="Description">
        {productDescription.map((description) => (
          <li key={description}>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default DescriptionPanel;
