import "../styles/PriceSpan.css";
function PriceSpan({ priceSign, priceWhole, priceFaction }) {
  return (
    <div className="price">
      <span className="price-sign">{priceSign}</span>
      <span className="price-whole">{priceWhole}</span>
      <span className="price-faction">{priceFaction}</span>
      <span> </span>
    </div>
  );
}
export default PriceSpan;
