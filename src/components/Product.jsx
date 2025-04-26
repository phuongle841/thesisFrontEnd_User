// Display product information and add to Cart
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/Product.css";

import NavBar from "./NavBar";
import NavBarShopping from "./NavBar_Shopping";
import NavFooter from "./NavFooter";
import ProductContainer from "./ProductContainer";
import productService from "../services/productService";
function Product() {
  const { id } = useParams();
  const [data, SetData] = useState(null);

  useEffect(() => {
    const fetch = productService.fetchProduct;
    fetch(id, SetData);
  }, []);

  return (
    <>
      <NavBar></NavBar>
      <NavBarShopping></NavBarShopping>
      {data ? (
        <ProductContainer data={data}></ProductContainer>
      ) : (
        <p>Fetching</p>
      )}
      <NavFooter></NavFooter>
    </>
  );
}
export default Product;
