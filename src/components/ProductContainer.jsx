import "../styles/ProductContainer.css";
import DescriptionPanel from "./DescriptionPanel";
import ImagePreviewPanel from "./ImagePreviewPanel";
import OrderPanel from "./OrderPanel";
function ProductContainer({ data }) {
  return (
    <div className="ProductContainer">
      <ImagePreviewPanel data={data.productImages}></ImagePreviewPanel>
      <DescriptionPanel data={data}></DescriptionPanel>
      <OrderPanel></OrderPanel>
    </div>
  );
}
export default ProductContainer;
