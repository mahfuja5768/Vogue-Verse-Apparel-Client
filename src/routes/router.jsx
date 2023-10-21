import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import AddProduct from "../pages/AddProduct";
import MyCart from "../pages/MyCart";
import UpdateProduct from "../pages/UpdateProduct";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ShowProducts from "../pages/ShowProducts";
import ProductDetails from "../pages/ProductDetails";
import PrivateRoute from "./PrivateRoute";
import Faq from "../pages/Faq";
import Brands from "../components/Brands";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      // {
      //   path: "/brands",
      //   element: <Brands></Brands>,
      // },
      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/myCart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
      },
      {
        path: "/productDetails/:id",
        loader: ({ params }) =>
          fetch(
            `https://vogue-verse-apparel-server-abtkz7sg9-mahfuja5768.vercel.app/brandsProduct/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateProduct/:id",
        loader: ({ params }) =>
          fetch(
            `https://vogue-verse-apparel-server-abtkz7sg9-mahfuja5768.vercel.app/single-product/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/showProducts/:brandName",
        loader: ({ params }) =>
          fetch(
            `https://vogue-verse-apparel-server-abtkz7sg9-mahfuja5768.vercel.app/brandsProduct/${params.brandName}`
          ),
        element: <ShowProducts></ShowProducts>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
