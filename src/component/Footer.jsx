import React from "react";
import Logo from "../image/logorestrent.png";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-[#362518] text-white py-8 px-4">
      <div className="flex flex-wrap justify-between space-x-12">

        <div className="ซ้าย flex flex-col w-full lg:w-1/4">
          <div className="flex items-center mb-4">
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

          <div className="space-y-4 flex flex-col px-8 mb-4">
            {/* Address */}
            <div className="flex items-center">
              <HiOutlineLocationMarker className="mr-2" />
              <p>
                The 4th floor, the Office of the
                <br />
                President Building 126 PrachaUthit Rd.
                <br />
                Bang Mod, Thung Khru, Bangkok 10140, Thailand
              </p>
            </div>

            {/* Telephone */}
            <div className="flex items-center">
              <BsFillTelephoneFill className="mr-2" />
              <p>+66 2470 0039, +66 2470 8000</p>
            </div>

            {/* Email */}
            <div className="flex items-center">
              <IoMailOutline className="mr-2" />
              <p>contact@kmutt.ac.th</p>
            </div>
          </div>
        </div>

        <div className="QUICK_LINK mt-5">
          <h2 className="font-semibold text-lg mb-4">QuickLink</h2>
          <NavLink
            to="/"
            className=" hover:text-white hover:border-b-2 border-[#ffedd5] cursor-pointer transition-all"
          >
            Home
          </NavLink>
          <br />
          <NavLink
            to="/condo"
            className=" hover:text-white hover:border-b-2 border-[#ffedd5] cursor-pointer transition-all"
          >
            Condo
          </NavLink>
          <br />
          <NavLink
            to="/apartment"
            className=" hover:text-white hover:border-b-2 border-[#ffedd5] cursor-pointer transition-all"
          >
            Apartment
          </NavLink>
          <br />
          <NavLink
            to="/contact"
            className=" hover:text-white hover:border-b-2 border-[#ffedd5] cursor-pointer transition-all"
          >
            Contact
          </NavLink>
        </div>

        <div className="mt-5">
          <h2 className="font-semibold text-lg mb-4">Blog</h2>
          <ul className="space-y-2">
            <li>
              <NavLink to="/" className="hover:underline">
                About us
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:underline">
                Contact us
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="p-4 mt-2 ">
          <h2 className="font-semibold text-lg mb-4">Follow Us</h2>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/phernut_?igsh=Z2F5dWs2bzltNmxs&utm_source=qr">
              <FaFacebookSquare size={20} />
            </a>
            <a href="https://www.instagram.com/phernut_?igsh=Z2F5dWs2bzltNmxs&utm_source=qr">
              <FaInstagram size={20} />
            </a>
            <a href="https://www.instagram.com/phernut_?igsh=Z2F5dWs2bzltNmxs&utm_source=qr">
              <IoMdMail size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
