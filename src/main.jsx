import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { CartProvider } from "./context/CartContext";

const root = document.getElementById("root");


ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <CartProvider>
      <App/>
    </CartProvider>
  </BrowserRouter>
);

