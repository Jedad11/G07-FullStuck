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
  const [user, setUsers] = useState([]);

  async function handleFetchUsersData() {
    try {
      const response = await userAPI.getAllUsers();
      console.log("Fetched response:", response);

      setUsers(Array.isArray(response.data) ? response.data : []);
    } catch (e) {
      console.error("Fetch error:", e.message);
    }
  }

  useEffect(() => {
    handleFetchUsersData();
  }, []);

  useEffect(() => {
    console.log("Updated user state:", user);
  }, [user]);


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