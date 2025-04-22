import React, { useState } from "react";

const Sort = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectSort, setSort] = useState("Lastest update");

    const checkSelect = (type) => {
        setSort(type);
        setIsOpen(false);
    }

    return (
        <div className="flex items-center mb-2 relative gap-2 justify-end mr-10">
            <div>
                <p className="whitespace-nowrap">Sort by</p>
            </div>
            <div>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="border border-gray-300 p-2 pl-4 rounded-lg w-[343px] text-left"
                >
                    {selectSort}
                </button>

                {isOpen && (
                    <div className="absolute top-full mt-1 w-[343px] bg-white rounded-lg shadow-md z-10">
                        <ul className="border border-gray-300 p-2 pl-4 rounded-lg space-y-1">
                            <li className="cursor-pointer hover:bg-gray-100" onClick={() => checkSelect("Lastest update")}>
                                Lastest update
                            </li>
                            <li className="cursor-pointer hover:bg-gray-100" onClick={() => checkSelect("Highest price")}>
                                Highest price
                            </li>
                            <li className="cursor-pointer hover:bg-gray-100" onClick={() => checkSelect("Lowest price")}>
                                Lowest price
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Sort;
