import React from "react";
import { IconCashBanknote, IconBed, IconStairs } from '@tabler/icons-react'

const Card = ({ Name, Price, UnitType, Address, className = "" }) => {
    return (
        <div className={`xl:max-w-[1440px] mx-auto md:mb-[48px] px-[31px] ${className}`}>
            <div className="flex flex-col md:flex-row md:justify-center md:items-center bg-[#F3EAD3] xl:ml-10 xl:mr-10 mb-5 xl:rounded-xl items-center justify-center">
                <img src="src/image/room1.jpg" alt="room1" className="xl:w-[311px] md:w-[225px] w-[146px] xl:h-[203px] md:h-[147px] h-[95px] md:m-10 mt-10 rounded-xl" />
                <div className="text-left items-center w-full px-4 pb-4 md:pb-0">
                    <p className="xl:text-[32px] md:text-[24px] font-semibold mt-8 md:text-left text-center ">{Name}</p>
                    <p className="xl:text-[18px] md:text-[15px] mb-2 mt-2 ml-2">{Address}</p>

                    {/* Desktop View - Only visible on md and up */}
                    <div className="hidden md:grid md:grid-cols-2 gap-4 mx-auto mt-4">
                        <div>
                            <div className="flex items-center mb-2">
                                <IconCashBanknote className="mr-2 flex-shrink-0" />
                                <p className="xl:text-[20px] md:text-[16px] font-bold">Rental</p>
                            </div>
                            <p className="xl:text-[20px] md:text-[16px]">{Price} THB/Month</p>
                        </div>
                        <div>
                            <div className="flex items-center mb-2">
                                <IconBed className="mr-2 flex-shrink-0" />
                                <p className="xl:text-[20px] md:text-[16px] font-bold">Unit type</p>
                            </div>
                            <p className="xl:text-[20px] md:text-[16px]">{UnitType}</p>
                        </div>
                    </div>

                    {/* Mobile View - Only visible below md */}
                    <div className="md:hidden grid grid-cols-1 gap-2 mx-auto mt-4">
                        <div className="grid grid-cols-2">
                            <div className="flex items-center">
                                <IconCashBanknote className="mr-2 flex-shrink-0" />
                                <p className="text-[16px] font-bold">Rental</p>
                            </div>
                            <p className="text-[16px]">{Price} THB/Month</p>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="flex items-center">
                                <IconBed className="mr-2 flex-shrink-0" />
                                <p className="text-[16px] font-bold">Unit type</p>
                            </div>
                            <p className="text-[16px]">1 Bedroom</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;