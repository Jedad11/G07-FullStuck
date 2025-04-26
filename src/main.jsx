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

import Writereview from "./pages/Writereview";
import { ThemeProvider } from "@material-tailwind/react";
import { ThemeProviderContext } from "./contexts/auth";
import AccountSetting from "./component/AccoutSetting";
import LogoutPopup from "./component/LogoutPopup"
import Recommend from "./pages/Recommend";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
        path: "/recommend",
        element:<Recommend/>
      }
      // {
      //   path:"/ResidentDetail",
      //   element: <ResidentDetail />,
      // },
    ],
  },
  // {
  //   path: "/signin",
  //   element: <SignIn />,
  // },
  {
    path: "/review",
    element: <Writereview/>
  },
  {
    path: "/mock",
    element: <AccountSetting/>
  },
  {
    path: "/logout",
    element: <LogoutPopup/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <ThemeProviderContext>
        <RouterProvider router={router} />
      </ThemeProviderContext>
    </ThemeProvider>
  </StrictMode>
);