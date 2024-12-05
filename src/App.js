import "./index.css";

import { RouterProvider } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";
import { router } from "./navigations/navigation";
import Navigations from "./navigations/navigation";

// export const router = createBrowserRouter([
//   {
//     path: "/about",
//     element: <About />,
//   },

//   {
//     path: "/blog",
//     element: <Blog />,
//   },
//   {
//     path: "/home",
//     element: <Home />,
//   },
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/addStudent",
//     element: <AddStudent />,
//   },
// ]);

// Main Export
export default function App() {
  return (
    <>
      {/* <Header /> */}
      <h1> I am data</h1>
      <RouterProvider router={router} />;{/* <Footer /> */}
    </>
  );
}
