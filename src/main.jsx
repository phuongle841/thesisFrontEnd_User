import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import indexRoute from "./routes/indexRoute.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "./styles/themes.jsx";

const router = createBrowserRouter(indexRoute);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  </StrictMode>
);
