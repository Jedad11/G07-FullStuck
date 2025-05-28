import React from "react";
import { NavLink } from "react-router";

function PopupReview({ isOpen, id }) {

  if (isOpen) {
    return (
    <div className="flex justify-center items-center fixed inset-0 blackdrop-blur-md bg-[rgba(128,128,128,0.25)] mx-auto">
      <div className="fixed bg-white p-10 rounded-lg shadow-lg max-w-7xl mx-auto">
        <p className="text-[30px]">Your review has been successful!</p>
        <div className="flex flex-col space-y-1 mt-4">
        
        <NavLink to={`/ResidentDetail/${id}`} className="mx-auto">
            <button className=" bg-[#362518] text-white px-4 py-2 rounded hover:bg-[#554539] mx-auto">
                Back
            </button>
        </NavLink>
        </div>
      </div>
    </div>
    );
  }
  return null;
}

export default PopupReview;