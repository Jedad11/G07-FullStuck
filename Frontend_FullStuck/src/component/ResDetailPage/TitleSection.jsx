import React from "react";

const TitleSection = ({ residentName, address, residentType }) => {
  // รวมที่อยู่ให้อยู่ในรูปแบบสวยงาม
  const formattedAddress = `${address.houseNumber || ""} ${address.street || ""}, ${address.subDistrict || ""}, ${address.district || ""}, ${address.province || ""} ${address.postalCode || ""}`;

  return (
    <div>
      <h1 className="w-[263px] h-[20px] text-[24px] md:w-[398px] md:h-[30px] md:text-[36px]  lg:w-[529px] lg:h-[38px] lg:text-[48px] mb-[25px] font-semibold">
        {residentName}
      </h1>
      <p className="w-[307px] h-[30px] text-[11px] md:w-[471px] md:h-[30px] md:text-[16px]  lg:w-[479px] lg:h-[46px] lg:text-[20px] mb-[50px] font-normal">
        {formattedAddress}
      </p>
      <p className="w-[148px] h-[18px] mb-[50px] text-[20px] font-semibold ">#{residentType}</p>
    </div>
  );
};

export default TitleSection;
