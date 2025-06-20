import "../styles/CategoryContainer.css";
import ProductCell from "./ProductCell";

function CategoryContainer({ data }) {
  const { product } = data;

  return (
    <>
      <div className="CategoryContainer">
        {product.map((data) => {
          return <ProductCell key={data.productId} data={data}></ProductCell>;
        })}
      </div>
    </>
  );
}
export default CategoryContainer;
