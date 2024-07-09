import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
// import Navbar from "./components/Navbar/Navbar";
// import Filter from "./components/Filter/Filter";
// import Banner from "./components/Banner/Banner";

// import Stack from "@mui/material/Stack";
import Checkout from "./components/Checkout/Checkout";
import Tshirts from "./components/T-shirts/Tshirts";
import Jeans from "./components/Jeans/Jeans";
import Shoes from "./components/Shoes/Shoes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "HOME",
    element: <Home />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "checkout",
    element: <Checkout />,
  },
  {
    path: "T-SHIRTS",
    element: <Tshirts />,
  },
  {
    path: "JEANS",
    element: <Jeans />,
  },
  {
    path: "SHOES",
    element: <Shoes />,
  },
]);

function App() {
  return (
    <>
      {" "}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
