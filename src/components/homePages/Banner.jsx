import React from "react";
import BannerImg from "../../assets/BannerImg.jpg";

import BannerCard from "./BannerCard";
import ButtonDefault from "../ui/ButtonDefault";
import AnimatedHeading from "./AnimatedHeading";

const Banner = () => {
  return (
    <div className="pt-20">
      <div
        className="relative w-full min-h-[80vh] md:min-h-[70vh] lg:min-h-[80vh] bg-fixed bg-center bg-cover flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12"
        style={{ backgroundImage: `url(${BannerImg})` }}
      >
        <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center">
          {/* Centered content with responsive width */}
          {/* <div className="max-w-[90%] md:max-w-[75%] lg:max-w-[60%]"> */}
          <div className="w-11/12 mx-auto">
            <AnimatedHeading />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
