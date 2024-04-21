import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./defaultLayout";
import Home from "../module/home";
import Errorpage from "../errorpage";
import Authenticate from "../module/authenticate";
import Age from "../module/age";
import Product from "../module/product";
import Labresult from "../module/labresult";
import Contactus from "../module/contact";
import Order from "../module/order";
import Cart from "../module/cart";

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
                path: "/Product",
                element: <Product />
            },
            {
                path: "/Labresult",
                element: <Labresult />
            },
            {
                path: "/Contactus",
                element: <Contactus />
            }
        ]
    },

    {
        path: "*",
        element: <Errorpage />
    },
    {
        path: "/Authenticate",
        element: <Authenticate />
    },
    {
        path: "/age",
        element: <Age />
    },
    {
        path: "/Order",
        element: <Order />
    },
    {
        path: "/Cart",
        element: <Cart />
    }
])

export default router