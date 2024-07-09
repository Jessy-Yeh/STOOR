import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Filter from "./components/Filter/Filter";

import Stack from "@mui/material/Stack";
import Banner from "./components/Banner/Banner";

function App() {
  return (
    <Stack sx={{ marginTop: "110px", padding: "1rem" }}>
      <Navbar />
      <Filter />
      <Banner />
      <Home />
    </Stack>
  );
}

export default App;
