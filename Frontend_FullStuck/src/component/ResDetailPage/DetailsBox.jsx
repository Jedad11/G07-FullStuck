import { useState } from "react";

const DetailsBox = () => {
    const [selectedRoom, setSelectedRoom] = useState(false);
    const [selectedBed, setSelectedBed] = useState(false);
    const [Room, setRoom] = useState(0);
    const [Bed, setBed] = useState(0);
      
    const handleRoomClick = (select) => {
        if (Room !== select) {
            setRoom(select);
            setSelectedRoom(true);
        } else {
            setSelectedRoom(false);
            setRoom(0);
        }
    };
    
    const handleBedClick = (select) => {
        if (Bed !== select) {
            setBed(select);
            setSelectedBed(true);
        } else {
            setSelectedBed(false);
            setBed(0);
        }
    };

    return (
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
                            name="First Name"
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
                            name="Last Name"
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
                        name="Email"
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
                        name="Phone number"
                        className="w-full h-[34px] border border-[#BCBEC0] bg-white rounded-lg px-3"
                        required
                    />
                </div>
                <div className="mt-4 lg:mt-[15px]">
                    <h1 className="font-semibold text-[20px]">Request for Additional Services</h1>
                    <p className="font-normal text-[10px]">Please select the extra services you need (if available at the accommodation).</p>
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
                                    className="bg-white"
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
                                    className="bg-white"
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
                                    className="bg-white"
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
                                    className="bg-white"
                                    checked={Bed === 2}
                                    onChange={() => handleBedClick(2)}
                                />
                                <span className="text-[15px] font-medium">2 Bed</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <button className="flex justify-center w-[206px] h-[35px] bg-[#362518] text-white text-center py-1.5 rounded-lg mx-auto my-2.5">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DetailsBox;