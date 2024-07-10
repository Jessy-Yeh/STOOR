import { Box, Rating, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { NavLink } from "react-router-dom";
import { ProductType } from "../../types";

interface Props {
  product: ProductType;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Stack sx={{ width: { xs: "400px", md: "300px" } }}>
      <img
        src={product.image}
        alt={product.description}
        style={{ width: "100%", height: "100%" }}
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
        {/* <Typography>{product.rating.rate}</Typography> */}
        <Box
          sx={{
            width: 200,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Rating
            name="rating"
            value={product.rating.rate}
            readOnly
            precision={0.5}
            sx={{ color: "black" }}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
        </Box>
        <Typography>from {product.rating.count} reviews</Typography>
      </Stack>
      <NavLink to={`product/${product.id}`}>
        <Button
          variant="contained"
          sx={{ backgroundColor: "black", marginTop: "1rem", width: "100%" }}
        >
          VIEW PRODUCT
        </Button>
      </NavLink>
    </Stack>
  );
};

export default ProductCard;
