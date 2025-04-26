import React from "react";
import { NavLink } from "react-router-dom";


const Back = () => {
    return(
        <NavLink to='/' >
            <button className="border border-[#BCBEC0] text-[#747474] lg:text-[24px] md:text-[18px] font-medium pr-2 pl-2 pt-1 pb-1 m-2 cursor-pointer" >Go Back</button>
        </NavLink>
    )
}

export default Back;