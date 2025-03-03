import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import NavBarShopping from "./NavBar_Shopping";
import NavFooter from "./NavFooter";
import CategoriesProductPanel from "./CategoriesProductPanel";
import { useState, useEffect } from "react";
import ResultDisplayBar from "./ResultDisplayBar";
import "../styles/Category.css";

// Display list of products
function Category() {
  const { id } = useParams();
  const [data, setData] = useState([
    {
      productId: 1,
      productImg:
        "https://m.media-amazon.com/images/I/813RiR0wH+L._AC_UL320_.jpg",
      productTitle:
        "240W Charger for ASUS ROG Zephyrus G14 G15 M16 G16 S15 S17, Rog Flow X16 GV601, Rog Strix g17 g513 Scar Charge Zenbook Pro Duo 15 ASUS TUF Gaming A15 F15 A17 vivobook s533e 20V 12A AC Adapter",
      productRating: 4,
      productPrice: 33.33,
    },
  ]);

  useEffect(() => {
    let ignore = false;
    setData([
      {
        productId: 1,
        productImg:
          "https://m.media-amazon.com/images/I/813RiR0wH+L._AC_UL320_.jpg",
        productTitle:
          "240W Charger for ASUS ROG Zephyrus G14 G15 M16 G16 S15 S17, Rog Flow X16 GV601, Rog Strix g17 g513 Scar Charge Zenbook Pro Duo 15 ASUS TUF Gaming A15 F15 A17 vivobook s533e 20V 12A AC Adapter",
        productRating: 4,
        productPrice: 33.33,
      },
    ]);
    fetch("http://localhost:3000/products", { mode: "cors" })
      .then((response) => response.json())
      .then((response) => {
        response = response.map((value) => {
          value["productImages"] != null
            ? (value["productImg"] = value["productImages"][0])
            : (value["productImg"] =
                "https://avatars.githubusercontent.com/u/6677444");
          // delete value["productImages"];
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
      <CategoriesProductPanel data={data}></CategoriesProductPanel>
      <NavFooter></NavFooter>
    </>
  );
}
export default Category;
