import { createBrowserRouter } from "react-router";
import Root from "./Components/Root";
import ErrorPage from "./Components/ErrorPage";
import Home from "./Components/Home";
import Apps from "./Components/Apps";
import Installation from "./Components/Installation";
import { Suspense } from "react";
import AppDetails from "./Components/AppDetails";

const appsPromise12=fetch("/appsData.json").then(res=>res.json());
const appsPromise8=fetch("/topApps.json").then(res=>res.json());
export const router=createBrowserRouter([
    {
        path:"/",
        Component:Root,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                index:true,
                path:"/",
                element:<Suspense  fallback={<div className='flex items-center justify-center'><span className="loading loading-dots loading-xl "></span></div>}>
                    <Home appsPromise8={appsPromise8}></Home>
                </Suspense>
            },
            {
            path:"/home",
            element:<Suspense  fallback={<div className='flex items-center justify-center'><span className="loading loading-dots loading-xl "></span></div>}>
                    <Home appsPromise8={appsPromise8}></Home>
                </Suspense>
            },
            {
                path:"/apps",
                element:<Suspense fallback={<div className='flex items-center justify-center'><span className="loading loading-dots loading-xl "></span></div>}>
                    <Apps appsPromise12={appsPromise12}></Apps>
                </Suspense>
            },
            {
                path:'/appDetails/:id',
                element:<Suspense fallback={<div className='flex items-center justify-center'><span className="loading loading-dots loading-xl "></span></div>}>
                    <AppDetails appsPromise12={appsPromise12}></AppDetails>
                </Suspense>
            },
            {
                path:"/installation",
                Component:Installation
            }
        ]
    }
])