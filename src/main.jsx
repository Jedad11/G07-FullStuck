import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePageLogin from "./pages/HomePageLogin";
import Condo from "./pages/Condo";
import Apartment from "./pages/Apartment";
import Contact from "./pages/Contact";
import NavBar from "./component/NavBar";
import "./index.css";
import Footer from "./component/Footer";
import Layout from "./layouts/Layout";
import SignIn from "./component/SigninPopup";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Layout หลักที่มี Navbar + Footer
    children: [
      { index: true, element: <HomePageLogin /> },
      {
        path: "/condo",
        element: <Condo />,
      },
      {
        path: "/apartment",
        element: <Apartment />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path:"/signin",
        element:<SignIn/>
      },
    ],
  },
  // {
  //   path: '/',
  //   element: <App/>,
  //   children: [
  //     {
  //       path: '/home',
  //       element: <HomePageLogin/>
  //     },
  //     {
  //       path: '/condo',
  //       element: <Condo/>
  //     },
  //     {
  //       path: '/apartment',
  //       element: <Apartment/>
  //     },
  //     {
  //       path: '/contact',
  //       element: <Contact/>
  //     },
  //   ],
  // },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);