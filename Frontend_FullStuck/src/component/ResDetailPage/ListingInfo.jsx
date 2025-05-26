const ListingCard = ({ residentName, info }) => {
  if (!info) return null; // ถ้ายังโหลดไม่เสร็จ ไม่ render

  return (
    <div className="bg-[#F3F8FE] w-[620px] md:w-[701px] lg:w-[598px] rounded-xl shadow-md p-6">
      <h2 className="text-center text-xl font-semibold mb-6">Listing Information</h2>
      <div className="space-y-[30px] md:space-y-[35px] lg:space-y-[40px] text-[12px] md:text-[18px] lg:text-[24px]">
        <div className="flex justify-between">
          <span className="font-semibold">Name</span>
          <span>{residentName}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Rental Price</span>
          <span>{info.rentalPrice} THB/Month</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Electric price</span>
          <span>{info.electricFee} THB/unit</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Water price</span>
          <span>{info.waterFee} THB/unit</span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold">Service fee</span>
          <span>{info.serviceFee} THB/month</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Internet</span>
          <span>{info.internetFee} THB/month</span>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
