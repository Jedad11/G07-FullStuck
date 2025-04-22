import React from "react";
import Slider from "../component/Slider";
import Search from "../component/Search";
import Room1 from "../image/room1.jpg";
import Room2 from "../image/room2.jpg";
import RecommendationRoom from "../component/RecommendationRoom";

function HomePageLogin() {
  return (
    <>
      <Slider />
      {/* <div className=" bg-[#F3EAD3] mt-2 p-7  shadow-xl absolute top-110">
          <Search />
        </div> */}
      {/* <div className="container mx-auto flex justify-center ">
        <div className=" bg-[#F3EAD3] mt-3 p-7 w-full max-w-7xl flex justify-between items-center lg:shadow-xl absolute md:z-30 lg:top-110">
          <Search />
        </div>
      </div> */}
      <div className="container mx-auto flex justify-center rounded-xl ">
        <div className="bg-[#F3EAD3] mt-3 p-7 w-full max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center lg:shadow-xl absolute md:z-30 lg:top-110 md:flex-row  ">
          <Search /> 
        </div>
      </div>

      <section className="mt-20 sm:mt-30 container mx-auto py-20 px-4 text-center text-[#362518] lg:mt-5">
        <h2 className="text-4xl font-bold mb-6">Welcome to KMUTT Res|Rent</h2>
        <p className="text-lg mb-8">
          Platform for finding quality residences near King Mongkut's University
          of Technology Thonburi (KMUTT).
        </p>

        {/* Image and Text Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col items-center">
            <img
              src={Room1}
              alt="Room"
              className="w-full h-72 object-cover rounded-lg"
            />
            <p className="mt-4">
              Whether you're a student, faculty member, or visitor, we make it
              easy to find the perfect place to stay.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={Room2}
              alt="Room"
              className="w-full h-72 object-cover rounded-lg"
            />
            <p className="mt-4">
              From dormitories to apartments and other types of residences, we
              offer a wide range of affordable and comfortable options.
            </p>
          </div>
        </div>

        {/* Commitment Section */}
        <div className="bg-[#F3EAD3] m-5 py-12 px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            At KMUTT Res|Rent, we are committed
          </h2>
          <p className="text-lg">
            We provide well-located, safe, and convenient residences that cater
            to both short-term and long-term stays. Our platform features
            detailed listings with essential information such as pricing,
            location, and amenities, ensuring you make the best decision for
            your living situation.
          </p>
        </div>
      </section>

      <RecommendationRoom />
    </>
  );
}

export default HomePageLogin;
