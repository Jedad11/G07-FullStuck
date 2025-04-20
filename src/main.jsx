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
import SignIn from "./component/SigninPopup";
import Recommend from "./pages/Recommend";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
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
      {
        path:"/recommend",
        element:<Recommend/>
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);