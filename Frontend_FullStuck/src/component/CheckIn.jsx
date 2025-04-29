import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import '../datepicker.css'
import { FaRegCalendarAlt } from "react-icons/fa";


const CheckIn = () => {
  const [startDate, setStartDate] = useState(false);
//   z-10 pr-8
  return (
    <div className="relative flex items-center justify-end h-full">
        <div className="absolute z-10 pr-8 md:right-3 top-1/2 transform -translate-y-1/2 ">
            <div>
                <FaRegCalendarAlt />
            </div>

        </div>
      <DatePicker
        className="w-full h-full p-3"
        selected={startDate}
        placeholderText="Check in"
        onChange={(date) => setStartDate(date)}
      />
    </div>
  );
};

export default CheckIn;
