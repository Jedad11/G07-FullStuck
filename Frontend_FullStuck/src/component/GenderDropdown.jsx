import React from "react";
import { useState } from "react";

const GenderDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectGender, setGender] = useState("Select Gender");

    const checkSelect = (gender) =>{
        setGender(gender);
        setIsOpen(false);
    }

    return(
        <div className="mb-2">
            <button onClick={() => setIsOpen(!isOpen)} className="border border-gray-300  p-2 pl-4 rounded-lg w-full text-left">
                {selectGender}
            </button>

            {isOpen && (
                <div>
                    <ul className="border border-gray-300 mb-2 p-2 pl-4 rounded-lg">
                        <li onClick={() => checkSelect("Male")}>
                            Male
                        </li>
                        <li onClick={() => checkSelect("Female")}>
                            Female
                        </li>
                        <li onClick={() => checkSelect("LGBTQA+")}>
                            LGBTQA+
                        </li>
                        <li onClick={() => checkSelect("Not Specify")}>
                            Not Specify
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default GenderDropdown;