import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Components/Home/Home";

import Login from "../Components/Pages/Login";
import SignUp from "../Components/Pages/SignUp";
import Error from "../Components/Pages/ErrorPage/Error";
import Products from "../Components/Products/Products";
import Shop from "../Components/Shop/Shop";
import BrandProduct from "../Components/Brand/BrandCategory";

import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AddToCart from "../Components/AddToCart/AddToCart";
import MyCart from "../Components/MyCart/MyCart";
import ProductDetails from "../Components/Brand/Details/ProductDetails";
import UpdateProd from "../Components/MyCart/Update/UpdateProd";
import Story from "../Components/Story/Story";

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
        loader: () => fetch('https://brand-shop-server-gamma-indol.vercel.app/products')
      },
      {
        path: "/productsDetails/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://brand-shop-server-gamma-indol.vercel.app/products/${params.id}`),
      },
      {
        path: "/book/:id",
        element: (
          <PrivateRoute>
            <AddToCart />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://brand-shop-server-gamma-indol.vercel.app/products/${params.id}`),
      },
      {
        path: "/ourstory",
        element: <Story />,
      },
      {
        path: "/myCart",
        element: <MyCart />,
        // loader: () => { "https://brand-shop-server-gamma-indol.vercel.app/bookings" }
        loader: () => fetch('https://brand-shop-server-gamma-indol.vercel.app/bookings')
      },
      {
        path: "/updateProd/:id",
        element: <UpdateProd />,
        loader: ({ params }) => fetch(`https://brand-shop-server-gamma-indol.vercel.app/bookings/${params.id}`)
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
