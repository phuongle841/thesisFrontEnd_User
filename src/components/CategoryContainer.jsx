import "../styles/CategoryContainer.css";

function CategoryContainer(props) {
  return (
    <div className="CategoryContainer">
      {props.data.map((data) => {
        return (
          <div key={data.productId}>
            <p>{data.productId}</p>
          </div>
        );
      })}
    </div>
  );
}
export default CategoryContainer;
