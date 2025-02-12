import App from "../App";

import Category from "../components/Category";
import Product from "../components/Product";
import ErrorPage from "../components/ErrorPage";

const indexRoute = [
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "category/:id",
    element: <Category></Category>,
  },
  {
    path: "product/:id",
    element: <Product></Product>,
  },
];

export default indexRoute;
