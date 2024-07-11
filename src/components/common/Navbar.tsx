import { styled, useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const drawerWidth = 200;

export interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const menuItemsData = [
  { to: "/", caption: "Home" },
  { to: "/t-shirts", caption: "T-shirts" },
  { to: "/jeans", caption: "Jeans" },
  { to: "/shoes", caption: "Shoes" },
];

const Navbar = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const menuItems = menuItemsData.map((item) => {
    return (
      <ListItem
        key={item.caption}
        sx={{ color: "black", whiteSpace: "nowrap" }}
      >
        <ListItemButton component={NavLink} to={`${item.to}`}>
          <ListItemText
            primary={item.caption}
            sx={{ textTransform: "uppercase" }}
          />
        </ListItemButton>
      </ListItem>
    );
  });

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar
          sx={{
            height: "97.1px",
            backgroundColor: "#F9F7F7",
            color: "#000000",
            display: "flex",
          }}
        >
          {!isLargeScreen && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
          )}

          <Stack
            flexGrow={1}
            direction="row"
            alignItems="center"
            justifyContent={isLargeScreen ? "space-between" : "flex-end"}
            sx={{ maxWidth: "2000px", margin: "0 auto" }}
          >
            {isLargeScreen && (
              <List
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {menuItems}
              </List>
            )}

            <Typography
              variant="h1"
              noWrap
              sx={{
                fontSize: "20px",
                fontWeight: 500,
                textAlign: "center",
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <NavLink
                to="/"
                style={{ color: "black", textDecoration: "none" }}
              >
                STOOR
              </NavLink>
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <ListItem
                key="cart"
                component={NavLink}
                to="/cart"
                sx={{ color: "black", padding: 0 }}
              >
                <ListItemButton>
                  <ShoppingCartIcon sx={{ fontSize: "1.7rem" }} />
                </ListItemButton>
              </ListItem>
            </Box>
          </Stack>
        </Toolbar>
      </AppBar>

      {!isLargeScreen && (
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>{menuItems}</List>
        </Drawer>
      )}
    </Box>
  );
};

export default Navbar;
