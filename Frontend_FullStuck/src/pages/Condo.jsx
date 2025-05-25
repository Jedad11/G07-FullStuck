import React from 'react'
import Card from '../component/Card.jsx'
import Back from '../component/Back.jsx'
import Sort from '../component/Sort.jsx'
import * as residentAPI from "../api/residentAPI.js"
import { useState, useEffect } from 'react'

function Condo() {
  const [condos, setCondos] = useState([]);
  const [sortType, setSortType] = useState("Lastest update");

  const handleFetchCondosData = async () => {
    try {
      const response = await residentAPI.ResidentCardCondo()
      setCondos(Array.isArray(response.data) ? response.data : [])
    } catch (error) {
      console.error("Error loading todos:", error);
    }
  }

  useEffect(() => {
    handleFetchCondosData();
  }, []);
  const sortedCondos = React.useMemo(() => {
    const sorted = [...condos];
    switch (sortType) {
      case "Highest price":
        return sorted.sort((a, b) => (b.info?.rentalPrice || 0) - (a.info?.rentalPrice || 0));
      case "Lowest price":
        return sorted.sort((a, b) => (a.info?.rentalPrice || 0) - (b.info?.rentalPrice || 0));
      default:
        return sorted;
    }
  }, [condos, sortType]);

  return (
    <div className='md:max-w-[768px] xl:max-w-[1306px] mx-auto'>
      <Back />
      <h1 className='xl:text-[50px] md:text-[24px] text-[20px] font-bold leading-snug ml-18 '>
        Condominium near <br />King Mongkut's University of Technology Thonburi
      </h1>
      <div className="h-px bg-gray-300 my-4" />
      
      <Sort onSortChange={setSortType} />

      <div className="space-y-4">
        {sortedCondos.map((condo, index) => {
          const { residentName, info, address } = condo;
          const fullAddress = `${address?.street || ""}, ${address?.subDistrict || ""}, ${address?.district || ""}, ${address?.province || ""} ${address?.postalCode || ""}`;
          return (
            <Card
              key={index}
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

export default Condo