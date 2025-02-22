import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import topCardData from "../../data/topCardData";
import ButtonCTA from "../ui/ButtonCTA";
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";

const SwiperCard = () => {
  const swiperRef = useRef(null);

  return (
    <div className="relative w-full flex flex-col gap-y-2 pb-6">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={10} // Adjusted space between slides
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 }, // Small screens
          480: { slidesPerView: 2, spaceBetween: 10 },
          768: { slidesPerView: 3, spaceBetween: 15 },
          1024: { slidesPerView: 4, spaceBetween: 20 }, // Large screens
        }}
        navigation={false}
        pagination={false}
        freeMode={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, FreeMode, Autoplay]}
        className="w-full"
      >
        {topCardData.map((ele, ind) => (
          <SwiperSlide key={ind} className="flex justify-center">
            <div className="grid place-items-center m-2 max-w-[90vw] sm:max-w-[45vw] md:max-w-[30vw] lg:max-w-[19vw] min-h-[25vh] rounded-2xl bg-titan-white-200 p-4 shadow-md transition-all duration-300 hover:scale-105 ease-in-out">
              <div className="h-14 w-14 mt-2 bg-titan-white-600 rounded-full"></div>

              <div className="grid gap-y-4 text-center">
                <h4 className="font-semibold text-lg">{ele.title}</h4>

                <div>
                  <ButtonCTA />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="translate-x-2 flex gap-x-4">
        <button
          className="p-4 bg-chetwode-blue-600 hover:bg-chetwode-blue-700 text-white rounded-full shadow-xl shadow-chetwode-blue-400 transition-all duration-300 hover:scale-105 ease-in-out"
          onClick={() => swiperRef.current?.slidePrev()}
        >
       <BsArrowLeftCircle size={25}/>
        </button>
        <button
          className="p-4 bg-chetwode-blue-600 hover:bg-chetwode-blue-700 text-white rounded-full shadow-xl shadow-chetwode-blue-400 transition-all duration-300 hover:scale-105 ease-in-out"
          onClick={() => swiperRef.current?.slideNext()}
        >
       <BsArrowRightCircle size={25} />
        </button>
      </div>
    </div>
  );
};

export default SwiperCard;
