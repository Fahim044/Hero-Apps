import { createBrowserRouter } from "react-router";
import Root from "./Components/Root";
import ErrorPage from "./Components/ErrorPage";
import Home from "./Components/Home";
import Apps from "./Components/Apps";
import Installation from "./Components/Installation";

export const router=createBrowserRouter([
    {
        path:"/",
        Component:Root,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                index:true,
                path:"/",
                Component:Home
            },
            {
                path:"/home",
                Component:Home
            },
            {
                path:"/apps",
                Component:Apps
            },
            {
                path:"/installation",
                Component:Installation
            }
        ]
    }
])