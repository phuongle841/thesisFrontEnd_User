import { useState } from "react";
import "../styles/ImagePreviewPanel.css";
import ImageZoom from "react-image-zooom";
import ProductImageCell from "./ProductImageCell";

function ImagePreviewPanel(props) {
  let [imgSrc, setImgSrc] = useState(props.data[0]);

  const onChangeButton = (url) => {
    setImgSrc(url);
  };

  return (
    <div className="ImagePreviewPanel">
      <div className="MainReview">
        <ImageZoom
          width="500px"
          height="500px"
          src={imgSrc}
          alt="A image to apply the ImageZoom plugin"
          zoom="170"
        />
      </div>
      <div className="ReviewSlider">
        {props.data.map((data) => {
          return (
            <ProductImageCell
              key={data}
              url={data}
              onChangeButton={onChangeButton}
            ></ProductImageCell>
          );
        })}
      </div>
    </div>
  );
}
export default ImagePreviewPanel;
