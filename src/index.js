import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ProductContextProvaider from "./components/context/ProductContextProvaider";
import CartContextProvaider from "./components/context/CartContextProvaider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ProductContextProvaider>
      <CartContextProvaider>
        <App />
      </CartContextProvaider>
    </ProductContextProvaider>
  </BrowserRouter>
);
