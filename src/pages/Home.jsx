import React from "react";
import Hero from "../components/home/Hero";
import AboutImg from "../assets/AboutImg.jpg";
import AboutImg2 from "../assets/boy.jpg";
import ButtonDefault from "../components/ui/ButtonDefault";
import Marquee from "../components/home/Marquee";
import AnimatedCards from "../components/home/AnimatedCards";
import Card from "../components/ui/Card";
import SwiperCard from "../components/home/SwiperCard";
import Footer from "../components/common/Footer";
import ContactUs from "../components/common/ContactUs";

const Home = () => {
  return (
    <div className="w-full mt-18 relative">
      <Hero />

      {/* What We Do Section */}
      <div className="py-10 border-b-[1px] border-gray-300">
        {/* Section Header (Separate Group) */}
        <div className="w-full px-6 md:px-10 lg:px-14 mx-auto flex lg:flex-row flex-col gap-y-20 items-start justify-between py-10 group">
          {/* Left - Small Heading */}
          <div className="max-w-xl space-y-0.5 relative">
            <h3 className="text-lg tracking-wide font-semibold text-mirage-500">
              WHAT WE DO
            </h3>
            <div className="absolute bottom-0 left-0 w-5 h-1 bg-chetwode-blue-700 transition-all duration-300 group-hover:w-30"></div>
          </div>

          {/* Right - Description */}
          <p className="text-xl text-black font-medium max-w-3xl leading-relaxed">
            Ensure food safety and compliance with expert guidance. We provide
            training, certifications, and consultancy to help businesses meet
            industry standards, prevent risks, and maintain quality. Protect
            your customers and brand with our trusted food safety solutions.
          </p>
        </div>

        {/* Animated Cards (Separate, Not Affected by Hover) */}
        <div className="mt-10">
          <AnimatedCards />
        </div>
      </div>

      {/* Courses Categories */}
      <div className=" border-b-[1px] group border-gray-300">
        <div className="w-full py-15 h-auto px-6 md:px-10 lg:px-14  flex flex-col lg:flex-row items-start lg:items-start justify-between gap-10 lg:gap-16 ">
          {/* heading */}
          <div className="max-w-4xl py-5 flex flex-col gap-6">
            {/* Title */}

            <div className="max-w-xl space-y-0.5 relative">
              <h3 className="text-lg tracking-wide font-semibold text-mirage-500">
                COURSES CATEGORIES
              </h3>
              <div className="absolute bottom-0 left-0 w-5 h-1 bg-chetwode-blue-700 transition-all duration-300 group-hover:w-49"></div>
            </div>

            <div className="flex flex-col gap-y-3">
              <div>
                <ButtonDefault text="view all courses" />
              </div>
            </div>
          </div>

          <div className="py-5">
            <p className="text-xl  text-black font-medium max-w-3xl leading-relaxed">
              Explore Our Course Categories Swipe through our diverse course
              categories and find the perfect learning path for you. From tech
              to business, enhance your skills with expert-led training. 🚀🎓
            </p>
          </div>
        </div>
        {/* Swiper Card Content */}
        <div className="w-11/12 mx-auto py-5 ">
          <SwiperCard />
        </div>
      </div>

      {/* Marquee Animation Line */}
      <div>
        <Marquee />
      </div>

      {/* About Us Section */}
      <div className="w-full group pb-20 h-auto px-6 md:px-10 lg:px-14 py-10 flex flex-col-reverse lg:flex-row items-start lg:items-start justify-between gap-10 lg:gap-16 ">
        {/* Left - Images Section */}

        <div className="max-w-xl py-5 relative">
          <img
            className="rounded-3xl shadow-2xl shadow-chetwode-blue-300 w-full"
            src={AboutImg}
            alt="About Us"
          />
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
          <div className="max-w-xl space-y-0.5  relative">
            <h3 className="text-lg tracking-wide font-semibold text-mirage-500">
              ABOUT US
            </h3>
            <div className="absolute bottom-0 left-0 w-5 h-1 bg-chetwode-blue-700 transition-all duration-300 group-hover:w-22"></div>
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
            <ButtonDefault text={"about us"} />
          </div>
        </div>
      </div>

      {/* Contact page */}
      <div>
        <ContactUs />
      </div>

      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
