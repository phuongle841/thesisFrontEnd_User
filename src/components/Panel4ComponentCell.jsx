import "../styles/Panel4ComponentCell.css";
function Panel4ComponentCell(pros) {
  return (
    <div className="Panel4ComponentCell">
      <img src={pros.link} alt="" />
      <h4>{pros.title}</h4>
    </div>
  );
}
export default Panel4ComponentCell;
