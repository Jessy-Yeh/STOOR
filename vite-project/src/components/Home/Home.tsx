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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  }, []);
  return (
    <>
      <Navbar />
      <Filter />
      <Banner />
      <Grid
        container
        spacing={2}
        columns={{ xs: 4, sm: 8, md: 12 }}
        rowSpacing={2}
      >
        {products.map((product, index) => (
          <Grid item xs={6} md={4} key={index}>
            <Item>
              <Product product={product} />
            </Item>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Home;
