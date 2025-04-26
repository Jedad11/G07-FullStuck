
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt } from "react-icons/fa";

function CheckOut() {
    const [endDate, setEndDate] = useState(false);

  return (
    <div className="relative flex items-center justify-end h-full">
        <div className="absolute z-10 pr-8">
            <div>
                <FaRegCalendarAlt />
            </div>

        </div>
      <DatePicker
        className="w-full h-full"
        selected={endDate}
        placeholderText="Check Out"
        onChange={(date) => setEndDate(date)}
      />
    </div>
  )
}

export default CheckOut