import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./defaultLayout";
import Home from "../module/home";
import Product from "../module/age";
import Errorpage from "../errorpage";
import Authenticate from "../module/authenticate";
import Age from "../module/age";

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
                path: "/age",
                element: <Age />
            },
            {
                path: "/Authenticate",
                element: <Authenticate />
            },
            {
                path: "/Product",
                element: <Product />
            }
        ]
    },
    {
        path: "*",
        element: <Errorpage />
    }
])

export default router