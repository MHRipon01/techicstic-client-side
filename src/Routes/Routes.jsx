import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Errorpage from "../Pages/Errorpage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddProduct from "../Pages/AddProduct";
import MyCart from "../Pages/MyCart";
import BrandDetails from "../Pages/BrandDetails";
import PrivateRoute from "./PrivateRoute";
import ProductDetails from "../Pages/ProductDetails";
import UpdatePage from "../Pages/UpdatePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/product"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/add",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:brand",
        element: <BrandDetails></BrandDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.brand}`),
      },
      {
        path: "/productDetails/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/productDetails/${params.id}`),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            {" "}
            <UpdatePage></UpdatePage>{" "}
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/update/${params.id}`),
      },
      {
        path: "/cart/:email",
        element: (
          <PrivateRoute>
            {" "}
            <MyCart></MyCart>{" "}
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/cartedProduct/${params.email}`),
      },
    ],
  },
]);

export default router;
