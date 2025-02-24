import "../styles/AmountSelectBox.css";
function AmountSelectBox({ Amount, data }) {
  return (
    <div className="AmountSelectBox">
      <h2>{Amount}</h2>
      {data.map((content) => (
        <p key={content}> {content}</p>
      ))}
    </div>
  );
}
export default AmountSelectBox;
