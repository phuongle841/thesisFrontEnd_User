import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import NavBarShopping from "./NavBar_Shopping";
import NavFooter from "./NavFooter";
import CategoriesProductPanel from "./CategoriesProductPanel";
import { useState } from "react";
import "../styles/Category.css";
import ResultDisplayBar from "./ResultDisplayBar";

// Display list of products
function Category() {
  const { id } = useParams();
  const [data] = useState([
    {
      productId: 1,
      productImg:
        "https://m.media-amazon.com/images/I/813RiR0wH+L._AC_UL320_.jpg",
      productTitle:
        "240W Charger for ASUS ROG Zephyrus G14 G15 M16 G16 S15 S17, Rog Flow X16 GV601, Rog Strix g17 g513 Scar Charge Zenbook Pro Duo 15 ASUS TUF Gaming A15 F15 A17 vivobook s533e 20V 12A AC Adapter",
      productRating: 4,
      productPrice: 33.33,
    },
    {
      productId: 2,
      productImg:
        "https://m.media-amazon.com/images/I/61ComuLBSQL._AC_UL320_.jpg",
      productTitle:
        "Peplink MAX BR1 Pro 5G | All-in-One 5G Solution | x62 5G Module | Wi-Fi 6 | 2x2 MU-MIMO | MAX-BR1-PRO-5GN-T-",
      productRating: 5,
      productPrice: 33.33,
    },
    {
      productId: 3,
      productImg:
        "https://m.media-amazon.com/images/I/71BnjAO-2FL._AC_UL320_.jpg",
      productTitle:
        "Turtle Beach Stealth 700 Gen 3 Wireless Multiplatform Amplified Gaming Headset for PS5, PS4, PC, Mobile – 60mm",
      productRating: 2,
      productPrice: 33.33,
      badge: "Gaming",
    },
    {
      productId: 4,
      productImg:
        "https://m.media-amazon.com/images/I/51388Dmc+pL._AC_UL320_.jpg",
      productTitle:
        "4K60 HDMI to USB-C Capture Dongle with Scaler, Stream up to 4K60, HDMI 2.0, HDR, Ultra Low Latency, for Gaming Xbox,",
      productRating: 1,
      productPrice: 33.33,
    },
    {
      productId: 5,
      productImg:
        "https://m.media-amazon.com/images/I/81fEsw811jL._AC_UL320_.jpg",
      productTitle:
        "2025 Gaming Laptop, Laptop with AMD Ryzen 9 6900HX (8C/16T, Up to 4.9GHz), 16GB DDR5 512GB NVMe SSD Windows 11 Laptop Computer, 16-inch FHD Display, WiFi 6, 53Wh Battery, Backlit KB",
      productRating: 2,
      productPrice: 33.33,
    },
    {
      productId: 6,
      productImg:
        "https://m.media-amazon.com/images/I/813RiR0wH+L._AC_UL320_.jpg",
      productTitle:
        "240W Charger for ASUS ROG Zephyrus G14 G15 M16 G16 S15 S17, Rog Flow X16 GV601, Rog Strix g17 g513 Scar Charge Zenbook Pro Duo 15 ASUS TUF Gaming A15 F15 A17 vivobook s533e 20V 12A AC Adapter",
      productRating: 3,
      productPrice: 33.33,
    },
    {
      productId: 7,
      productImg:
        "https://m.media-amazon.com/images/I/61ComuLBSQL._AC_UL320_.jpg",
      productTitle:
        "Peplink MAX BR1 Pro 5G | All-in-One 5G Solution | x62 5G Module | Wi-Fi 6 | 2x2 MU-MIMO | MAX-BR1-PRO-5GN-T-",
      productRating: 4,
      productPrice: 33.33,
    },
    {
      productId: 8,
      productImg:
        "https://m.media-amazon.com/images/I/71BnjAO-2FL._AC_UL320_.jpg",
      productTitle:
        "Turtle Beach Stealth 700 Gen 3 Wireless Multiplatform Amplified Gaming Headset for PS5, PS4, PC, Mobile – 60mm",
      productRating: 5,
      productPrice: 33.33,
      badge: "Family",
    },
    {
      productId: 9,
      productImg:
        "https://m.media-amazon.com/images/I/51388Dmc+pL._AC_UL320_.jpg",
      productTitle:
        "4K60 HDMI to USB-C Capture Dongle with Scaler, Stream up to 4K60, HDMI 2.0, HDR, Ultra Low Latency, for Gaming Xbox,",
      productRating: 4,
      productPrice: 33.33,
    },
    {
      productId: 10,
      productImg:
        "https://m.media-amazon.com/images/I/81fEsw811jL._AC_UL320_.jpg",
      productTitle:
        "2025 Gaming Laptop, Laptop with AMD Ryzen 9 6900HX (8C/16T, Up to 4.9GHz), 16GB DDR5 512GB NVMe SSD Windows 11 Laptop Computer, 16-inch FHD Display, WiFi 6, 53Wh Battery, Backlit KB",
      productRating: 2,
      productPrice: 33.33,
    },
    {
      productId: 11,
      productImg:
        "https://m.media-amazon.com/images/I/813RiR0wH+L._AC_UL320_.jpg",
      productTitle:
        "240W Charger for ASUS ROG Zephyrus G14 G15 M16 G16 S15 S17, Rog Flow X16 GV601, Rog Strix g17 g513 Scar Charge Zenbook Pro Duo 15 ASUS TUF Gaming A15 F15 A17 vivobook s533e 20V 12A AC Adapter",
      productRating: 1,
      productPrice: 33.33,
    },
    {
      productId: 12,
      productImg:
        "https://m.media-amazon.com/images/I/61ComuLBSQL._AC_UL320_.jpg",
      productTitle:
        "Peplink MAX BR1 Pro 5G | All-in-One 5G Solution | x62 5G Module | Wi-Fi 6 | 2x2 MU-MIMO | MAX-BR1-PRO-5GN-T-",
      productRating: 4,
      productPrice: 33.33,
    },
    {
      productId: 13,
      productImg:
        "https://m.media-amazon.com/images/I/71BnjAO-2FL._AC_UL320_.jpg",
      productTitle:
        "Turtle Beach Stealth 700 Gen 3 Wireless Multiplatform Amplified Gaming Headset for PS5, PS4, PC, Mobile – 60mm",
      productRating: 3,
      productPrice: 33.33,
    },
    {
      productId: 14,
      productImg:
        "https://m.media-amazon.com/images/I/51388Dmc+pL._AC_UL320_.jpg",
      productTitle:
        "4K60 HDMI to USB-C Capture Dongle with Scaler, Stream up to 4K60, HDMI 2.0, HDR, Ultra Low Latency, for Gaming Xbox,",
      productRating: 3,
      productPrice: 33.33,
    },
    {
      productId: 15,
      productImg:
        "https://m.media-amazon.com/images/I/81fEsw811jL._AC_UL320_.jpg",
      productTitle:
        "2025 Gaming Laptop, Laptop with AMD Ryzen 9 6900HX (8C/16T, Up to 4.9GHz), 16GB DDR5 512GB NVMe SSD Windows 11 Laptop Computer, 16-inch FHD Display, WiFi 6, 53Wh Battery, Backlit KB",
      productRating: 2,
      productPrice: 33.33,
    },
  ]);

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
