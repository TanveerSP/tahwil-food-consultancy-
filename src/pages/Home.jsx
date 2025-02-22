import React from "react";
import Hero from "../components/home/Hero";
import AboutImg from "../assets/AboutImg.jpg";
import AboutImg2 from "../assets/boy.jpg";
import ButtonDefault from "../components/ui/ButtonDefault";
import Marquee from "../components/homePages/Marquee";
import AnimatedCards from "../components/home/AnimatedCards";
import Card from "../components/ui/Card";
import SwiperCard from "../components/home/SwiperCard";

const Home = () => {
  return (
    <div className="w-full relative">
      <Hero />

      <div className="py-10 border-b-[1px] border-gray-300">
        {/* What We Do Section */}
        <div className="w-full px-6 md:px-10 lg:px-14 mx-auto flex lg:flex-row flex-col gap-y-20 items-start justify-between py-10">
          {/* Left - Small Heading */}
          <div className="space-y-1">
            <h3 className="text-lg tracking-wide font-semibold text-gray-500">
              WHAT WE DO
            </h3>
            <div className="w-18 rounded-full h-1 bg-titan-white-700"></div>
          </div>

          {/* Right - Description */}
          <p className="text-xl  text-black font-medium max-w-3xl leading-relaxed">
            We leverage biotechnology to deliver sustainable and healthy beef
            alternative for pet food manufacturers. By using insect-based
            protein we enhance animal health, reduce environmental impact, and
            provide scalable solutions for a growing industry.
          </p>
        </div>
        <AnimatedCards />
      </div>

      {/* About Us Section */}
      <div className="w-full pb-20 h-auto px-6 md:px-10 lg:px-14 py-10 flex flex-col-reverse lg:flex-row items-start lg:items-start justify-between gap-10 lg:gap-16 ">
        {/* Left - Images Section */}
        <div className="max-w-xl py-5 relative">
          <img className="rounded-3xl w-full" src={AboutImg} alt="About Us" />
          <div className="absolute bottom-[-7%] right-[-7%] lg:bottom-[-8%] lg:right-[-8%] max-w-[150px] sm:max-w-[180px] md:max-w-[200px]">
            <img
              className="rounded-3xl shadow-2xl w-full"
              src={AboutImg2}
              alt="Tahwil Consultancy"
            />
          </div>
        </div>

        {/* Right - Text Section */}
        <div className="max-w-4xl py-5 flex flex-col gap-6">
          {/* Title */}
          <div className="space-y-1">
            <h3 className="text-sm sm:text-lg tracking-wide font-semibold text-gray-500">
              ABOUT US
            </h3>
            <div className="w-12 h-1 rounded-full bg-titan-white-700"></div>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-black font-medium max-w-3xl leading-relaxed">
            With a foundation built in 2025,{" "}
            <strong>Tahwil Food Consultancy</strong> is on a mission to lead the
            industry in QHSE, food safety training, and auditing. Looking ahead,
            we are set to broaden our services by incorporating
            <strong> Testing, Inspection, and Certification (TIC)</strong>{" "}
            solutions, reinforcing our presence in industrial markets across key
            Middle Eastern countries.
          </p>

          {/* CTA Button */}
          <div>
            <ButtonDefault />
          </div>
        </div>
      </div>

      {/* Marquee Animation Line */}
      <div>
        <Marquee />
      </div>

      {/* Courses Categories */}
      <div className="w-full py-15 h-auto px-6 md:px-10 lg:px-14  flex flex-col lg:flex-row items-start lg:items-start justify-between gap-10 lg:gap-16 ">
        {/* heading */}
        <div className="max-w-4xl py-5 flex flex-col gap-6">
          {/* Title */}
          <div className="space-y-1">
            <h3 className="text-sm sm:text-lg tracking-wide font-semibold text-gray-500">
              COURSES CATEGORIES
            </h3>
            <div className="w-12 h-1 rounded-full bg-titan-white-700"></div>
          </div>

          <div className="flex flex-col gap-y-3">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam,
              tempora?
            </p>
            <div>
              <ButtonDefault />
            </div>
          </div>
        </div>

        {/* Swiper Card Content */}
      </div>
      <div className="w-11/12 mx-auto py-5 ">
        <SwiperCard />
      </div>
    </div>
  );
};

export default Home;
