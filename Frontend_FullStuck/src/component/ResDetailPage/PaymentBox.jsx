import React from "react";

const PaymentBox = ({ rentalPrice, serviceFee }) => {

    return (
        <div>
            <div className=" w-[359px] h-[230px] rounded-lg bg-[#F3EAD3] px-[30px] space-y-[10px] py-1.5">
                <h1 className="font-semibold text-[16px] mt-[20px]">Your Price Summary</h1>
                <div className="grid grid-cols-2">
                    <div className="flex-col space-y-1 font-normal text-[13px]">
                        <p>Room Rental</p>
                        <p>Water</p>
                        <p>Electricity</p>
                        <p>Service</p>
                        <h1 className="font-semibold text-xl mt-[10px] sm:text-2xl text-[#362518] mb-2 sm:mb-0">Total</h1>
                    </div>
                    <div className="flex-col text-right space-y-1 font-normal text-[13px]">
                        <p>{rentalPrice} THB</p>
                        <p>100 THB</p>
                        <p>100 THB</p>
                        <p>{serviceFee} THB</p>
                        <p className="font-semibold text-xl mt-[10px] sm:text-2xl text-[#362518] ">{rentalPrice + serviceFee + 200}THB</p>
                        <p className="text-xs text-[#362518]">Includes taxes and fees</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PaymentBox;