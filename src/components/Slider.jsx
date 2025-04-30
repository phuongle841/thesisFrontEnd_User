import "../styles/Slider.css";
import SliderCell from "./SliderCell";

function Slider(pros) {
  return (
    <div className="Slider">
      {pros.data.map((item) => {
        return (
          <SliderCell
            key={item.categoryTitle}
            link={item.categoryImage}
          ></SliderCell>
        );
      })}
    </div>
  );
}
export default Slider;
