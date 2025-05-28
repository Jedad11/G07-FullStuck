import { useState } from "react";
import * as bookingAPI from "../../api/bookingAPI";
import { useNavigate } from "react-router-dom";

const DetailsBox = ({ userId, residentId }) => {
    const [Room, setRoom] = useState(0);
    const [Bed, setBed] = useState(0);

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
    });

    const handleRoomClick = (select) => {
        setRoom(Room === select ? 0 : select);
    };

    const handleBedClick = (select) => {
        setBed(Bed === select ? 0 : select);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const bookingData = {
            userId: Number(userId),
            residentId: Number(residentId),
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phoneNumber: formData.phoneNumber,
            roomType: Room === 1 ? "1 Bedroom" : Room === 2 ? "2 Bedroom" : "",
            bedType: Bed === 1 ? "1 Bed" : Bed === 2 ? "2 Bed" : "",
            checkInDate: new Date(),
            checkOutDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // +3 วัน
        };

        const result = await bookingAPI.createBooking(bookingData);
        if (result.success) {
            alert("Booking created!");
            navigate(`/ResidentDetail/${residentId}`);
        } else {
            alert("Failed: " + result.msg);
        }

    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="w-full max-w-sm md:max-w-lg lg:w-[826px] rounded-lg bg-[#F3EAD3] py-6 md:py-8 lg:py-[40px] px-4 md:px-6 lg:px-[75px]">
                <h2 className="font-semibold text-[20px]">Enter your details</h2>
                <div className="flex flex-col space-y-3 md:space-y-4 lg:space-y-[15px] mt-4 lg:mt-[25px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4">
                        <div>
                            <div className="flex">
                                <p className="mb-1">First Name</p>
                                <p className="ml-1 text-red-600">*</p>
                            </div>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full h-[34px] border border-[#BCBEC0] bg-white rounded-lg px-3"
                                required
                            />
                        </div>
                        <div>
                            <div className="flex">
                                <p className="mb-1">Last Name</p>
                                <p className="ml-1 text-red-600">*</p>
                            </div>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full h-[34px] border border-[#BCBEC0] bg-white rounded-lg px-3"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex">
                            <p className="mb-1">Email</p>
                            <p className="ml-1 text-red-600">*</p>
                        </div>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full h-[34px] border border-[#BCBEC0] bg-white rounded-lg px-3"
                            required
                        />
                    </div>
                    <div>
                        <div className="flex">
                            <p className="mb-1">Phone Number</p>
                            <p className="ml-1 text-red-600">*</p>
                        </div>
                        <input
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="w-full h-[34px] border border-[#BCBEC0] bg-white rounded-lg px-3"
                            required
                        />
                    </div>
                    <div className="mt-4 lg:mt-[15px]">
                        <h1 className="font-semibold text-[20px]">Request for Additional Services</h1>
                        <p className="font-normal text-[10px]">
                            Please select the extra services you need (if available at the accommodation).
                        </p>
                        <div className="w-full bg-white rounded-lg mt-4 lg:mt-[20px] py-4 lg:py-[20px] px-4 md:px-6 lg:px-[40px]">
                            {/* Select Room Type */}
                            <div className="mb-6">
                                <h1 className="font-semibold text-[15px] mb-4">Select Room Type :</h1>
                                <div className="flex gap-6 lg:gap-10">
                                    <label className={`flex items-center gap-2 ${Room === 1 ? "text-blue-600" : "text-gray-500"}`}>
                                        <input
                                            type="radio"
                                            name="roomType"
                                            value="1 Bedroom"
                                            checked={Room === 1}
                                            onChange={() => handleRoomClick(1)}
                                        />
                                        <span className="text-[15px] font-medium">1 Bedroom</span>
                                    </label>
                                    <label className={`flex items-center gap-2 ${Room === 2 ? "text-blue-600" : "text-gray-500"}`}>
                                        <input
                                            type="radio"
                                            name="roomType"
                                            value="2 Bedroom"
                                            checked={Room === 2}
                                            onChange={() => handleRoomClick(2)}
                                        />
                                        <span className="text-[15px] font-medium">2 Bedroom</span>
                                    </label>
                                </div>
                            </div>
                            {/* Select Bed Type */}
                            <div>
                                <h1 className="font-semibold text-[15px] mb-4">Select Bed Type :</h1>
                                <div className="flex gap-6 lg:gap-10">
                                    <label className={`flex items-center gap-2 ${Bed === 1 ? "text-blue-600" : "text-gray-500"}`}>
                                        <input
                                            type="radio"
                                            name="bedType"
                                            value="1 Bed"
                                            checked={Bed === 1}
                                            onChange={() => handleBedClick(1)}
                                        />
                                        <span className="text-[15px] font-medium">1 Bed</span>
                                    </label>
                                    <label className={`flex items-center gap-2 ${Bed === 2 ? "text-blue-600" : "text-gray-500"}`}>
                                        <input
                                            type="radio"
                                            name="bedType"
                                            value="2 Bed"
                                            checked={Bed === 2}
                                            onChange={() => handleBedClick(2)}
                                        />
                                        <span className="text-[15px] font-medium">2 Bed</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="flex justify-center w-[206px] h-[35px] bg-[#362518] text-white text-center py-1.5 rounded-lg mx-auto my-2.5"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default DetailsBox;
