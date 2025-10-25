import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRouter from "./App";
import "./index.css";
import { RouterProvider } from "react-router-dom";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <RouterProvider router={AppRouter} />
  </StrictMode>
);
