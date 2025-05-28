import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "@/contexts/auth";
import IsLoginPopup from "../isLoginPopup";

const ReviewButton = ({id}) => {
    const { isAuth } = useContext(ThemeContext);
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        if (isAuth) {
            navigate(`/review/${id}`);
        } else {
            setShowPopup(true);
        }
    };

    return (
        <>
            <button
                onClick={handleClick}
                className="w-[225px] h-[40px] text-[20px] md:w-[318px] md:h-[53px] md:text-[24px] lg:w-[230px] lg:h-[72px] lg:text-[24px] rounded-lg bg-[#362518] text-white 
            flex items-center justify-center font-normal hover:bg-emerald-600 mt-[90px] cursor-pointer"
            >
                Write Review
            </button>

            <IsLoginPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
        </>
    );
};

export default ReviewButton;
