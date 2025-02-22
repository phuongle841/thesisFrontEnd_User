import { useState } from "react";
import "../styles/Badge.css";
function Badge(props) {
  const [hoverState, setHoverState] = useState(false);
  const over = () => {
    setHoverState(true);
  };
  const leave = () => {
    setHoverState(false);
  };
  return (
    <>
      <div className="Badge">
        <p onMouseEnter={over} onMouseLeave={leave}>
          Best Seller
        </p>
        <div> </div>
        {hoverState && <p>in {props.category}</p>}
      </div>
    </>
  );
}
export default Badge;
