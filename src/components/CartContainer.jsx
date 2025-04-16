import "../styles/CartContainer.css";
function CartContainer({ data }) {
  return (
    <>
      {data.map((item) => (
        <p key={item.productId}>{item.productName}</p>
      ))}
    </>
  );
}
export default CartContainer;
