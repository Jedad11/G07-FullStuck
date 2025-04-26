const PaymentBox = () => {
    return (
        <div>
            <div className=" w-[359px] h-[230px] rounded-lg bg-[#F3EAD3] px-[30px] space-y-[10px] py-1.5">
                <h1 className="font-semibold text-[16px] mt-[20px]">Your Price Summary</h1>
                <div className="grid grid-cols-2">
                    <div className="flex-col space-y-1 font-normal text-[13px]">
                        <p>Room Rental</p>
                        <p>Water</p>
                        <p>Electricity</p>
                        <p>Furniture</p>
                        <h1 className="font-semibold text-xl mt-[10px] sm:text-2xl text-[#362518] mb-2 sm:mb-0">Total</h1>
                    </div>
                    <div className="flex-col text-right space-y-1 font-normal text-[13px]">
                        <p>2,600 THB</p>
                        <p>100.00 THB</p>
                        <p>100.00 THB</p>
                        <p>1,700 THB</p>
                        <p className="font-semibold text-xl mt-[10px] sm:text-2xl text-[#362518] ">THB4,500</p>
                        <p className="text-xs text-[#362518]">Includes taxes and fees</p>
                    </div>
                </div>    
            </div>
        </div>
    );
};
export default PaymentBox;