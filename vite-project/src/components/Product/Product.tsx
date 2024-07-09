import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

interface Props {
  product: Product;
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Product = ({ product }: Props) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} md={4}>
        <Item>
          <img
            src={product.image}
            alt={product.description}
            style={{ width: "100%" }}
          />
          <div>
            <p>{product.title}</p>
            <p>{product.price}</p>
          </div>
          <Button>VIEW PRODUCT</Button>
        </Item>
      </Grid>
    </Grid>
  );
};

export default Product;
