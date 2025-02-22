import "../styles/ProductContainer.css";
import DescriptionPanel from "./DescriptionPanel";
import ImagePreviewPanel from "./ImagePreviewPanel";
import OrderPanel from "./OrderPanel";
function ProductContainer(props) {
  return (
    <div className="ProductContainer">
      <ImagePreviewPanel data={props.data.productImages}></ImagePreviewPanel>
      <DescriptionPanel data={props.data}></DescriptionPanel>
      <OrderPanel></OrderPanel>
    </div>
  );
}
export default ProductContainer;
