import "./App.css";
import Box from "@mui/material/Box";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";

function App() {
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

  return (
    <Box>
      <Navbar open={hamburgerMenuOpen} setOpen={setHamburgerMenuOpen} />
    </Box>
  );
}

export default App;
