import axios from "axios";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { API, API_CATEGORIES } from "../../helpers/const";
import { useNavigate } from "react-router-dom";
const productContext = createContext();
export const useProducts = () => useContext(productContext);
const ProductContextProvaider = ({ children }) => {
  const navigate = useNavigate();
  const INIT_STATE = {
    product: [],
    oneProduct: {},
    categories: [],
  };
  const reduser = (state = INIT_STATE, action) => {
    switch (action.type) {
      case "GET_PRODUCTS":
        return { ...state, product: action.payload };
      case "GET_ONE_PRODUCT":
        return { ...state, oneProduct: action.payload };
      case "GET_CATEGORIES":
        return { ...state, categories: action.payload };
    }
  };
  //!CREATE
  const [state, dispatch] = useReducer(reduser, INIT_STATE);
  const addProduct = async (newProduct) => {
    await axios.post(API, newProduct); //это не гет запрос а пост запрос
    navigate("/products");
  };
  //!GETPRODUCTS
  const getProduct = async () => {
    await axios(API);
    const { data } = await axios(API);
    console.log(data, "get");
    dispatch({
      type: "GET_PRODUCTS",
      payload: data,
    });
  };
  //!DELETE
  const deleteProduct = async (id) => {
    await axios.delete(`${API}/${id}`);
    getProduct();
  };
  useEffect(() => {
    getProduct();
    getcategories();
  }, []);
  //!GETONEPRODUCT
  const getOneProduct = async (id) => {
    const { data } = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_PRODUCT",
      payload: data,
    });
  };
  //!EDIT
  const editProduct = async (id, editedProduct) => {
    await axios.patch(`${API}/${id}`, editedProduct);
    navigate("/products");
  };
  //!GETCATEGORIES
  const getcategories = async () => {
    const { data } = await axios(API_CATEGORIES);
    dispatch({
      type: "GET_CATEGORIES",
      payload: data,
    });
  };
  //!CREATECATEORY
  const createCategory = async (newCategory) => {
    await axios.post(API_CATEGORIES, newCategory);
    getcategories();
  };
  const values = {
    addProduct,
    getProduct,
    products: state.product,
    deleteProduct,
    getOneProduct,
    oneProduct: state.oneProduct,
    editProduct,
    getcategories,
    categories: state.categories,
    createCategory,
  };
  console.log(state, "dd");
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvaider;
