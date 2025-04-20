import React from "react";
import { NavLink } from "react-router-dom";


const Back = () => {
    return(
        <NavLink to='/' >
            <button className="border border-[#BCBEC0] text-[#747474] pr-[28px] pl-[28px] pt-[16px] pb-[16px] m-2" >Go Back</button>
        </NavLink>
    )
}

export default Back;