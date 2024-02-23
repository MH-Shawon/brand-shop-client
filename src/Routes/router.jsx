import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Components/Home/Home";

import Login from "../Components/Pages/Login";
import SignUp from "../Components/Pages/SignUp";
import Error from "../Components/Pages/ErrorPage/Error";
import Products from "../Components/Products/Products";
import Story from "../Components/Story/Story";
import Shop from "../Components/Shop/Shop";
import BrandProduct from "../Components/Brand/BrandCategory";
import ProductDetails from "../Components/Brand/Details/ProductDetails";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import MyCart from "../Components/MyCart/MyCart";
import AddToCart from "../Components/AddToCart/AddToCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/brandProducts/:brand",
        element: <BrandProduct />,
      },
      {
        path: "/productsDetails/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://brand-shop-server-opal-eight.vercel.app/products/${params.id}`),
      },
      {
        path: "/book/:id",
        element: (
          <PrivateRoute>
            <AddToCart />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://brand-shop-server-opal-eight.vercel.app/products/${params.id}`),
      },
      {
        path: "/ourstory",
        element: <Story />,
      },
      {
        path: "/mycart",
        element: <MyCart />,
        loader: () => { "https://brand-shop-server-opal-eight.vercel.app/bookings" }
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "//signUp",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
