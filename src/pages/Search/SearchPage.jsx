import { Box, Container, Skeleton } from "@mui/material";
import CategoriesProductPanel from "../../components/CategoriesProductPanel";
import NavBar from "../../components/NavBar";
import NavBarShopping from "../../components/NavBar_Shopping";
import ResultDisplayBar from "../../components/ResultDisplayBar";
import NavFooter from "../../components/NavFooter";
import { useEffect, useState } from "react";
import searchService from "../../services/searchService";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import ProductCell from "../../components/ProductCell";
import FilterMenu from "../../components/FilterMenu";

import "../../styles/SearchPage.css";

function SearchPage() {
  const [data, setData] = useState();

  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    const fetchCategory = searchService.fetch;
    fetchCategory(query, setData);
  }, [query]);
  return (
    <>
      <NavBar></NavBar>
      <NavBarShopping></NavBarShopping>
      <ResultDisplayBar></ResultDisplayBar>
      {data ? (
        <>
          <Box component={Container} id="SearchPageContainer">
            <FilterMenu></FilterMenu>
            <div className="CategoryContainer">
              {data.map((data) => {
                return (
                  <ProductCell key={data.productId} data={data}></ProductCell>
                );
              })}
            </div>
          </Box>
        </>
      ) : (
        <Skeleton></Skeleton>
      )}
      <NavFooter></NavFooter>
    </>
  );
}
export default SearchPage;
