import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/layouts/RootLayout";

import Home from "../pages/Index";
import About from "../pages/About";
import IDBlog from "../pages/blogs/_id";
import Blog from "../pages/blogs";
import { posts } from "../apis/loader";
import { postById } from "../apis/loader";
import ErrorPage from "../components/404Page"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement:<ErrorPage />,
    children: [ 
      {
        path:"/",
        element: <Home />,
      },
      {
        path:"/about",
        element: <About />,
      },
      {
        path:"/blog",
        element: <Blog />,
        loader: posts,
      },
      {
        path:"/blog/:id",
        element: <IDBlog />,
        loader: postById,
      },
    ],
  },
]);
