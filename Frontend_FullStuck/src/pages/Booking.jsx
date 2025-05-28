import ResidentBox from "../component/ResDetailPage/ResidentBox";
import DetailsBox from "../component/ResDetailPage/DetailsBox";
import BookingDate from "../component/ResDetailPage/BookingDate";
import PaymentBox from "../component/ResDetailPage/PaymentBox";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import * as residentAPI from "../api/residentAPI"

const Booking = () => {
    const { id } = useParams()
    const [resident, setResident] = useState(null)

    const handleFetchResidentData = async () => {
        try {
            const response = await residentAPI.getResidentById(id)
            setResident(response.data)
        } catch (error) {
            console.error("Error loading todos:", error);
        }
    }

    function parseJwt(token) {
        try {
            return JSON.parse(atob(token.split(".")[1]));
        } catch (e) {
            return null;
        }
    }

    const token = localStorage.getItem("token");
    const payload = parseJwt(token);
    const userId = payload ? payload.userId : null;
    

    useEffect(() => {
        handleFetchResidentData();
    }, []);
    return (
        <div className="m-[30px] md:m-[100px] text-[#362518]">
            <h1 className="flex justify-center font-semibold text-[48px] mb-[100px]">Booking Information</h1>
            <div className="flex flex-col lg:flex-row lg:justify-center lg:items-start lg:space-x-12 ">
                <div className="w-full lg:max-w-[600px] mb-5">
                    <DetailsBox userId={userId} residentId={id}/>
                </div>
                <div className="flex flex-col space-y-6 w-full lg:max-w-[400px]">
                    {resident && resident.info && (
                        <>
                            <ResidentBox
                                residentType={resident.info.residentType}
                                residentName={resident.residentName}
                                address={resident.address}
                            />
                            <BookingDate />
                            <PaymentBox rentalPrice={resident.info.rentalPrice} serviceFee={resident.info.serviceFee} />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
export default Booking;
