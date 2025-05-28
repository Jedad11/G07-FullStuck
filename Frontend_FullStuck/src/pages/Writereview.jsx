import React, { useState } from "react";
import { Select, Option, Rating } from "@material-tailwind/react";
import PopupReview from "../component/PopupReview";
import * as ReviewAPI from "../api/reviewAPI.js"
import { useParams } from "react-router";
import { NavLink } from "react-router";

function Writereview() {
  const [guestStatus, setGuestStatus] = useState("");
  const [stayPeriod, setStayPeriod] = useState("");
  const [ratings, setRatings] = useState({
    Cleanliness: 0,
    Service: 0,
    Location: 0,
    Facilities: 0,
  });
  const [message, setMessage] = useState("");
  const [popup, setPopup] = useState(false);

  const { id } = useParams();
  function parseJwt(token) {
    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
      return null;
    }
  }

  const token = localStorage.getItem("token");
  const payload = parseJwt(token);
  const userId = payload ? payload.userId : null;

  const handleRatingChange = (category, value) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [category]: value,
    }));
  };


  const handleSubmit = async () => {
    if (!guestStatus || !stayPeriod || !message) {
      alert("Please complete all fields.");
      return;
    }

    const overallRating =
      (ratings.Cleanliness + ratings.Service + ratings.Location + ratings.Facilities) / 4;

    const reviewData = {
      residentId: parseInt(id), // from useParams
      userId,                   // from token
      cleanlinessRating: ratings.Cleanliness,
      serviceRating: ratings.Service,
      locationRating: ratings.Location,
      facilitiesRating: ratings.Facilities,
      overallRating,
      message,
      guestStatus,
      stayPeriod,
    };
    const response = await ReviewAPI.createReview(reviewData);
    console.log(response);
    
    if (!response.success) {
      alert(response.msg);
      return;
    }

    setPopup(true);
  };


  const handleCancel = () => {
    setGuestStatus("");
    setStayPeriod("");
    setRatings({
      Cleanliness: 0,
      Service: 0,
      Location: 0,
      Facilities: 0,
    });
    setMessage("");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#F3EAD3] p-4">
      <div className="bg-white p-6 md:p-10 rounded-lg shadow-lg w-full max-w-5xl">
        {/* Title */}
        <div className="bg-gray-300 p-4 md:p-5 rounded-t-lg mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold text-[#362518] flex justify-center items-center">
            Write Review
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Guest Status */}
          <div className="w-full">
            <Select
              label="Guest Status"
              className="w-full border p-2 rounded"
              value={guestStatus}
              onChange={(e) => setGuestStatus(e)}
            >
              <Option value="Active">Active</Option>
              <Option value="Inactive">Inactive</Option>
            </Select>
          </div>

          {/* Stay Period */}
          <div className="w-full">
            <Select
              label="Stay Period"
              className="w-full border p-2 rounded"
              value={stayPeriod}
              onChange={(e) => setStayPeriod(e)}
            >
              <Option value="Short Term">6 month</Option>
              <Option value="Long Term">1 year</Option>
            </Select>
          </div>

          {/* Ratings */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            {["Cleanliness", "Service", "Location", "Facilities"].map(
              (label) => (
                <div key={label} className="flex items-center justify-between">
                  <span className="text-base font-medium">{label}</span>
                  <Rating
                    value={ratings[label]}
                    onChange={(value) =>
                      handleRatingChange(label, value)}
                  />
                </div>
              )
            )}
          </div>

          {/* Message */}
          <div className="col-span-1 md:col-span-2">
            <label className="block mb-2 font-medium">Message</label>
            <textarea
              className="w-full border p-2 rounded h-32 resize-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Share your experience..."
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-4">
          <button
            className="bg-[#362518] hover:bg-[#554539] text-white px-6 py-2 rounded-md w-full md:w-auto"
            onClick={handleSubmit}
          >
            Confirm
          </button>
          <NavLink to={`/ResidentDetail/${id}`}>
            <button
              className="border border-[#362518] text-[#362518] hover:bg-gray-100 px-6 py-2 rounded-md w-full md:w-auto"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </NavLink>
        </div>
      </div>

      {/* Popup */}
      <PopupReview isOpen={popup} id={id} />
    </div>
  );
}

export default Writereview;