import ResidentBox from "../component/ResDetailPage/ResidentBox";
import DetailsBox from "../component/ResDetailPage/DetailsBox";
import BookingDate from "../component/ResDetailPage/BookingDate";
import PaymentBox from "../component/ResDetailPage/PaymentBox";

const Booking = () => {
    return (
        <div className="m-[30px] md:m-[100px] text-[#362518]">
            <h1 className="flex justify-center font-semibold text-[48px] mb-[100px] ">Booking Information</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:space-x-4">
                <div>
                    <DetailsBox/>
                </div>
                <div className="flex justify-center lg:justify-end">
                    <div className="flex-col w-full lg:w-auto">
                        <ResidentBox/>
                        <BookingDate/>
                        <PaymentBox/>
                    </div>
                </div>
            </div>
        </div>
        
    );
};
export default Booking;