import "../styles/SliderCell.css";
function SliderCell(pros) {
  return (
    <div className="SliderCell">
      <img src={pros.link} alt="" />
    </div>
  );
}
export default SliderCell;
