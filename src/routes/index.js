import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./defaultLayout";
import Home from "../module/home";
import Product from "../module/product";
import Errorpage from "../errorpage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/product",
                element: <Product />
            }
        ]
    },
    {
        path: "*",
        element: <Errorpage/>
    }
])

export default router