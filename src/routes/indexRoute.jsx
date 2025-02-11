import Category from "../components/Category";
import Product from "../components/Product";
import App from "../App";

const indexRoute = [
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "Category",
    element: <Category></Category>,
  },
  {
    path: "Product",
    element: <Product></Product>,
  },
];

export default indexRoute;
