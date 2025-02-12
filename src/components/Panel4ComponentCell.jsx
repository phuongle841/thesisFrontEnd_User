import "../styles/Panel4ComponentCell.css";
import { Link } from "react-router-dom";
function Panel4ComponentCell(props) {
  return (
    <div className="Panel4ComponentCell">
      <Link to={"category/" + props.data.id}>
        <img src={props.data.img} alt="" />
      </Link>
      <h4>{props.data.title}</h4>
    </div>
  );
}
export default Panel4ComponentCell;
