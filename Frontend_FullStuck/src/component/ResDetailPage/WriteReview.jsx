import ReviewButton from "./ReviewButton"

const getRatingLabelAndColor = (score) => {
    if (score >= 3.5) return { label: "Excellent", color: "#4CAF50" }; // green
    if (score >= 2.5) return { label: "Average", color: "#FFC107" }; // yellow
    return { label: "Poor", color: "#F44336" }; // red
};

const WriteReview = ({ residentId, overall = 0 }) => {
    const { label, color } = getRatingLabelAndColor(overall);

    return (
        <div>
            <h1 className="font-semibold text-[36px] sm:text-[30px] md:text-[36px] mb-[30px] md:mb-[50px]">Rate Reviews</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                <div className="flex items-center space-x-[40px] sm:space-x-[60px] md:space-x-[80px] w-full sm:w-[350px]">
                    <div
                        className="w-[70px] sm:w-[80px] md:w-[90px] h-[60px] sm:h-[70px] md:h-[80px] flex items-center justify-center font-semibold text-[30px] sm:text-[24px] md:text-[24px] text-white rounded"
                        style={{ backgroundColor: color }}
                    >
                        {overall.toFixed(1)}
                    </div>
                    <span className="text-[30px] sm:text-[24px] md:text-[24px] font-semibold text-[#4B2C20]">
                        {label}
                    </span>
                </div>
                <div className="flex items-center lg:justify-end justify-start mt-6 lg:mt-[-80px]">
                    <ReviewButton id={residentId} />
                </div>
            </div>
        </div>
    );
};

export default WriteReview;