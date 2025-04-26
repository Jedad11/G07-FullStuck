const ListingCard = () => {
  return (
    <div className="bg-[#F3F8FE] w-[620px]  md:w-[701px] lg:w-[598px] rounded-xl shadow-md p-6  ">
      <h2 className="text-center text-xl font-semibold mb-6">Listing Information</h2>
      <div className="space-y-[30px] md:space-y-[35px] lg:space-y-[40px] text-[12px] md:text-[18px] lg:text-[24px]">
        <div className="flex justify-between">
          <span className="font-semibold">Name</span>
          <span>The Cube Pracha Uthit</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Rental Price</span>
          <span>7000-8000 THB/Month</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Building</span>
          <span>Building A</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Room type</span>
          <span>1 Bed</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Room number</span>
          <span>1234</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Electric price</span>
          <span>4 THB/unit</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Water price</span>
          <span>18 THB/unit, min 100 THB</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Service fee</span>
          <span>100 THB/month</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Internet</span>
          <span>200 THB/month</span>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
