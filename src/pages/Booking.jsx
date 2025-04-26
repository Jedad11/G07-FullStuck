import ResidentBox from "../component/ResDetailPage/ResidentBox";
import DetailsBox from "../component/ResDetailPage/DetailsBox";
import BookingDate from "../component/ResDetailPage/BookingDate";
import PaymentBox from "../component/ResDetailPage/PaymentBox";

const Booking = () => {
    return (
        <div className="m-[30px] md:m-[100px] text-[#362518]">
            <h1 className="flex justify-center font-semibold text-[48px] mb-[100px]">Booking Information</h1>
            <div className="flex flex-col lg:flex-row lg:justify-center lg:items-start lg:space-x-12 ">
                <div className="w-full lg:max-w-[600px] mb-5">
                    <DetailsBox/>
                </div>
                <div className="flex flex-col space-y-6 w-full lg:max-w-[400px]">
                    <ResidentBox />
                    <BookingDate />
                    <PaymentBox />
                </div>
            </div>
        </div>
    );
};
export default Booking;
