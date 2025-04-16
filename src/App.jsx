import { useState } from "react";

import NavBar from "./component/NavBar";
import HomePageLogin from "./pages/HomePageLogin";
import Condo from "./pages/Condo";
import Apartment from "./pages/Apartment";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";
import Footer from "./component/Footer";
import { Outlet } from "react-router-dom";
import NavBarLogin from "./component/NavbarLogin";


function App({onLogIn}) {


  return (
    <div>
        <NavBar />
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </div>
  );
}

export default App;