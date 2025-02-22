import "../styles/ProductImageCell.css";
function ProductImageCell(props) {
  return (
    <div className="ProductImageCell">
      <img
        src={props.url}
        alt=""
        onClick={() => props.onChangeButton(props.url)}
      />
    </div>
  );
}
export default ProductImageCell;
