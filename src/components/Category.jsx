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
    fetch(`http://localhost:3000/categories/${id}`, { mode: "cors" })
      .then((response) => response.json())
      .then((response) => {
        let { product } = response;
        product = product.map((value) => {
          value["productImg"] = value["productImages"][0];
          value["productTitle"] = value["productName"];
          return value;
        });
        if (!ignore) {
          setData(product);
        }
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
