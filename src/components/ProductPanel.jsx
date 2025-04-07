import { useEffect, useState } from "react";
import "../styles/ProductPanel.css";
import Panel from "./Panel";
import Panel4Component from "./Panel4Component";
import Slides from "./Slides";
import { Skeleton } from "@mui/material";
function ProductPanel() {
  const defaultData2 = [
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
    {
      link: "https://m.media-amazon.com/images/I/71MIsd4U7DL._AC_SY200_.jpg",
      title: "Top categories in Kitchen",
    },
    {
      link: "https://m.media-amazon.com/images/I/81B5j3PZv3L._AC_SY200_.jpg",
      title: "Top categories in Kitchen",
    },
  ];

  const [mainData, setMainData] = useState(null);
  const url = "http://localhost:3000/products";
  useEffect(() => {
    let ignore = false;
    fetch(url, { mode: "cors" })
      .then((response) => response.json())
      .then((response) => {
        if (!ignore) {
          setMainData([
            {
              productImages: [
                "https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2023/img/Consumer_Electronics/XCM_CUTTLE_1555947_2997386_379x304_1X_en_US._SY304_CB594429819_.jpg",
              ],
              productName: "New year, new supplies",
              productId: 1,
            },
            {
              productImages: [
                "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/ValentinesDay/Fuji_Valentines_Day_Dashboard_card_1x_EN._SY304_CB551651099_.jpg",
              ],
              productName: "Shop Valentine's Day gifts",
              productId: 2,
            },
            {
              productImages: [
                "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/Stores-Gaming/FinalGraphics/Fuji_Gaming_store_Dashboard_card_1x_EN._SY304_CB564799420_.jpg",
              ],
              productName: "Get your game on",
              productId: 3,
            },
            {
              productImages: [
                "https://m.media-amazon.com/images/I/61x6KTFR8yL._AC_SY200_.jpg",
              ],
              productName: "Top categories in Kitchen",
              productId: 4,
            },
          ]);
        }
      })
      .catch((error) => console.error(error));

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className="ProductPanel">
      <div className="MainAdvertisement">
        <img
          src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg"
          alt=""
        />
      </div>
      <div className="Panels">
        {mainData ? (
          mainData.map((item) => {
            return <Panel item={item} key={item.productId}></Panel>;
          })
        ) : (
          <Skeleton></Skeleton>
        )}

        {/* <Panel4Component data={data}></Panel4Component> */}
      </div>
      <Slides
        title={"Related to items you've viewed"}
        data={defaultData2}
      ></Slides>
    </div>
  );
}
export default ProductPanel;
