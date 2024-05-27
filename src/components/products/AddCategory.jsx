import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useProducts } from "../context/ProductContextProvaider";

const AddCategory = () => {
  const style = {
    position: "absolute",
    top: "30%",
    left: "30%",
    width: 700,
    dispaly: "flex",
    border: "2px solid black",
    boxShadow: 24,
    bgcolor: "background.paper",
    p: 4,
  };
  const [category, setCategory] = useState();
  const { createCategory } = useProducts();
  const handleClick = () => {
    if (!category.trim()) {
      console.log("Введите данные");
      return;
    }
    const newCategory = {
      name: category,
    };
    createCategory(newCategory);
    setCategory("");
  };
  return (
    <Box sx={style}>
      <Typography id="modal-modal-title">Добавить новую категорию</Typography>
      <TextField
        fullWidth
        variant="outlined"
        onChange={(e) => setCategory(e.target.value)}
        value={category}
      ></TextField>
      <Button onClick={handleClick}>Добавить</Button>
    </Box>
  );
};

export default AddCategory;
