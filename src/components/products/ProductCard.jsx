import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useProducts } from "../context/ProductContextProvaider";
import { useNavigate } from "react-router-dom";
import { AddShoppingCart } from "@mui/icons-material";
import { useCart } from "../context/CartContextProvaider";

const ProductCard = ({ elem }) => {
  const { deleteProduct } = useProducts();
  const { addProductToCart } = useCart();
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        height: 550,
        boxShadow: "none",
        margin: "2%",
        width: { md: "40vw", lg: "25vw" },
      }}
    >
      <CardActionArea>
        <CardMedia sx={{ height: 240, borderRadius: 4 }} image={elem.image} />
      </CardActionArea>
      <CardContent sx={{ padding: "20px 5px 0px 5px" }}>
        <Typography variant="h5" fontSize="20" fontWeight={700} component="div">
          {elem.title}
        </Typography>
        <Stack>
          <Rating name="half-rating" defaultValue={0} precision={1} />
        </Stack>
        <Typography color="black" fontSize="24px" fontWeight={700}>
          {elem.price} $
        </Typography>
        <Typography color="black" fontSize="24px" fontWeight={700}>
          {elem.description}
        </Typography>
        <Button
          onClick={() => deleteProduct(elem.id)}
          color="secondary"
          variant="outlined"
          size="medium"
        >
          Delete
        </Button>

        <Button
          onClick={() => navigate("/edit/")}
          color="primary"
          variant="outlined"
          size="medium"
        >
          Edit
        </Button>
        <IconButton onClick={() => addProductToCart(elem)}>
          <AddShoppingCart />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
