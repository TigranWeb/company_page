import { createBrowserRouter } from "react-router-dom";
// import { homeRoute } from "./homeRoute";
import HomePage from "../pages/homePage";
import ErrorPage from "../pages/error";
import MainNav from "../components/mainNav";
import { Outlet } from "react-router-dom";
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
      }
    ]
  }
]);

export default router