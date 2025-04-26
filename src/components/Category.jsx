import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import NavBarShopping from "./NavBar_Shopping";
import NavFooter from "./NavFooter";
import CategoriesProductPanel from "./CategoriesProductPanel";
import { useState, useEffect } from "react";
import ResultDisplayBar from "./ResultDisplayBar";
import { Skeleton } from "@mui/material";
import CategoryService from "../services/CategoryService";

// Display list of products
function Category() {
  const { id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    const fetchCategory = CategoryService.fetch;
    fetchCategory(id, setData);
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
