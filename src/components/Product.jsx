// Display product information and add to Cart
import { useParams } from "react-router-dom";
import { useState } from "react";
import "../styles/Product.css";

import NavBar from "./NavBar";
import NavBarShopping from "./NavBar_Shopping";
import NavFooter from "./NavFooter";
import ProductContainer from "./ProductContainer";
function Product(pros) {
  const { id } = useParams();
  const [data, SetDat] = useState({
    productId: 1,
    productImages: [
      "https://m.media-amazon.com/images/I/71lfbwPaQXL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/41lwPZwMBqL._AC_US100_.jpg",
      "https://m.media-amazon.com/images/I/41WM6KLVhzL._AC_US100_.jpg",
    ],
    productRating: 4,
    productPrice: 4.33,
    productDescription: "",
    productDetail: {
      PackageDimensions: "6.93 x 3.74 x 0.79 inches; 2.82 ounces",
      ItemModelNumber: "Glue tape-4",
      DateFirstAvailable: "December 2, 2023",
      Manufacturer: "Secopad",
      ASIN: "B0CHTZD63Q",
      CountryOfOrigin: "China",
      CustomerReviews: 4.4,
    },
    productRelated: [2, 3, 4, 5],
    productFromBrand: [6, 7, 8],
    productSameCategory: [],
    productReview: [
      {
        userName: "	Katie Hawkins",
        review:
          "Bought these for scrapbooking and I’m so impressed. I was nervous they wouldn’t be sticky enough but they are definitely sticky. Great value for the money. Small, Easy to use and they work great. It’s been months and my photos are still stuck.",
        image: "",
        rating: 4,
        helpfulness: 4,
        reviewId: 1,
      },
      {
        userName: "",
        review:
          "It was easy to use and the durability and stickiness was the right amount.",
        image: "",
        rating: 3,
        helpfulness: 4,
        reviewId: 2,
      },
    ],
  });

  return (
    <>
      <NavBar></NavBar>
      <NavBarShopping></NavBarShopping>
      <ProductContainer data={data}></ProductContainer>
      <NavFooter></NavFooter>
    </>
  );
}
export default Product;
