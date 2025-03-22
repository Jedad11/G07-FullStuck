import React from "react";
import Kmutt1 from "../image/kmutt1.jpg";
import Kmutt2 from "../image/kmutt2.jpg";
import Kmutt3 from "../image/kmutt3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper CSS
import "swiper/css/effect-fade"; // Import EffectFade CSS
// import { EffectFade, Autoplay } from "swiper"; 
import Kmutt10 from "../image/kmutt10.webp"
import Kmutt11 from "../image/kmutt11.jpg"

const slides = [
  {
    title: "The Best Booking KMUTT DORM Website",
    bg: Kmutt10,
  },
  {
    title: "The Best Booking KMUTT DORM Website",
    bg: Kmutt11,
  },
  {
    title: "The Best Booking KMUTT DORM Website",
    bg: Kmutt3,
  },
];

const Slider = () => {
  return (
    <Swiper
    loop={true}
    className="h-[200px] md:h-[300px] lg:h-[400px]">
      {slides.map((slide, index) => {

        const { bg } = slide

        return (
          <SwiperSlide key={index} className="h-full">
            <div className="bg-cover bg-center bg-black bg-opacity-50 flex items-center justify-start p-10 text-white relative underline">
            <div className="absolute inset-0 bg-black/50"></div>
              <h1 className="z-10 text-xl font-bold leading-snug md:text-5xl ">
                The Best Booking<br/>KMUTT DORM Website
              </h1>
            </div>
            <div className="absolute top-0 w-full h-full">
              <img
                className="h-full w-full"
                src={bg}
                alt=""
              />
            </div>
            {/* <div className="absolute w-full h-full bg-black/70"></div> */}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
