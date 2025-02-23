import "../styles/DescriptionPanel.css";
import Rating from "react-rating";
import AmountSelectBox from "./AmountSelectBox";
function DescriptionPanel(props) {
  return (
    <div className="DescriptionPanel">
      <h2 className="ProductTitle">{props.data.productName}</h2>
      <Rating initialRating={props.data.productRating}></Rating>
      <p>{props.data.productPrice}$</p>
      <p>number of item</p>
      <AmountSelectBox></AmountSelectBox>
      <p>about this item</p>
      <hr />
      <ul>
        <li>
          Sticky & Safe to Use: Our double sided tape for crafts was made of
          high quality glue, it is sticky but not destructive and will help to
          save your scrapbook or photos for a long time
        </li>
        <li>
          Mess-free & Fast: Different from the ordinary double sided tape or
          liquid tape, Secopad glue tape won't cause any mess and you don't have
          to wait for the glue to dry. It takes only a few seconds to finish the
        </li>
        work
        <li>
          Tape Glue Runner: The compact design and quality material make sure
          that the glue come out smooth and evenly. 4 Pack two sided tape can be
          use for home, school and office. It is easy for adults and children to
          use
        </li>
        <li>
          Alternative to traditional adhesive tape: This tape roller is
          muti-purpose, you can easily use it for scrapbook,photos, crafts and
          other arts projects
        </li>
        <li>
          Tip: You can clean and re-tape the scrapbooking tape if you make a
          mistake in a short time
        </li>
        <li>
          stickiness of the tape, try to use in warm indoors Note: Low
          temperature may affect the
        </li>
      </ul>
    </div>
  );
}
export default DescriptionPanel;
