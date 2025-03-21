import React from "react";
import Logo from "../image/logorestrent.png";
import { IoIosMenu } from "react-icons/io";
import ResponsiveMenu from "./ResponsiveMenu";
import { NavLink, Link, Outlet } from "react-router-dom";
import SignIn from "./SigninPopup";

const NavBar = () => {
  const [open, setOpen] = React.useState(false);
  const [isPopupOpen ,setPopupOpen] = React.useState(false);
  return (
    <>
      <div className="bg-[#362518] font-Inter py-4 px-6">
        <div className="flex w-full max-w-7xl justify-between items-center mx-auto ">
          <NavLink to='/' >
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

          <div className="hidden md:flex space-x-6 text-lg items-center justify-center gap-2 font-medium text-stone-300">
            <NavLink to='/'
              className=" hover:text-white hover:border-b-2 border-[#ffedd5] cursor-pointer transition-all"
            >
              Home
            </NavLink>

            <NavLink to='/condo'
              className=" hover:text-white hover:border-b-2 border-[#ffedd5] cursor-pointer transition-all"
            >
              Condo
            </NavLink>

            <NavLink to='/apartment'
              className=" hover:text-white hover:border-b-2 border-[#ffedd5] cursor-pointer transition-all"
            >
              Apartment
            </NavLink>

            <NavLink to='/contact'
              className=" hover:text-white hover:border-b-2 border-[#ffedd5] cursor-pointer transition-all"
            >
              Contact
            </NavLink>

            <div className="relative hidden md:flex space-x-3">
              <button className="SIGN_IN bg-white text-black py-2 px-4 rounded-lg hover:bg-gray-200" 
              onClick={() => setPopupOpen(true)}>
                Sign In
              </button>
              <button className="SIGN_UP bg-transparent border-2 border-white text-white py-2 px-4 rounded-lg hover:bg-[#ffedd5] hover:text-black">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
      <ResponsiveMenu open={open} />
      <SignIn isOpen={isPopupOpen} onClose={() => setPopupOpen(false)} />
    </>
  );
};

export default NavBar;
