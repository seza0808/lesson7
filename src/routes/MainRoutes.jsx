import React from "react";
import HomePage from "../pages/HomePage";
import { Route, Routes } from "react-router-dom";
import AddProduct from "../components/products/AddProduct";
import EditProduct from "../components/products/EditProduct";
import ProductList from "../components/products/ProductList";
import AboutPage from "../pages/AboutPage";
import { ContactPage } from "@mui/icons-material";
import AddCategory from "../components/products/AddCategory";
import Cart from "../components/cart/Cart";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { id: 1, link: "/", element: <HomePage /> },
    { id: 2, link: "/addProduct", element: <AddProduct /> },
    { id: 3, link: "/edit/:id", element: <EditProduct /> },
    { id: 4, link: "/products", element: <ProductList /> },
    { id: 5, link: "/about", element: <AboutPage /> },
    { id: 6, link: "/contact", element: <ContactPage /> },
    { id: 7, link: "/addCategory", element: <AddCategory /> },
    { id: 8, link: "/cart", element: <Cart /> },
  ]; //в elem лежить вот это запись

  return (
    <div>
      <Routes>
        {PUBLIC_ROUTES.map((elem) => (
          <Route key={elem.id} path={elem.link} element={elem.element} />
        ))}
      </Routes>
    </div>
  );
};

export default MainRoutes;
