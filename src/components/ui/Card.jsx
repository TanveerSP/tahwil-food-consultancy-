import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import topCardData from "../../data/topCardData";

const Card = () => {
  const swiperRef = useRef(null);

  return (
    <div className="max-w-7xl mx-auto relative">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        navigation={false}
        pagination={false}
        freeMode={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, FreeMode, Autoplay]}
        className="w-full "
      >
        {topCardData.map((item, ind) => (
          <SwiperSlide className=" overflow-hidden rounded-2xl  gap-0">
            <div className="relative gap-x-5 overflow-hidden h-[140px] md:h-[250px] lg:h-[300px]">
             
            </div>
            {/* <div className="py-3 px-4 text-center bg-bluemine-500 ">
              <p className="text-bluemine-950 font-semibold lg:text-xl text-lg">
                {item.title}
              </p>
            </div> */}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute left-4 bottom-[-6vw] flex gap-4">
        <button
          className="px-4 py-2 bg-gray-800 text-white rounded-lg"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          Prev
        </button>
        <button
          className="px-4 py-2 bg-gray-800 text-white rounded-lg"
          onClick={() => swiperRef.current?.slideNext()}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Card;
