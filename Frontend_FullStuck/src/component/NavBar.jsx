import React, { useContext } from "react";
import Logo from "../image/logorestrent.png";
import { IoIosMenu } from "react-icons/io";
import ResponsiveMenu from "./ResponsiveMenu";
import { NavLink, Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import SignIn from "./SigninPopup";
import Signup from "./SignupPopup";
import { ThemeContext } from "../contexts/auth";
import { FaUserCircle } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import LogoutPopup from "./LogoutPopup.jsx";
import { useNavigate } from "react-router-dom";
import * as userAPI from "../api/userAPI"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CircleUser } from "lucide-react";

const NavBar = () => {
  const [open, setOpen] = React.useState(false);
  const [isSignInOpen, setSignInOpen] = useState(false);
  const [isSignUpOpen, setSignUpOpen] = useState(false);
  const { isAuth, unAuth } = useContext(ThemeContext);
  const [isLogOutOpen, setLogOutOpen] = useState(false);
  const token = localStorage.getItem("token");
  const payload = parseJwt(token);
  const userId = payload ? payload.userId : null;
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  function parseJwt(token) {
    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
      return null;
    }
  }

  const handleLogout = () => {
    unAuth();
    setLogOutOpen(false); // Close Popup
    navigate("/"); // Back to HomePage
  };

  const handleFetchUserData = async () => {
    try {
      const response = await userAPI.getUserById(userId);
      setUser(response.data);
    } catch (error) {
      console.error("Error loading user data:", error);
    }
  }

  useEffect(() => {
    if (isAuth) {
      handleFetchUserData();
    } else {
      setUser(null); 
    }
  }, [isAuth]);


  const Menus = ["Account Setting", "Logout"];

  return (
    <>
      <div className="bg-[#362518] font-Inter py-4 px-6">
        <div className="flex w-full max-w-7xl justify-between items-center mx-auto ">
          <NavLink to="/">
            <div className="flex items-center space-x-0">
              <img
                src={Logo}
                alt="restrent logo"
                className="w-25 h-25 object-contain"
              />
              <h1 className="w-14 font-bold text-white text-2xl">
                Rest
                <br />
                Rent
              </h1>
            </div>
          </NavLink>

          {/* Mobile Menu */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <IoIosMenu className="text-5xl cursor-pointer text-white" />
          </div>

          <div className="hidden md:flex space-x-6 text-lg items-center justify-center gap-2 font-medium text-gray-100">
            <NavLink
              to="/"
              className=" hover:text-white hover:border-b-2 border-[#ffedd5] cursor-pointer transition-all"
            >
              Home
            </NavLink>

            <NavLink
              to="/condo"
              className=" hover:text-white hover:border-b-2 border-[#ffedd5] cursor-pointer transition-all"
            >
              Condo
            </NavLink>

            <NavLink
              to="/apartment"
              className=" hover:text-white hover:border-b-2 border-[#ffedd5] cursor-pointer transition-all"
            >
              Apartment
            </NavLink>

            {isAuth ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="rounded-full hidden md:flex p-0 overflow-hidden"
                  >
                    {user?.profilePicture ? (
                      <img
                        src={user.profilePicture}
                        alt={`${user.firstName} ${user.lastName}`}
                        className="h-8 w-8 rounded-full object-cover"
                      />
                    ) : (
                      <CircleUser className="h-5 w-5" />
                    )}
                    <span className="sr-only">Toggle user menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>
                    {user ? `${user.firstName} ${user.lastName}` : 'My Account'}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />

                  <Link to="/mock">
                    <DropdownMenuItem>Account setting</DropdownMenuItem>
                  </Link>

                  <DropdownMenuItem onClick={() => setLogOutOpen(true)}>
                    Log out
                  </DropdownMenuItem>

                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="relative hidden md:flex space-x-3">
                <button
                  className="SIGN_IN bg-white text-black py-2 px-4 rounded-lg hover:bg-gray-200"
                  onClick={() => setSignInOpen(true)}
                >
                  Sign In
                </button>
                <button
                  className="SIGN_UP bg-transparent border-2 border-white text-white py-2 px-4 rounded-lg hover:bg-[#ffedd5] hover:text-black"
                  onClick={() => setSignUpOpen(true)}
                >
                  Sign up
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu
        open={open}
        openSignIn={() => setSignInOpen(true)}
        openSignUp={() => setSignUpOpen(true)}
        onClose={() => setOpen(false)}
      />

      <SignIn
        isOpen={isSignInOpen}
        onClose={() => setSignInOpen(false)}
        openSignUp={() => setSignUpOpen(true)}
      />
      <Signup
        isOpen={isSignUpOpen}
        onClose={() => setSignUpOpen(false)}
        openSignIn={() => setSignInOpen(true)}
      />
      <LogoutPopup
        isOpen={isLogOutOpen}
        onClose={() => setLogOutOpen(false)}
        onConfirmLogout={handleLogout}
      />
    </>
  );
};

export default NavBar;