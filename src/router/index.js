import { createBrowserRouter } from "react-router-dom";
import { Outlet } from "react-router-dom";
import ErrorPage from "../pages/error";
import MainNav from "../components/mainNav";
import HomePage from "../pages/homePage";
import Blog from "../pages/blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <> <MainNav /><Outlet /></>,
    // <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage/>,
      },
      {
        path: "/blog",
        element: <Blog/>,
      }
    ]
  }
]);

export default router