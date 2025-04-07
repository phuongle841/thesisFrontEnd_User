import App from "../App";

import Category from "../components/Category";
import Product from "../components/Product";
import Cart from "../components/Cart";
import ErrorPage from "../components/ErrorPage";
import LoginPage from "../components/LoginPage";
import SignUpPage from "../components/SignUpPage";
import Profile from "../components/Profile";
import Order from "../components/Order";
import Location from "../components/Location";
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
  {
    path: "/signup",
    element: <SignUpPage></SignUpPage>,
  },
  { path: "/cart", element: <Cart></Cart> },
  {
    path: "/profile/:id",
    element: <Profile></Profile>,
  },
  {
    path: "/order",
    element: <Order></Order>,
  },
  {
    path: "/location",
    element: <Location></Location>,
  },
];

export default indexRoute;
