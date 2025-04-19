import { useContext } from "react";
import "../styles/OrderPanel.css";
import PriceSpan from "./PriceSpan";
import moment from "moment";
import { CartContext } from "../context/cartContext";
import { useParams } from "react-router-dom";
function OrderPanel() {
  const { cart, addCartItems } = useContext(CartContext);
  const { id } = useParams();

  const deliveryDate = moment([14, 6, 2025], ["DD-MM-YYYY"]).format(
    "MMMM DD YYYY"
  );
  const endOfDay = moment().endOf("date").fromNow();

  return (
    <div id="OrderPanel">
      <PriceSpan priceSign={"$"} priceWhole={6} priceFaction={99}></PriceSpan>
      <div className="ship-information">
        <div id="ship-location">
          <p> $4.11 ship and import change to VietNam</p>
        </div>
        <div id="delivery-date">
          Delivery Tuesday, {deliveryDate}
          .Order within {endOfDay}
        </div>
      </div>
      <div className="order-information">
        <div id="stock label in-stock">
          <p>In Stock</p>
        </div>
        <div id="quantity-select"></div>
        <div id="order-buttons">
          <button
            id="add-to-cart"
            onClick={() => {
              addCartItems(id);
            }}
          >
            Add to cart
          </button>
          <form action="" method="post">
            <select name="quantity" id="quantity-select">
              <option value="1">Quantity 1</option>
              <option value="2">Quantity 2</option>
              <option value="3">Quantity 3</option>
            </select>
            <br />
            <button type="submit">Buy now</button>
          </form>
        </div>
      </div>
      <div id="product-origin-information">
        <p>Ship from:</p>
        <p>Sold by:</p>
        <p>Return offer</p>
        <p>Payment</p>
      </div>
      <div id="add-to-wishlist">
        <button>Add to wishlist</button>
      </div>
    </div>
  );
}
export default OrderPanel;
