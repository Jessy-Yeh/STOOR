import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import StarIcon from "@mui/icons-material/Star";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ProductType } from "../../types";
import { Layout } from "../common/Layout";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import CircularProgress from "@mui/material/CircularProgress";
import { Rating } from "@mui/material";

// TODO: have the select option required before it can be added to the cart

const Product = () => {
  const [product, setProduct] = useState<ProductType | undefined>();
  const [bagMsg, setBagMsg] = useState(false);
  const [size, setSize] = useState("small");
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [id]);

  const handleClick = () => {
    const reqBody = { products: [{ productId: id, quantity: 1 }] };
    axios.post("https://fakestoreapi.com/carts", reqBody).then((res) => {
      console.log(res.data);
      setBagMsg(true);
      // TODO: hide message after a few seconds
      // TODO: store cart in local storage
    });
  };

  return (
    <Layout>
      <Box component="main">
        {bagMsg && (
          <Stack
            direction="row"
            sx={{
              backgroundColor: "#6FCF97",
              position: "absolute",
              top: "98px",
              left: 0,
              right: 0,
              padding: "1rem",
              zIndex: 99,
            }}
            justifyContent="center"
            alignItems="center"
          >
            <CheckBoxIcon sx={{ color: "#075227" }} />
            <Typography sx={{ marginLeft: "1rem", fontSize: "14px" }}>
              Thank you, {product?.title} has been added to your bag!
            </Typography>
          </Stack>
        )}

        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              width: "100vw",
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <Stack
            direction={{ md: "row" }}
            sx={{
              flex: "1",
              minHeight: "100vh",
            }}
          >
            <Stack
              justifyContent="center"
              alignItems="center"
              p={{ xs: "0 1rem" }}
              m={{ xs: "120px 0 1rem 0", md: "0" }}
              flex="1"
              sx={{
                height: { md: "100vh" },
                position: "relative",
              }}
            >
              {product && product?.rating.rate >= 4 ? (
                <Typography
                  sx={{
                    border: "1px #E0E0E0 solid",
                    borderRadius: "50px",
                    padding: "5px 24px",
                    position: "absolute",
                    right: { xs: "10px", md: "18px" },
                    top: { xs: 0, md: "118px" },
                    fontSize: "14px",
                    fontWeight: 500,
                    textTransform: "capitalize",
                  }}
                >
                  Highly Rated
                </Typography>
              ) : null}
              <Box sx={{ margin: { xs: "60px 1rem 1rem 1rem" } }}>
                <img
                  src={product?.image}
                  alt={product?.description}
                  style={{
                    width: "100%",
                    maxWidth: "350px",
                  }}
                />
              </Box>
            </Stack>

            <Stack
              sx={{
                backgroundColor: "#F4F4F4",
                height: "100vh",
                justifyContent: { md: "center" },
                alignItems: "center",
              }}
              flex="1"
              p={{ xs: "1rem", md: "2rem" }}
            >
              <Box sx={{ maxWidth: "500px" }}>
                <Typography
                  variant="h2"
                  sx={{ fontSize: "32px", fontWeight: 500 }}
                  m="0 0 4rem 0"
                >
                  {product?.title}
                </Typography>
                <Box sx={{ marginTop: "1rem" }}>
                  <FormControl fullWidth>
                    <InputLabel id="select-label">SELECT SIZE</InputLabel>
                    <Select
                      labelId="select-label"
                      id="select"
                      value={size}
                      label="SELECT SIZE"
                      onChange={(e) => setSize(e.target.value)}
                      // sx={{ backgroundColor: "#FFFFFF" }}
                    >
                      <MenuItem value={"small"}>SMALL</MenuItem>
                      <MenuItem value={"medium"}>MEDIUM</MenuItem>
                      <MenuItem value={"large"}>LARGE</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "black",
                    marginTop: "1rem",
                    width: "100%",
                    height: "60.47px",
                  }}
                  onClick={handleClick}
                >
                  ADD TO BAG
                </Button>

                <Box sx={{ marginTop: "4rem" }}>
                  <Accordion
                    sx={{
                      backgroundColor: "#F4F4F4",
                      boxShadow: "none",
                    }}
                    disableGutters
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      DESCRIPTION
                    </AccordionSummary>
                    <AccordionDetails sx={{ fontSize: "14px" }}>
                      {product?.description}
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    disableGutters
                    sx={{ backgroundColor: "#F4F4F4", boxShadow: "none" }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2-content"
                      id="panel2-header"
                    >
                      PRODUCT RATING
                    </AccordionSummary>
                    <AccordionDetails sx={{ fontSize: "14px" }}>
                      <Rating
                        name="rating"
                        value={product?.rating.rate}
                        readOnly
                        precision={0.5}
                        sx={{ color: "black", height: "100%" }}
                        emptyIcon={
                          <StarIcon
                            style={{ opacity: 0.55 }}
                            fontSize="inherit"
                          />
                        }
                      />
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    disableGutters
                    sx={{ backgroundColor: "#F4F4F4", boxShadow: "none" }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel3-content"
                      id="panel3-header"
                    >
                      DELIVERY OPTIONS
                    </AccordionSummary>
                    <AccordionDetails sx={{ fontSize: "14px" }}>
                      WIP
                    </AccordionDetails>
                  </Accordion>
                </Box>
              </Box>
            </Stack>
          </Stack>
        )}
      </Box>
    </Layout>
  );
};

export default Product;
