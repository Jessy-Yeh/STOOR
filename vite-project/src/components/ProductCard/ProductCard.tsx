import { Box, Rating, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { NavLink } from "react-router-dom";
import { ProductType } from "../../types";
import { formatPrice } from "../../utils/formatPrice.ts";

interface Props {
  product: ProductType;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Stack
      sx={{
        height: "100%",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          aspectRatio: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={product.image}
          alt={product.description}
          style={{ maxWidth: "100%", maxHeight: "300px" }}
        />
      </Box>
      <Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{
            gap: "4rem",
            maxWidth: "100%",
            marginTop: "1rem",
          }}
        >
          <Typography
            sx={{ fontSize: "14px", textAlign: "left", fontWeight: 500 }}
          >
            {product.title}
          </Typography>
          <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
            £{formatPrice(product.price)}
          </Typography>
        </Stack>

        <Stack
          direction="row"
          spacing={{ xs: 2, md: 0 }}
          justifyContent={{ md: "flex-start" }}
          alignItems="center"
          m="1rem 0 0 0"
          gap="10px"
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginRight: "1rem",
            }}
          >
            <Rating
              name="rating"
              value={product.rating.rate}
              readOnly
              precision={0.5}
              sx={{ color: "black", fontSize: "13px" }}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
          </Box>
          <Typography sx={{ fontSize: "11px" }}>
            from {product.rating.count} reviews
          </Typography>
        </Stack>
        <NavLink to={`product/${product.id}`}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "black",
              marginTop: "1rem",
              width: "100%",
              fontSize: "14px",
            }}
          >
            VIEW PRODUCT
          </Button>
        </NavLink>
      </Stack>
    </Stack>
  );
};

export default ProductCard;
