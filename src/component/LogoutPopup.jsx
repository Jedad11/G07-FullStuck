import React from "react";
import { NavLink } from "react-router";

const LogoutPopup = ({ isOpen }) => {
  return (
    <div className="flex justify-center items-center fixed inset-0 blackdrop-blur-md bg-[rgba(128,128,128,0.25)] mx-auto">
      <div className="fixed bg-white p-10 rounded-lg shadow-lg max-w-7xl mx-auto">
        <p className="text-[40px] flex justify-center items-center gap-">
          Are you sure?
        </p>
        <p className="text-[20px]">
          You will need to login again to access your account
        </p>
        <div className="flex flex-col space-y-1 mt-4">
          <NavLink to="/" className="mx-auto">
            <div className="flex justify-center gap-4">
              <button
                
                className="bg-[#362518] hover:bg-[#3a2b21] text-white font-semibold py-2 px-6 rounded-md"
              >
                Log out
              </button>
              <button
                
                className="border border-gray-400 text-gray-700 hover:bg-gray-100 font-semibold py-2 px-6 rounded-md"
              >
                Cancel
              </button>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LogoutPopup;
