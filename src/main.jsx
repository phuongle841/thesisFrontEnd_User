import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import indexRoute from "./routes/indexRoute.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(indexRoute);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
