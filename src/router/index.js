import { createBrowserRouter } from "react-router-dom";
import { Outlet } from "react-router-dom";
import ErrorPage from "../pages/error";
import MainNav from "../components/mainNav";
import HomePage from "../pages/homePage";
import Blog from "../pages/blog";
import Article from "../pages/article";
import FoolPageLoader from "../pages/loader";

function getBlogs() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["articles"])
    }, 2000)
  })
}

export async function loader() {
  console.log("loader....")
  const contacts = await getBlogs();
  return { contacts };
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <> <MainNav /><Outlet /></>,
    errorElement: <ErrorPage />,
    loader: loader,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:articleId",
        element: <Article />,
      }
    ]
  }
]);

export default router