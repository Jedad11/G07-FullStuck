import React from "react";

const rooms = [
  {
    id: 1,
    name: "The Cube Pracha Uthit",
    address: "Pracha Uthit 37, Bangkok",
    price: "7,500",
    rating: 4.1,
    imageUrl: "https://static.estopolis.com/review/condo_cover_112.jpeg", 
  },
  {
    id: 2,
    name: "Cosmo Home",
    address: "Pracha Uthit 45, Bangkok",
    price: "6,000",
    rating: 4.1,
    imageUrl: "https://bcdn.renthub.in.th/listing_picture/201603/20160323/p8C4aG94Rma7zYybfZBA.jpg?class=moptimized", 
  },
  {
    id: 3,
    name: "Parque Phutthabucha 48",
    address: "Phutthabucha 48, Bangkok",
    price: "8,000",
    rating: 4.1,
    imageUrl: "https://bcdn.propertyhub.in.th/pictures/202310/20231031/jPjba9kqawULtBzibc8w.jpg?width=1472&height=932", 
  },
  {
    id: 4,
    name: "Parkview46",
    address: "Phutthabucha 46, Bangkok",
    price: "4,500",
    rating: 4.1,
    imageUrl: "https://propertyhub.sgp1.digitaloceanspaces.com/pictures/202412/20241209/LBkSUPs4X4YBVtvbMefT/be7210af.jpg", 
  },
];

const RecommendationRoom = () => {
  return (
    <div className="bg-gradient-to-b from-[#F3EAD3] to-[#FFFFFF] container mx-auto py-12 px-4 text-[362518]">
      <h2 className="text-4xl font-bold text-center mb-12">
        Recommendation Rooms
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all"
          >
            <img
              src={room.imageUrl}
              alt={room.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex items-center mb-2">
                <span className="text-yellow-500 mr-2">★</span>
                <span className="text-gray-700">{room.rating}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {room.name}
              </h3>
              <p className="text-gray-600 text-sm">{room.address}</p>
              <div className="mt-4">
                <p className="text-lg font-bold text-gray-800">
                  Starting from {room.price} THB
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="bg-[#362518] text-white px-6 py-2 rounded-md hover:bg-brown-700 transition-all">
          View More
        </button>
      </div>
    </div>
  );
};

export default RecommendationRoom;
