import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const reviewData = [
  { rating: 5.0, comment: "Loveeeee", name: "Jade", image: "/src/image/Bombardiro_crocodilo.jpg" },
  { rating: 4.5, comment: "Nice place!", name: "Ben", image: "/src/image/Bombardiro_crocodilo.jpg" },
  { rating: 4.8, comment: "Amazing stay", name: "Anna", image: "/src/image/Bombardiro_crocodilo.jpg" },
  { rating: 5.0, comment: "Perfect!", name: "Chris", image: "/src/image/Bombardiro_crocodilo.jpg" },
  { rating: 4.9, comment: "Very cozy", name: "Sam", image: "/src/image/Bombardiro_crocodilo.jpg" },
];

const Comments = () => {
  return (
    <div className="my-8 sm:my-12 md:my-16 lg:my-[100px] px-4 sm:px-6 md:px-8 lg:px-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-6 sm:mb-8 md:mb-12 lg:mb-[80px]">
        What people say about us?
      </h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        }}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {reviewData.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-2xl shadow-lg p-5 flex flex-col items-center text-center mx-auto max-w-sm sm:max-w-md md:max-w-lg">
              <img
                src={review.image}
                alt="room"
                className="rounded-2xl w-full h-40 sm:h-44 md:h-48 object-cover mb-5"
              />
              <div className="text-3xl sm:text-4xl md:text-[48px] font-medium">
                {review.rating}
                <span className="text-lg sm:text-xl md:text-[24px] font-medium">     stars</span>
              </div>
              
              {/*Star Rating*/}
              <div className="flex justify-center mb-3">
                {Array.from({ length: 5 }).map((_, idx) => {
                    const currentStar = idx + 1;
                    if (review.rating >= currentStar) {
                    return <FaStar key={idx} className="text-yellow-400 text-base sm:text-lg md:text-[20px] mx-0.5" />;
                    } else if (review.rating >= currentStar - 0.5) {
                    return (
                        <FaStarHalfAlt
                        key={idx}
                        className="text-yellow-400 text-base sm:text-lg md:text-[20px] mx-0.5"
                        />
                    );
                    } else {
                    return (
                        <FaRegStar
                        key={idx}
                        className="text-yellow-400 text-base sm:text-lg md:text-[20px] mx-0.5"
                        />
                    );
                    }
                })}
                </div>

              <p className="mb-2">"{review.comment}"</p>
              <h3 className="font-semibold">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Comments;



