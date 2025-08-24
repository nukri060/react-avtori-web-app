import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import HeaderLayout from "./pages/Layouts/HeaderLayout";

const root = document.getElementById("root");


ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <App />   
  </BrowserRouter>
);

