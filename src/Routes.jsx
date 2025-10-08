import { createBrowserRouter } from "react-router";
import Root from "./Components/Root";
import ErrorPage from "./Components/ErrorPage";

export const router=createBrowserRouter([
    {
        path:"/",
        Component:Root,
        errorElement:<ErrorPage></ErrorPage>
    }
])