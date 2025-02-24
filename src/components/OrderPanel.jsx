import "../styles/OrderPanel.css";
import PriceSpan from "./PriceSpan";
function OrderPanel(props) {
  const deliveryDate = new Date(1 / 1 / 2025);
  return (
    <div id="OrderPanel">
      <PriceSpan priceSign={"$"} priceWhole={6} priceFaction={99}></PriceSpan>
      <div className="ship-information">
        <div id="ship-location">
          <p> $4.11 ship and import change to VietNam</p>
        </div>
        <div id="delivery-date">
          Delivery Tuesday, {deliveryDate.toString()}.Order within 16 hrs 12
          mins
        </div>
      </div>
      <div>
        <div id="stock label in-stock">
          <p>In Stock</p>
        </div>
        <div id="quantity-select">
          <p>Quantity 1</p>
          <select name="quantity" id="quantity-select">
            <option value="1">Quantity 1</option>
            <option value="2">Quantity 2</option>
            <option value="3">Quantity 3</option>
          </select>
        </div>
        <div id="order-buttons">
          <button id="add-to-cart">Add to cart</button>
          <button id="buy-now">Buy now</button>
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
