import React from "react";

const IsLoginPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="flex justify-center items-center fixed inset-0 backdrop-blur-sm bg-[rgba(0,0,0,0.3)] z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
        <p className="text-2xl font-semibold text-center mb-6 text-[#362518]">
          Please log in to continue using this feature.
        </p>

        <div className="flex justify-center space-x-4">
          <button
            onClick={onClose}
            className="bg-[#362518] text-white px-4 py-2 rounded hover:bg-[#554539] cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default IsLoginPopup;
