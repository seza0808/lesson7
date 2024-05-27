import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../context/ProductContextProvaider";

const EditProduct = () => {
  const { id } = useParams();
  const { getOneProduct, oneProduct, editedProduct } = useProducts();
  useEffect(() => {
    getOneProduct(id); //cт
  }, [id]);
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: 0,
    image: "",
  });
  useEffect(() => {
    setProduct(oneProduct);
  }, [oneProduct]);
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
    editedProduct(id, product);
  };
  console.log(oneProduct);
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
        EDIT PRODUCT
      </Typography>
      <TextField
        onChange={handelInput}
        name="title"
        fullWidth
        label="Title"
        variant="outlined"
        value={product.title}
      />
      <TextField
        onChange={handelInput}
        name="description"
        fullWidth
        label="Description"
        variant="outlined"
        value={product.description}
      />
      <TextField
        onChange={handelInput}
        name="image"
        fullWidth
        label="Image URL"
        variant="outlined"
        value={product.image}
      />
      <TextField
        onChange={handelInput}
        name="price"
        fullWidth
        label="Price"
        variant="outlined"
        value={product.price}
      />
      <Button fullWidth variant="outlined" onClick={handleClick}>
        SAVE
      </Button>
    </Box>
  );
};

export default EditProduct;
