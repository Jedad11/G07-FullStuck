import React, { useState } from "react";
import { IconChevronDown, IconAlignLeft, } from '@tabler/icons-react'

const Sort = ({ onSortChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectSort, setSort] = useState("Lastest update");

    const checkSelect = (type) => {
        setSort(type);
        setIsOpen(false);
        onSortChange(type);
    }
    return (
        <div className="flex items-center mb-2 relative gap-2 justify-end mr-10 md:mb-[55px]">
            <div className="flex">
                <IconAlignLeft />
                <p className="whitespace-nowrap font-medium md:px-2">Sort by</p>
            </div>
            <div>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex p-2 pl-4 rounded-lg text-left font-medium"
                >
                    {selectSort}
                    <IconChevronDown className="items-end pl-2" />
                </button>

                {isOpen && (
                    <div className="absolute top-full mt-1  bg-white rounded-lg shadow-md z-10">
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
