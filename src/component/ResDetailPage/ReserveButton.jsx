import { NavLink } from "react-router-dom";

const ReserveButton = () => (
    <NavLink to = "/booking">
        <button className="w-[225px] h-[40px] text-[20px] md:w-[318px] md:h-[53px] md:text-[24px]  lg:w-[230px] lg:h-[72px] lg:text-[24px] rounded-lg bg-[#362518] text-white 
            flex items-center justify-center font-normal hover:bg-emerald-600">
            Reserve
        </button>
    </NavLink>
);
export default ReserveButton;
