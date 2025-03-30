import App from "../App";

import Category from "../components/Category";
import Product from "../components/Product";
import ErrorPage from "../components/ErrorPage";
import LoginPage from "../components/LoginPage";

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
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
];

export default indexRoute;
