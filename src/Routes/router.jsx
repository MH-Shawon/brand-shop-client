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
        path:'/details/:id',
        element:<ProductDetails></ProductDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/details/${params.id}`)
      },
      {
        path:'/ourstory',
        element:<Story />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '//signUp',
        element: <SignUp />
      }
    ],
  },
]);

export default router;
