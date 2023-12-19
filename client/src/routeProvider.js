import {
    createBrowserRouter,
  } from "react-router-dom";
import Landing from "./components/Landing";
import RootLayout from "./components/RootLayout";
import { Dashboard } from "./components/Dashboard";
import BlogNew from "./components/blogs/BlogNew";
  const router = createBrowserRouter(
   [     
    {
    path: "/",
    element: <RootLayout/>,
    children:[
    {
        path: "/blogs",
        element: <Dashboard/>
    },
    {
        path: "/blogs/new",
        element: <BlogNew/>
    },
    {
        path: "/",
        element: <Landing/>
    }
    ]
    },
]
  ) 

export default router;