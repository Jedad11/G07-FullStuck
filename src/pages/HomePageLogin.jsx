import React from "react";
import Slider from "../component/Slider";
import Search from "../component/Search";

function HomePageLogin() {
  return (
    <>
      <Slider />
      <div className="container mx-auto">
        <div className=" mt-6 p-4 lg:shadow-xl absolute lg:left-0 lg:right-0 lg:z-30 lg:top-110">
        <Search />
        </div>
      </div>
    </>
  );
}

export default HomePageLogin;
