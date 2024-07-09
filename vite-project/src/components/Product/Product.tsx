import Stack from "@mui/material/Stack";
import Navbar from "../Navbar/Navbar";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ProductType } from "../../types";

const Product = () => {
  const [product, setProduct] = useState<ProductType | undefined>();
  const [bagMsg, setBagMsg] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data));
  }, [id]);

  const handleClick = () => {
    const reqBody = { products: [{ productId: id, quantity: 1 }] };
    axios.post("https://fakestoreapi.com/carts", reqBody).then((res) => {
      console.log(res.data);
      setBagMsg(true);
    });
  };

  return (
    <Box>
      <Navbar />
      {bagMsg && (
        <Stack
          sx={{
            backgroundColor: "#6FCF97",
            marginTop: "98px",
            padding: "1rem",
          }}
          alignItems="center"
        >
          <Typography>
            Thank you, product name has been added to your bag!
          </Typography>
        </Stack>
      )}
      <Stack sx={{ margin: "1rem" }}>
        <img
          src={product?.image}
          alt={product?.description}
          style={{ width: "100%" }}
        />
        <Stack sx={{ backgroundColor: "#F4F4F4" }}>
          <Typography variant="h2" sx={{ fontSize: "32px" }}>
            {product?.title}
          </Typography>
          <Box sx={{ marginTop: "1rem" }}>
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                SELECT SIZE
              </InputLabel>
              <NativeSelect
                defaultValue={30}
                inputProps={{
                  name: "SELECT SIZE",
                  id: "uncontrolled-native",
                }}
              >
                <option value={"small"}>SMALL</option>
                <option value={"medium"}>MEDIUM</option>
                <option value={"large"}>LARGE</option>
              </NativeSelect>
            </FormControl>
          </Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "black",
              marginTop: "1rem",
              width: "100%",
            }}
            onClick={handleClick}
          >
            ADD TO BAG
          </Button>

          <div>
            <Accordion sx={{ backgroundColor: "#F4F4F4" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                DESCRIPTION
              </AccordionSummary>
              <AccordionDetails>{product?.description}</AccordionDetails>
            </Accordion>
            <Accordion sx={{ backgroundColor: "#F4F4F4" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                PRODUCT RATING
              </AccordionSummary>
              <AccordionDetails>{product?.rating.rate}</AccordionDetails>
            </Accordion>
            <Accordion sx={{ backgroundColor: "#F4F4F4" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                DELIVERY OPTIONS
              </AccordionSummary>
              <AccordionDetails>WIP</AccordionDetails>
            </Accordion>
          </div>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Product;
