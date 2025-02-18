import "../styles/ProductCell.css";
import Rating from "react-rating";
import Badge from "./Badge";
function ProductCell(props) {
  return (
    <div className="ProductCell">
      <Badge></Badge>
      <img src={props.data.productImg} alt="" />
      <p>{props.data.productTitle}</p>
      <Rating initialRating={props.data.productRating} readonly={true}></Rating>
    </div>
  );
}
export default ProductCell;
