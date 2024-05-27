import React, { createContext, useContext, useReducer } from "react";
import { getLocalStorage } from "../../helpers/functions";
export const cartContext = createContext();
export const useCart = () => useContext(cartContext);
const CartContextProvaider = ({ children }) => {
  const INIT_STATE = {
    cart: JSON.parse(localStorage.getItem("cart")) || {
      product: [],
      totalPrice: 0,
    },
  };
  const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case "GET_CART":
        return { ...state, cart: action.payload };
    }
  };
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  //!GET
  //функция для получения продукта добавленных в корзину из хранилищя
  const getCart = () => {
    //получение данных из localStorage
    let cart = getLocalStorage();
    if (!cart) {
      localStorage.setItem(
        "cart",
        JSON.stringify({
          product: [],
          totalPrice: 0,
        })
      );
      cart = {
        product: [],
        totalPrice: 0,
      };
      //обнавления страницы
      dispatch({
        type: "GET_CART",
        payload: cart,
      });
    }
  };
  //!CREATE
  //функция для добавление товара в корзину
  const addProductToCart = (product) => {
    //получение содержимое из хранилища под ключом cart
    let cart = getLocalStorage();
    if (!cart) {
      cart = {
        product: [],
        totalPrice: 0,
      };
      //создание обьекта,который добавим в localStorage в массиве cart.products
      let newProduct = {
        item: product,
        count: 1,
        subPirce: 0,
      };
      //проверяем есть ли уже продукт который хотим добавить в корзину
      let productToFind = cart.product.rilter(
        (elem) => elem.item.id === product.id
      );
      //если товар уже добавлен в корзину, то удаляем его из массива cart.products через фильтр,в противном случае добавляем его в cart.products
      if (productToFind.length === 0) {
        cart.products.push(newProduct);
      } else {
        cart.products = cart.products.filter(
          (elem) => elem.item.id !== product.id
        );
      }
      //обновляем данные в localStorage
      localStorage.setItem("cart", JSON.stringify(cart));
      //добавляем состояние
      dispatch({
        type: "GET_CART",
        payload: cart,
      });
    }
  };
  const values = {
    addProductToCart,
    cart: state.cart,
    getCart,
  };
  return <cartContext.Provider value={values}>{children}</cartContext.Provider>;
};

export default CartContextProvaider;
