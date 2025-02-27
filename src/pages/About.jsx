import React from "react";
import Footer from "../components/common/Footer";
import Heading from "../components/ui/Heading";
import ButtonCTA from "../components/ui/ButtonCTA";
import { IoCheckmarkCircle } from "react-icons/io5";
import Img from "../assets/Img.jpg";

const foodSafetyBenefits = [
  { id: 1, text: "Educate businesses on the best food safety practices." },
  {
    id: 2,
    text: "Minimize risks of food contamination and foodborne illnesses.",
  },
  {
    id: 3,
    text: "Assist in achieving compliance with food safety laws and standards.",
  },
  {
    id: 4,
    text: "Enhance the overall quality and hygiene of food production and handling.",
  },
];

const About = () => {
  return (
    <div className="w-full mt-18 relative">
      {/* Banner section */}
      <div className="">
        <div className="min-h-[50vh] flex flex-col items-center justify-center space-y-10 text-center p-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug text-black">
            Say Goodbye to Food Safety Hassles,
            <br />
            <span className="text-chetwode-blue-600">
              With Tahwil, Compliance is Simple.
            </span>
          </h1>

          <p className="text-mirage-700 text-lg mt-4 max-w-2xl">
            Managing food safety regulations and compliance doesn’t have to be
            overwhelming.
            <b> Tahwil Food Consultancy</b> is here to streamline the process
            for you.
          </p>

          <ButtonCTA />
        </div>
      </div>

      {/* Missions and more */}
      <div className="container-border bg-white">
        <div className="w-full px-6 md:px-10 lg:px-14 mx-auto flex lg:flex-row flex-col gap-y-10 items-start justify-between gap-x-4 py-10">
          {/* Left - Mission Statement */}
          <div className="space-y-5 max-w-xl group">
            <img
              className="rounded-3xl border-[1px] border-mirage-300 shadow-2xl shadow-chetwode-blue-300 w-full"
              src={Img}
              alt=""
            />
          </div>

          {/* Right - Description */}
          <div className="space-y-5 max-w-3xl group ">
            <Heading text={"Our Mission"} />

            <h3 className="text-mirage-800 text-lg mt-4 font-medium">
              At Tahwil Food Consultancy, our mission is to create a safer and
              healthier food industry by offering top-tier consultancy,
              training, and certification services. We aim to:
            </h3>

            <div className="space-y-3">
              {foodSafetyBenefits.map((ele) => (
                <div key={ele.id} className="flex items-center gap-x-2">
                  <IoCheckmarkCircle className="text-green-600 text-3xl" />
                  <p className="text-mirage-700 text-lg">{ele.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
