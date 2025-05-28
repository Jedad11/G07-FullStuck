import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import * as reviewAPI from "../../api/reviewAPI";
import * as userAPI from "../../api/userAPI";
import { useState, useEffect } from "react";
import { CircleUser } from "lucide-react";

const Comments = ({ id }) => {
  const [reviews, setReviews] = useState([]);
  const [users, setUsers] = useState({}); // เก็บ user ข้อมูลเป็น object { userId: userData }

  const handleFetchReviewsData = async () => {
    try {
      const response = await reviewAPI.getReviewByResident(id);
      if (response.success && Array.isArray(response.data)) {
        setReviews(response.data);
        // ดึง user ข้อมูลตาม userId ในรีวิว
        fetchUsersData(response.data);
      } else {
        setReviews([]);
        setUsers({});
      }
    } catch (error) {
      console.error("Error loading reviews:", error);
      setReviews([]);
      setUsers({});
    }
  };

  // ฟังก์ชันดึงข้อมูล user จาก userId ของรีวิว
  const fetchUsersData = async (reviewsData) => {
    const uniqueUserIds = [...new Set(reviewsData.map(r => r.userId))];
    const usersData = {};

    await Promise.all(
      uniqueUserIds.map(async (userId) => {
        const res = await userAPI.getUserById(userId);
        if (res.success && res.data) {
          usersData[userId] = res.data;
        }
      })
    );

    setUsers(usersData);
  };

  useEffect(() => {
    if (id) {
      handleFetchReviewsData();
    }
  }, [id]);

  return (
    <div className="my-8 sm:my-12 md:my-16 lg:my-[100px] px-4 sm:px-6 md:px-8 lg:px-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-6 sm:mb-8 md:mb-12 lg:mb-[80px]">
        What people say about us?
      </h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          1024: { slidesPerView: 3, spaceBetween: 30 },
          768: { slidesPerView: 1, spaceBetween: 20 },
          640: { slidesPerView: 1, spaceBetween: 20 },
          0: { slidesPerView: 1, spaceBetween: 20 },
        }}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {reviews.length === 0 && (
          <p className="text-center w-full">No reviews available.</p>
        )}

        {reviews.map((review, index) => {
          const user = users[review.userId]; // ดึง user จาก state users
          return (
            <SwiperSlide key={review.id || index}>
              <div className="bg-white rounded-2xl shadow-lg p-5 flex flex-col items-center text-center mx-auto max-w-sm sm:max-w-md md:max-w-lg">
                {/* รูป user (ถ้ามี) หรือใช้รูป default */}
                <div className="w-full h-40 sm:h-44 md:h-48 mb-5 overflow-hidden rounded-2xl flex items-center justify-center bg-gray-200">
                  {user?.profilePicture ? (
                    <img
                      src={user.profilePicture}
                      alt={`${user?.firstName || ''} ${user?.lastName || ''}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <CircleUser className="h-12 w-12 text-gray-500" />
                  )}
                </div>

                <div className="text-3xl sm:text-4xl md:text-[48px] font-medium">
                  {review.overallRating.toFixed(1)}
                  <span className="text-lg sm:text-xl md:text-[24px] font-medium"> stars</span>
                </div>

                {/* Star Rating */}
                <div className="flex justify-center mb-3">
                  {Array.from({ length: 5 }).map((_, idx) => {
                    const currentStar = idx + 1;
                    if (review.overallRating >= currentStar) {
                      return (
                        <FaStar
                          key={idx}
                          className="text-yellow-400 text-base sm:text-lg md:text-[20px] mx-0.5"
                        />
                      );
                    } else if (review.overallRating >= currentStar - 0.5) {
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

                <p className="mb-2">"{review.message}"</p>
                <h3 className="font-semibold">
                  {user?.firstName} {user?.lastName}
                </h3>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Comments;