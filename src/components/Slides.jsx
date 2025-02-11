import "../styles/Slides.css";
import Slider from "./Slider";
function Slides(pros) {
  return (
    <div className="Slides">
      <p>{pros.title}</p>
      <Slider data={pros.data}></Slider>
    </div>
  );
}
export default Slides;
