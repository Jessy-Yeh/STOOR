import axios from "axios";
// import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import Product from "../ProductCard/ProductCard";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Navbar from "../Navbar/Navbar";
import Filter from "../Filter/Filter";
import Banner from "../Banner/Banner";
import { useSearchParams } from "react-router-dom";
import { ProductType } from "../../types";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Home = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [searchParams] = useSearchParams();
  const activeFilters: Array<string> =
    searchParams.get("categories")?.split(",") || [];

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  const categories = products.map((product) => product.category);
  const uniqueCategories = [...new Set(categories)];

  const filteredProducts = products.filter((product) => {
    if (activeFilters.length === 0) {
      return true;
    }
    return activeFilters.includes(product.category);
  });

  return (
    <>
      <Navbar />
      <div style={{ marginTop: "110px" }}>
        <Filter categories={uniqueCategories} />
        <Banner />
        <Grid
          container
          spacing={2}
          columns={{ xs: 4, sm: 8, md: 12 }}
          rowSpacing={2}
        >
          {filteredProducts.map((product, index) => (
            <Grid item xs={6} md={4} key={index}>
              <Item>
                <Product product={product} />
              </Item>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default Home;
