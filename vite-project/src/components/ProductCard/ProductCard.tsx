import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { NavLink } from "react-router-dom";
import { ProductType } from "../../types";

interface Props {
  product: ProductType;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Box>
      <img
        src={product.image}
        alt={product.description}
        style={{ width: "100%" }}
      />
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          gap: "2rem",
          maxWidth: "100%",
        }}
      >
        <Typography>{product.title}</Typography>
        <Typography>£{product.price}</Typography>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Typography>{product.rating.rate}</Typography>
        <Typography>from {product.rating.count} reviews</Typography>
      </Stack>
      <NavLink to={`product/${product.id}`}>
        <Button
          variant="contained"
          sx={{ backgroundColor: "black", margin: "1rem", width: "100%" }}
        >
          VIEW PRODUCT
        </Button>
      </NavLink>
    </Box>
  );
};

export default ProductCard;
