import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import AddProduct from "../pages/AddProduct";
import MyCart from "../pages/MyCart";
import UpdateProduct from "../pages/UpdateProduct";
import Login from "../pages/Login";
import Register from "../pages/Register";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/addProduct',
                element:<AddProduct></AddProduct>
            },
            {
                path:'/myCart',
                element:<MyCart></MyCart>
            },
            {
                path:'/updateProduct',
                element:<UpdateProduct></UpdateProduct>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
        ]
    }
])

export default router;