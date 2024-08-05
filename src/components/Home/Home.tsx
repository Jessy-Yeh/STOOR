import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductType } from "../../types";
import { Layout } from "../common/Layout";
import { Error } from "../common/Error";
import Banner from "../common/Banner";
import Filter from "../Filter/Filter";
import Stack from "@mui/material/Stack";
import { Box, CircularProgress } from "@mui/material";
import Products from "../Products/Products";

const Home = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const activeFilters: Array<string> =
    searchParams.get("categories")?.split(",") || [];

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
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
        component="main"
      >
        {error ? (
          <Box
            sx={{
              paddingTop: { xs: "16px", md: "24px" },
            }}
            component="main"
          >
            <Error />
          </Box>
        ) : (
          <>
            <Banner
              title="STOOR"
              description="Lorem ipsum dolor sit amet consectetur. Nullam leo condimentum
            turpis aliquet. Fermentum purus amet vitae sed nam imperdiet. Sit
            cursus sed commodo aliquet ultricies mi volutpat tortor at. A
            gravida enim ut quis et in lectus. Dolor tortor facilisi egestas
            faucibus nulla. Nibh accumsan felis tempor convallis nunc porta
            integer."
            />
            <Stack direction={{ xs: "column", md: "row" }}>
              <Filter categories={uniqueCategories} />

              {loading ? (
                <Box sx={{ display: "flex", margin: "250px auto" }}>
                  <CircularProgress />
                </Box>
              ) : (
                <Products filteredProducts={filteredProducts} />
              )}
            </Stack>
          </>
        )}
      </Box>
    </Layout>
  );
};

export default Home;
