import { useEffect, useState } from "react";
import axios from "axios";
import { Layout } from "../common/Layout";
import { ProductType } from "../../types";
import { formatPrice } from "../../utils/formatPrice";

import {
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

type UserProductType = {
  productId: number;
  quantity: number;
};

function createData(name: string, price: number, quantity: number) {
  return { name, price, quantity };
}

const Cart = () => {
  const [userProducts, setUserProducts] = useState<UserProductType[]>([]);
  const [allProducts, setAllProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(false);

  const randomCartNumber = Math.floor(Math.random() * 7) + 1;

  useEffect(() => {
    setLoading(true);
    console.log(randomCartNumber);
    axios
      .get(`https://fakestoreapi.com/carts/${randomCartNumber}`)
      .then((res) => setUserProducts(res.data.products))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setAllProducts(response.data);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  const allUserProductsInfo = userProducts.map((userProduct) => {
    const findProduct = allProducts.filter(
      (product) => product.id === userProduct.productId
    );

    return { ...userProduct, info: findProduct };
  });

  const rows = allUserProductsInfo.map((productInfo) => {
    const productDetails = productInfo.info[0];
    return createData(
      productDetails.title,
      productDetails.price,
      productInfo.quantity
    );
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
          paddingTop: { xs: "16px", md: "24px" },
        }}
      >
        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "70vh",
              width: "100vw",
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <>
            <Typography
              variant="h1"
              sx={{
                fontSize: "24px",
                fontWeight: "500",
                textAlign: "center",
                marginBottom: "2rem",
                marginTop: "3rem",
              }}
            >
              Your Cart
            </Typography>

            <Stack justifyContent="center" alignItems="center">
              <TableContainer component={Paper} sx={{ maxWidth: 1000 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Product Name</TableCell>
                      <TableCell align="right">Price</TableCell>
                      <TableCell align="right">Quantity</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">
                          £{formatPrice(row.price)}
                        </TableCell>
                        <TableCell align="right">{row.quantity}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "black",
                  width: "300px",
                  fontSize: "14px",
                  marginTop: "3rem",
                }}
              >
                PROCEED TO CHECKOUT
              </Button>
            </Stack>
          </>
        )}
      </Box>
    </Layout>
  );
};

export default Cart;
