import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Components/Home/Home";
import Shop from "../Components/Shop/Shop";
import Login from "../Components/Pages/Login";
import SignUp from "../Components/Pages/SignUp";
import Error from "../Components/Pages/ErrorPage/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
        loader: () => fetch(`/products.json`)
      },
      {
        path:'/login',
        element:<Login />
      },
      {
        path:'//signUp',
        element:<SignUp />
      }
    ],
  },
]);

export default router;
