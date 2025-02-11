import { useState } from "react";
import "../styles/ProductPanel.css";
import Panel from "./Panel";
import Panel4Component from "./Panel4Component";
function ProductPanel() {
  const defaultData = [
    {
      link: "https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2023/img/Consumer_Electronics/XCM_CUTTLE_1555947_2997386_379x304_1X_en_US._SY304_CB594429819_.jpg",
      title: "New year, new supplies",
    },
    {
      link: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/ValentinesDay/Fuji_Valentines_Day_Dashboard_card_1x_EN._SY304_CB551651099_.jpg",
      title: "Shop Valentine's Day gifts",
    },
    {
      link: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/Stores-Gaming/FinalGraphics/Fuji_Gaming_store_Dashboard_card_1x_EN._SY304_CB564799420_.jpg",
      title: "Get your game on",
    },
    {
      link: "https://m.media-amazon.com/images/I/61x6KTFR8yL._AC_SY200_.jpg",
      title: "Top categories in Kitchen",
    },
  ];
  let [data] = useState(defaultData);
  return (
    <div className="ProductPanel">
      <div className="MainAdvertisement">
        <img
          src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg"
          alt=""
        />
      </div>
      <div className="Panels">
        {data.map((item) => {
          return (
            <Panel link={item.link} title={item.title} key={item.link}></Panel>
          );
        })}

        <Panel4Component data={data}></Panel4Component>
      </div>
      <div className="Slides">
        <p>Wanna see more?</p>
        <div className="Slider">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
export default ProductPanel;
