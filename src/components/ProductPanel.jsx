import { useEffect, useState } from "react";
import "../styles/ProductPanel.css";
import Panel from "./Panel";
import Slides from "./Slides";
import { Box, Skeleton } from "@mui/material";
import CategoryService from "../services/CategoryService";
function ProductPanel() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchCategories = CategoryService.fetchBatch;
    fetchCategories(setData);
  }, []);

  return (
    <Box className="ProductPanel">
      <div className="MainAdvertisement">
        <img
          src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg"
          alt=""
        />
      </div>
      <div className="Panels">
        {data ? (
          data.map((item) => {
            return <Panel item={item} key={item.categoryId}></Panel>;
          })
        ) : (
          <Skeleton></Skeleton>
        )}
      </div>
      {data != null ? (
        <Slides title={"Related to items you've viewed"} data={data}></Slides>
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
    </Box>
  );
}
export default ProductPanel;
