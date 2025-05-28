import React, { useState, useEffect, useMemo } from "react";
import Card from '../component/Card.jsx';
import Back from '../component/Back.jsx';
import Sort from "../component/Sort.jsx";
import * as residentAPI from "../api/residentAPI.js";

function Recommend() {
  const [recommendedRooms, setRecommendedRooms] = useState([]);
  const [sortType, setSortType] = useState("Highest rating");

  const handleFetchRecommended = async () => {
    try {
      const response = await residentAPI.ResidentWithAvgRating();
      setRecommendedRooms(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error("Error loading recommended rooms:", error);
    }
  };

  useEffect(() => {
    handleFetchRecommended();
  }, []);

  const sortedRooms = useMemo(() => {
    const sorted = [...recommendedRooms];
    switch (sortType) {
      case "Highest price":
        return sorted.sort((a, b) => (b.info?.rentalPrice || 0) - (a.info?.rentalPrice || 0));
      case "Lowest price":
        return sorted.sort((a, b) => (a.info?.rentalPrice || 0) - (b.info?.rentalPrice || 0));
      case "Highest rating":
      default:
        return sorted.sort((a, b) => {
          const ratingA = a.avgOverallRating;
          const ratingB = b.avgOverallRating;

          if (ratingA === null && ratingB === null) return 0;
          if (ratingA === null) return 1;
          if (ratingB === null) return -1;

          return ratingB - ratingA;
        });
    }
  }, [recommendedRooms, sortType]);


  return (
    <div className='md:max-w-[768px] xl:max-w-[1306px] mx-auto'>
      <Back />
      <h1 className='xl:text-[50px] md:text-[24px] text-[20px] font-bold leading-snug ml-18'>
        Recommendation room near <br />
        King Mongkut's University of Technology Thonburi
      </h1>
      <div className="h-px bg-gray-300 my-4" />
      <Sort onSortChange={setSortType} />

      <div className="space-y-4">
        {sortedRooms.map((room, index) => {
          const { id, residentName, info, address } = room;
          const fullAddress = `${address?.street || ""}, ${address?.subDistrict || ""}, ${address?.district || ""}, ${address?.province || ""} ${address?.postalCode || ""}`;

          return (
            <Card
              key={id || index}
              id={id}
              Name={residentName}
              Price={info?.rentalPrice || "N/A"}
              UnitType={info?.roomType || "N/A"}
              Address={fullAddress}
            />

          );
        })}
      </div>
    </div>
  );
}

export default Recommend;
