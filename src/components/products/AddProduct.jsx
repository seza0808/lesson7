import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useProducts } from "../context/ProductContextProvaider";
import CategorySelect from "./CategorySelect";

const AddProduct = () => {
  const { addProduct, getcategories, categories } = useProducts();
  console.log(categories, "add");
  const [product, setProduct] = useState({
    title: "",
    category: "",
    description: "",
    price: 0,
    image: "",
  });
  useEffect(() => {
    getcategories();
  }, []);
  const handelInput = (e) => {
    if (e.target.name == "price") {
      const obj = {
        ...product, //распаковка
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      const obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };
  const handleClick = () => {
    addProduct(product);
  };
  console.log(product);
  return (
    <Box
      sx={{
        width: "50vw",
        height: 500,
        margin: "20px auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="h4" align="center">
        ADMIN PAGE
      </Typography>
      <TextField
        onChange={handelInput}
        name="title"
        fullWidth
        label="Title"
        variant="outlined"
      />
      <CategorySelect handelInput={handelInput} categories={categories} />
      <TextField
        onChange={handelInput}
        name="description"
        fullWidth
        label="Description"
        variant="outlined"
      />
      <TextField
        onChange={handelInput}
        name="image"
        fullWidth
        label="Image URL"
        variant="outlined"
      />
      <TextField
        onChange={handelInput}
        name="price"
        fullWidth
        label="Price"
        variant="outlined"
      />
      <Button fullWidth variant="outlined" onClick={handleClick}>
        ADD PRODUCT
      </Button>
    </Box>
  );
};

export default AddProduct;
