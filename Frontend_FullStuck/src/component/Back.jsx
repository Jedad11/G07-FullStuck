import React from "react";
import { NavLink } from "react-router-dom";
import { IconArrowNarrowLeft } from "@tabler/icons-react";

const Back = () => {
  return (
    <NavLink to="/">
      <button
        className="flex items-center gap-1 sm:gap-2 mt-3 sm:mt-4 md:mt-[20px] mx-5
                   border border-[#BCBEC0] text-[#747474]
                   w-[130px] sm:w-[160px] md:w-[200px]
                   h-[40px] sm:h-[50px] md:h-[60px]
                   px-2 sm:px-3 md:px-4 py-1 md:py-2
                   rounded-md cursor-pointer hover:shadow-md transition"
      >
        <IconArrowNarrowLeft size={24} className="sm:hidden" stroke={1} />
        <IconArrowNarrowLeft size={28} className="hidden sm:block md:hidden" stroke={1} />
        <IconArrowNarrowLeft size={35} className="hidden md:block" stroke={1} />
        <span className="text-base sm:text-xl md:text-[24px]">Go Back</span>
      </button>
    </NavLink>
  );
};

export default Back;
