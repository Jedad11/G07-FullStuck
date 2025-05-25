import { useState, useEffect } from "react";

import NavBar from "./component/NavBar";
import HomePageLogin from "./pages/HomePageLogin";
import Condo from "./pages/Condo";
import Apartment from "./pages/Apartment";
import Contact from "./pages/Contact";
import Footer from "./component/Footer";
import { Outlet } from "react-router-dom";
import NavBarLogin from "./component/NavbarLogin";
import * as userAPI from './api/userAPI'


function App() {
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