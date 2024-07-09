import Stack from "@mui/material/Stack";
import Navbar from "../Navbar/Navbar";
import {
  Button,
  Collapse,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { useEffect, useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import axios from "axios";

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

const Product = () => {
  const [descriptionOpen, setDescriptionOpen] = useState(true);
  const [ratingOpen, setRatingOpen] = useState(true);
  const [deliveryOpen, setDeliveryOpen] = useState(true);
  const [product, setProduct] = useState<Product | undefined>();

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data));
  }, [id]);

  return (
    <Box p={1}>
      <Navbar />
      <Stack sx={{ marginTop: "6rem", width: "80vw", margin: "0 auto" }}>
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
          >
            ADD TO BAG
          </Button>

          <List
            sx={{
              width: "100%",
              bgcolor: "background.paper",
              marginTop: "2rem",
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton
              onClick={() => setDescriptionOpen(!descriptionOpen)}
            >
              <ListItemText primary="DESCRIPTION" />
              {descriptionOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={descriptionOpen} timeout="auto" unmountOnExit>
              <Typography>product's description</Typography>
            </Collapse>
            <Divider />

            <ListItemButton onClick={() => setRatingOpen(!ratingOpen)}>
              <ListItemText primary="PRODUCT RATING" />
              {ratingOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={ratingOpen} timeout="auto" unmountOnExit>
              <Typography>product's rating</Typography>
            </Collapse>
            <Divider />

            <ListItemButton onClick={() => setDeliveryOpen(!deliveryOpen)}>
              <ListItemText primary="DELIVERY OPTIONS" />
              {deliveryOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={deliveryOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Collect from the store" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="delivery to home" />
                </ListItemButton>
              </List>
            </Collapse>
            <Divider />
          </List>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Product;
