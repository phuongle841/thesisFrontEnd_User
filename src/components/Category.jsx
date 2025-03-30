import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import NavBarShopping from "./NavBar_Shopping";
import NavFooter from "./NavFooter";
import CategoriesProductPanel from "./CategoriesProductPanel";
import { useState, useEffect } from "react";
import ResultDisplayBar from "./ResultDisplayBar";
import { Skeleton } from "@mui/material";

// Display list of products
function Category() {
  const { id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    let ignore = false;
    fetch("http://localhost:3000/products", { mode: "cors" })
      .then((response) => response.json())
      .then((response) => {
        response = response.map((value) => {
          value["productImages"] != null
            ? (value["productImg"] = value["productImages"][0])
            : (value["productImg"] =
                "https://avatars.githubusercontent.com/u/6677444");
          // delete value["productImages"];
          value["productTitle"] = value["productName"];
          if (!ignore) {
            setData(response);
          }
        });
      })
      .catch((error) => console.error(error));

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <>
      <NavBar></NavBar>
      <NavBarShopping></NavBarShopping>
      <ResultDisplayBar></ResultDisplayBar>
      {data ? (
        <CategoriesProductPanel data={data}></CategoriesProductPanel>
      ) : (
        <Skeleton></Skeleton>
      )}
      <NavFooter></NavFooter>
    </>
  );
}
export default Category;
