import "../styles/Slider.css";
import SliderCell from "./SliderCell";

function Slider(pros) {
  return (
    <div className="Slider">
      {pros.data.map((item) => {
        return (
          <SliderCell
            key={item.productName}
            link={item.productImages[0]}
          ></SliderCell>
        );
      })}
    </div>
  );
}
export default Slider;
