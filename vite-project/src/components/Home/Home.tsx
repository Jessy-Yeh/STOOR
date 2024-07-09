import axios from "axios";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import Product from "../Product/Product";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  }, []);
  return (
    <Box sx={{ padding: "1rem 0" }}>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Product product={product} />
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default Home;
