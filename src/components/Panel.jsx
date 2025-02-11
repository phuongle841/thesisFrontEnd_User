import "../styles/Panel.css";
function Panel(pros) {
  return (
    <div className="Panel">
      <h4>{pros.title}</h4>
      <img src={pros.img} alt="" />
      <p>see more</p>
    </div>
  );
}
export default Panel;
