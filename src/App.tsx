import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Home from "./components/Home/Home";

import Checkout from "./components/Product/Product";
import Tshirts from "./components/T-shirts/Tshirts";
import Jeans from "./components/Jeans/Jeans";
import Shoes from "./components/Shoes/Shoes";
import Product from "./components/Product/Product";
import Cart from "./components/Cart/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "product/:id",
    element: <Product />,
  },
  {
    path: "checkout",
    element: <Checkout />,
  },
  {
    path: "t-shirts",
    element: <Tshirts />,
  },
  {
    path: "jeans",
    element: <Jeans />,
  },
  {
    path: "shoes",
    element: <Shoes />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
