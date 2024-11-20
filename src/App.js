import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from "./blog/Blog";
import Home from "./home/Home";
import About from "./about/About";
import Footer from "./Footer";
import Header from "./Header";
import AddStudent from "./addStudent/AddStudent";

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
    path: "/addStudent",
    element: <AddStudent />,
  },
]);

// Main Export
export default function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />;
      <Footer />
    </>
  );
}
