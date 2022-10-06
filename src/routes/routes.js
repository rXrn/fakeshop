import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Navigation from "../components/layout/Navigation";
import { Home } from "../components/pages/Home";
import { ProductDetail } from "../components/pages/ProductDetail";
import { Products } from "../components/pages/Products";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "home",
    element: (
      <Navigation>
        <Home />
      </Navigation>
    ),
  },
  {
    path: "products",
    element: (
      <Navigation>
        <Products />
      </Navigation>
    ),
    // children: [
    //   {
    //     path: "detail",
    //     element: (
    //       <Navigation>
    //         <ProductDetail />
    //       </Navigation>
    //     ),
    //   },
    // ],
  },
  {
    path: "products/detail",
    element: (
      <Navigation>
        <ProductDetail />
      </Navigation>
    ),
  },
]);
