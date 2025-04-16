// Display product information and add to Cart
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/Product.css";

import NavBar from "./NavBar";
import NavBarShopping from "./NavBar_Shopping";
import NavFooter from "./NavFooter";
import ProductContainer from "./ProductContainer";
function Product(pros) {
  const { id } = useParams();
  const [data, SetData] = useState({
    productId: 1,
    productName:
      "Scrapbook Tape, 4 Pack Double Sided Tape Roller for Crafts, Adhesive Glue Runner Scrapbooking Supplies Journaling School Office Supplies for Kids and Adults, 0.3IN x 26FT",
    productImages: [
      "https://m.media-amazon.com/images/I/71lfbwPaQXL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/714MP8eBL6L._SX522_.jpg",
      "https://m.media-amazon.com/images/I/714C7wCxJtL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/71Z+AWZ6hvL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/71+Urd3faNL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/71x6NAZrxiL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/31UvXlbVq7L._AC_UF480,480_SR480,480_.jpg",
    ],
    productRating: 4,
    productPrice: 4.33,
    productOrderAmount: [
      { Amount: 4, data: ["6.99$", "(1.75 / Count)", ""] },
      { Amount: 6, data: ["9.99$", "(1.65 / Count)", ""] },
      { Amount: 8, data: ["12.99$", "(1.55 / Count)", ""] },
      { Amount: 10, data: ["15.99$", "(1.45 / Count)", ""] },
    ],
    productDescription: [
      "Sticky & Safe to Use: Our double sided tape for crafts was made of high quality glue, it is sticky but not destructive and will help to save your scrapbook or photos for a long time",
      "Mess-free & Fast: Different from the ordinary double sided tape or liquid tape, Secopad glue tape won't cause any mess and you don't have to wait for the glue to dry. It takes only a few seconds to finish the",
      "Tape Glue Runner: The compact design and quality material make sure that the glue come out smooth and evenly. 4 Pack two sided tape can be use for home, school and office. It is easy for adults and children to use",
      "Alternative to traditional adhesive tape: This tape roller is muti-purpose, you can easily use it for scrapbook,photos, crafts and other arts projects",
      "Tip: You can clean and re-tape the scrapbooking tape if you make a mistake in a short time",
      "stickiness of the tape, try to use in warm indoors Note: Low temperature may affect the",
    ],
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

  const [product, setProduct] = useState(null);
  useEffect(() => {
    let ignore = false;
    fetch(`http://localhost:3000/products/${id}`, { mode: "cors" })
      .then((response) => response.json())
      .then((response) => {
        if (!ignore) {
          const fetchedProductId = response.productId;
          const fetchedProductImages = response.productImages;
          const fetchedProductName = response.productName;
          const fetchedProductPrice = response.productPrice;
          const fetchedProductRating = response.productRating;

          const {
            productId,
            productImages,
            productName,
            productPrice,
            productRating,
            ...others
          } = data;
          const result = {
            productId: fetchedProductId,
            productImages: fetchedProductImages,
            productName: fetchedProductName,
            productPrice: fetchedProductPrice,
            productRating: fetchedProductRating,
            ...others,
          };
          setProduct(result);
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
      {product ? (
        <ProductContainer data={product}></ProductContainer>
      ) : (
        <p>Fetching</p>
      )}
      <NavFooter></NavFooter>
    </>
  );
}
export default Product;
