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
import { useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const Product = () => {
  const [descriptionOpen, setDescriptionOpen] = useState(true);
  const [ratingOpen, setRatingOpen] = useState(true);
  const [deliveryOpen, setDeliveryOpen] = useState(true);

  return (
    <Box p={1}>
      <Navbar />
      <Stack sx={{ marginTop: "6rem" }}>
        <img />
        <Stack>
          <Typography variant="h2" sx={{ fontSize: "32px" }}>
            Product Name
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
