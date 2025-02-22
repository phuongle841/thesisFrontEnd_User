import "../styles/ProductCell.css";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import Badge from "./Badge";
function ProductCell(props) {
  return (
    <div className="ProductCell">
      {props.data.badge ? <Badge category={props.data.badge}></Badge> : <></>}
      <img src={props.data.productImg} alt="" />
      <Link to={"/product/" + props.data.productId}>
        <p>{props.data.productTitle}</p>
      </Link>
      <Rating initialRating={props.data.productRating} readonly={true}></Rating>
      <p>{props.data.productPrice} vnd</p>
      <button>Add to Cart</button>
    </div>
  );
}
export default ProductCell;
