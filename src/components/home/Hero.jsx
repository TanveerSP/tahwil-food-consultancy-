import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Img from "../../assets/BannerImg.jpg";
import ButtonDefault from "../ui/ButtonDefault";

const Hero = () => {
  const { scrollY } = useScroll();
  const yPosition = useTransform(scrollY, [0, 500], [0, -100]); // Smoother, slower parallax

  return (
    <div className="w-full pt-20 px-6 md:px-10 lg:px-14 border-b-[1px] border-gray-300 flex flex-col justify-between ">
      {/* Top - Heading */}
      <div className="flex w-full px-3 flex-col gap-14 justify-between">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-snug md:leading-tight text-black max-w-2xl lg:max-w-4xl">
            Elevating Food Safety with{" "}
            <span className="bg-gradient-to-r from-green-400 to-blue-400 text-transparent bg-clip-text">
              Expertise
            </span>
            , Ensuring{" "}
            <span className="bg-gradient-to-r from-purple-500 to-orange-400 text-transparent bg-clip-text">
              Quality
            </span>
          </h1>
        </div>

        {/* Bottom - Button & Paragraph */}
        <div className="flex lg:flex-row flex-col-reverse items-start lg:items-center gap-8 justify-between">
          <ButtonDefault text={"Get Start"} />
          <p className="text-gray-500 text-lg mt-4 max-w-md">
            Our expert food consultancy ensures compliance, safety, and
            efficiency in food production, helping businesses meet industry
            standards.
          </p>
        </div>
      </div>

      {/* Parallax Image Div */}
      <div className="mt-10 rounded-2xl relative overflow-hidden">
        {/* Parallax Image with Overlay */}
        <motion.div
          className="w-full rounded-2xl min-h-[40vh] md:min-h-[60vh] bg-center bg-cover flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 relative"
          style={{
            backgroundImage: `url(${Img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            y: yPosition, // Parallax Effect
          }}
        >
          {/* Color Overlay */}
          <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
