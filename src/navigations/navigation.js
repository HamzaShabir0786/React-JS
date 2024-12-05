import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from "../blog/Blog";
import Home from "../home/Home";
import About from "../about/About";
import AddStudent from "../addStudent/AddStudent";

export const router = createBrowserRouter([
  {
    path: "/about",
    element: <About />,
  },

  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/addStudent",
    element: <AddStudent />,
  },
]);

export default function Navigations() {
  return (
    <>
      <h1> Navigations page </h1>
    </>
  );
}
