const ResidentBox = ({ residentType, residentName, address, rating = 0, ratingText = "No rating" }) => {
    const formattedAddress = `${address.houseNumber || ""} ${address.street || ""}, ${address.subDistrict || ""}, ${address.district || ""}, ${address.province || ""} ${address.postalCode || ""}`;

    const getColorByRating = (score) => {
        if (score >= 3.5) return "#4CAF50"; // green
        if (score >= 2.5) return "#FFC107"; // yellow
        return "#F44336"; // red
    };

    const ratingColor = getColorByRating(rating);

    return (
        <div className="w-[346px] h-[203px] rounded-lg bg-[#F3EAD3] mb-[34px] pl-[30px] space-y-[10px] py-1.5">
            <h1 className="font-semibold text-[16px] mt-[20px]">{residentType}</h1>
            <h1 className="font-semibold text-[20px]">{residentName}</h1>
            <p className="font-normal text-[13px]">{formattedAddress}</p>
            <div className="flex items-center space-x-[10px]">
                <div
                    className="w-[32px] h-[29px] flex items-center justify-center font-semibold text-[13px] text-white rounded"
                    style={{ backgroundColor: ratingColor }}
                >
                    {rating.toFixed(1)}
                </div>
                <span className="text-[13px] font-semibold text-[#4B2C20]">
                    {ratingText}
                </span>
            </div>
        </div>
    );
};

export default ResidentBox;
