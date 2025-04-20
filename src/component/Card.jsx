import React from "react";

const Card = () => {
    return (
        <div className="max-w-[1440px] mx-auto"> 
            <div className="flex bg-[#F3EAD3] ml-10 mr-10 mb-5 rounded-xl">
                <img src="src/image/room1.jpg" alt="room1" className="w-[311px] h-[203px] m-10 rounded-xl" />
                <div>
                    <p className="text-[32px] mt-2">Library Houze Pracha-Uthit</p>
                    <p className="text-[18px] mb-2 mt-2">Sawat-Pracha Uthit Soi Pracha Uthit 26/7, Bang Mot, Thung Khru, Bangkok 10140</p>
                    <div className="grid grid-cols-3">
                        <div>
                            <p className="text-[20px] font-bold mb-2 mt-2">Rental</p>
                            <p className="text-[20px]">8,500 THB/Month</p>
                        </div>
                        <div>
                            <p className="text-[20px] font-bold mb-2 mt-2">Unit type</p>
                            <p className="text-[20px]">1 Bedroom</p>
                        </div>
                        <div>
                            <p className="text-[20px] font-bold mb-2 mt-2">Floor</p>
                            <p className="text-[20px]">8th</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Card