import "../styles/CategoryContainer.css";
import ProductCell from "./ProductCell";

function CategoryContainer(props) {
  return (
    <>
      <div className="CategoryContainer">
        {props.data.map((data) => {
          return <ProductCell key={data.productId} data={data}></ProductCell>;
        })}
      </div>
    </>
  );
}
export default CategoryContainer;
