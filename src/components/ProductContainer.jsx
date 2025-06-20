import "../styles/ProductContainer.css";
import CommentSection from "./CommentSection";
import DescriptionPanel from "./DescriptionPanel";
import ImagePreviewPanel from "./ImagePreviewPanel";
import OrderPanel from "./OrderPanel";
function ProductContainer({ data }) {
  return (
    <>
      <div className="ProductContainer">
        <ImagePreviewPanel data={data.productImages}></ImagePreviewPanel>
        <DescriptionPanel data={data}></DescriptionPanel>
        <OrderPanel data={data}></OrderPanel>
      </div>
      <div>
        <CommentSection data={data}></CommentSection>
      </div>
    </>
  );
}
export default ProductContainer;
