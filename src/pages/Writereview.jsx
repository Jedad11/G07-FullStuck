import React, { useState } from "react";
import { Select, Option, Rating } from "@material-tailwind/react";
import PopupReview from "../component/PopupReview";
function Writereview() {

  const [ message, setMessage ] = useState("");
  const [ popup, setPopup ] = useState(false);
  const handleClick = () => {
    setPopup(true);
  }
  return (
      <div className="min-h-svh flex justify-center items-center bg-[#F3EAD3]">
        <div className="bg-white p-10 rounded-lg shadow-lg max-w-7xl mx-auto">
          <div className="bg-gray-300 p-5 rounded-t-lg mb-8">
            <h1 className="text-4xl font-semibold text-[#362518] justify-center items-center flex">
              Write Review
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">

            <div className="w-72 ">
              <Select label="Guest Status" className="w-full border p-2 rounded">
                <Option>Active</Option>
                <Option>Inactive</Option>
              </Select>
            </div>

            <div className="w-72 ">
              <Select label="Stay Period" className="w-full border p-2 rounded">
                <Option>Active</Option>
                <Option>Inactive</Option>
              </Select>
            </div>
            <div className="space-y-4 mb-6">
              {["Cleanliness", "Service", "Location", "Facilities"].map(
                  (label) => (
                      <div
                      key={label}
                      className="flex items-center justify-between"
                      >
                    <span className="text-sm font-medium">{label}</span>
                    <div className="flex flex-col">
                        <Rating />
                    </div>
                  </div>
                )
                )}
            </div>

            <div className="mt-4">
              <label className="block mb-1">Message</label>
              <textarea
                className="w-full border p-2 rounded h-24"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                />
            </div>

          </div>
            <div className="space-y-1 mt-2 flex flex-col justify-center mx-auto w-[367px]  ">
              <button className=" bg-[#362518] text-white px-4 py-2 rounded hover:bg-[#554539]"
              onClick={handleClick}
              >
                Confirm
              </button>
              <button className="border px-4 py-2 rounded bg-transparent  border-[#362518] text-[#362518]  hover:bg-gray-200">Cancel</button>
            </div>
        </div>
        <PopupReview isOpen={popup}/>
    </div>
  );
  console.log(popup);
}

export default Writereview;
