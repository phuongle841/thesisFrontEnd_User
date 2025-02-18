import "../styles/Panel.css";
import { Link } from "react-router-dom";
function Panel(props) {
  return (
    <div className="Panel">
      <h4>{props.data.title}</h4>
      <Link to={"/category/" + props.data.id}>
        <img src={props.data.img} alt="" />
      </Link>
      <p>see more</p>
    </div>
  );
}
export default Panel;
