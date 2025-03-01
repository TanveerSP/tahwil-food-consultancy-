import React from "react";
import ButtonDefault from "../ui/ButtonDefault";
import AnimatedBtn from "../ui/AnimatedBtn";

const ContactUs = () => {
  return (
    <div className="w-full group px-6 md:px-10 lg:px-14 mx-auto flex lg:flex-row flex-col gap-y-20 items-start justify-between py-10 bg-mirage-900">
      {/* <div className="flex flex-col gap-y-15 items-center lg:flex-row lg:justify-between"> */}

      <div className="max-w-xl space-y-0.5  relative">
        <h3 className="text-lg tracking-wide font-semibold text-mirage-300">
          Contact Us
        </h3>
        <div className="absolute bottom-0 left-0 w-5 h-1 bg-chetwode-blue-700 transition-all duration-300 group-hover:w-full"></div>
      </div>

      <div className="group relative border-l-3 border-t-3 border-chetwode-blue-700 max-w-3xl bg-titan-white-200 rounded-xl p-6 flex flex-col space-y-8 overflow-hidden">
        {/* Animated Borders with Rounded Corners */}
        <span className="absolute top-0 left-0 w-0 h-[2px] bg-chetwode-blue-700 rounded-t-xl transition-all duration-500 group-hover:w-full"></span>
        <span className="absolute top-0 left-0 h-0 w-[2px] bg-chetwode-blue-700 rounded-l-xl transition-all duration-500 group-hover:h-full"></span>

        <div>
          <h1 className="text-2xl font-medium">
            Be a Part of the Change in Sustainable Food Production – Connect
            with Us for Expert Guidance & Consultation!
          </h1>

          <p className="text-gray-500 text-lg mt-4 max-w-md">
            As the demand for safer and more sustainable food solutions grows,
            our expert consultancy ensures your brand stays ahead with
            innovative, compliant, and high-quality practices. Connect with us
            to explore opportunities for partnership and success.
          </p>
        </div>

        <div className="flex lg:flex-row md:flex-row flex-col items-center gap-x-8">
          <ButtonDefault text={"Contact Us"} />
          <AnimatedBtn text={"Check Courses"} />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
