import React from "react";
import { NavLink } from "react-router-dom";

const RecommendationRoom = ({ topRatedRooms }) => {
  return (
    <div className="bg-gradient-to-b from-[#F3EAD3] to-[#FFFFFF] container mx-auto py-12 px-4 text-[362518]">
      <h2 className="text-4xl font-bold text-center mb-12">
        Recommendation Rooms
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {topRatedRooms.map((room) => (
          <NavLink
            key={room.id}
            to={`/ResidentDetail/${room.id}`}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer"
          >
            <img
              src="https://static.estopolis.com/review/condo_cover_112.jpeg"
              alt={room.residentName}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex items-center mb-2">
                <span className="text-yellow-500 mr-2">★</span>
                <span className="text-gray-700">{room.avgOverallRating?.toFixed(1) || "N/A"}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {room.residentName}
              </h3>
              <p className="text-gray-600 text-sm">
                {room.address?.street}, {room.address?.district}
              </p>
              <div className="mt-4">
                <p className="text-lg font-bold text-gray-800">
                  Starting from {room.info?.rentalPrice} THB
                </p>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
      <div className="text-center mt-8">
        <NavLink to="/recommend">
          <button className="bg-[#362518] text-white px-6 py-2 rounded-md hover:bg-brown-700 transition-all cursor-pointer">
            View More
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default RecommendationRoom;
