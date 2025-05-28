import React from "react";
import { NavLink } from "react-router-dom";

const IsLoginPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="flex justify-center items-center fixed inset-0 backdrop-blur-sm bg-[rgba(0,0,0,0.3)] z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
        <p className="text-2xl font-semibold text-center mb-6">
          You have to login to use this feature
        </p>

        <div className="flex justify-center space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
          >
            Close
          </button>
          <NavLink to="/">
            <button className="bg-[#362518] text-white px-4 py-2 rounded hover:bg-[#554539]">
              Back to Home
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default IsLoginPopup;
