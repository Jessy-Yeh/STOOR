import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import Grid from "@mui/material/Grid";
import Filter from "../Filter/Filter";
import Banner from "../Banner/Banner";
import { useSearchParams } from "react-router-dom";
import { ProductType } from "../../types";
import Stack from "@mui/material/Stack";
import { Layout } from "../common/Layout";
import { Box } from "@mui/material";

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
    <Layout>
      <Box
        sx={{
          paddingLeft: { xs: "16px", md: "24px" },
          paddingRight: { xs: "16px", md: "24px" },
          maxWidth: "1800px",
          marginTop: "97.1px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Banner />
        <Stack direction={{ xs: "column", md: "row" }}>
          <Filter categories={uniqueCategories} />

          <Grid
            container
            spacing={{ xs: 2, sm: 4, xl: 6 }}
            rowSpacing={6}
            sx={{
              margin: "0 auto",
              paddingBottom: "5rem",
            }}
          >
            {filteredProducts.map((product, index) => (
              <Grid item xs={12} sm={6} lg={4} xl={3} key={index}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Box>
    </Layout>
  );
};

export default Home;
