import { useEffect, useState } from "react";
import "../styles/ProductPanel.css";
import Panel from "./Panel";
import Panel4Component from "./Panel4Component";
import Slides from "./Slides";
import { Skeleton } from "@mui/material";
function ProductPanel() {
  const [mainData, setMainData] = useState(null);
  const url = "http://localhost:3000/categories";

  const fetchCategories = async () => {
    await fetch(url, { mode: "cors" })
      .then((response) => response.json())
      .then((response) => {
        if (!ignore) {
          const data = response.map((element) => {
            const { categoryImage, categoryTitle, categoryId } = element;

            return {
              productImages: [categoryImage],
              productName: categoryTitle,
              productId: categoryId,
            };
          });
          setMainData(data);
        }
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    let ignore = false;
    fetch(url, { mode: "cors" })
      .then((response) => response.json())
      .then((response) => {
        if (!ignore) {
          const data = response.map((element) => {
            const { categoryImage, categoryTitle, categoryId } = element;

            return {
              productImages: [categoryImage],
              productName: categoryTitle,
              productId: categoryId,
            };
          });
          setMainData(data);
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
      {mainData != null ? (
        <Slides
          title={"Related to items you've viewed"}
          data={mainData}
        ></Slides>
      ) : (
        // not displayed properly
        <div style={{ display: "flex", width: "100%" }}>
          <Skeleton
            variant="rounded"
            width={"100%"}
            height={"100%"}
            animation={"pulse"}
          ></Skeleton>
        </div>
      )}
    </div>
  );
}
export default ProductPanel;
