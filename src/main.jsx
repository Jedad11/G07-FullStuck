import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePageLogin from "./pages/HomePageLogin";
import Condo from "./pages/Condo";
import Apartment from "./pages/Apartment";
import Contact from "./pages/Contact";
// import ResidentDetail from "./pages/ResidentDetail";
import NavBar from "./component/NavBar";
import "./index.css";
import SignIn from "./component/SigninPopup";
import Writereview from "./pages/Writereview";
import { ThemeProvider } from "@material-tailwind/react";

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
        path: "/ResidentDetail",
        element: <ResidentDetail />,
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
      {
        path:"/signin",
        element:<SignIn/>
      },
    ],
  },
  {
    path: "/review",
    element: <Writereview/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
    <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);