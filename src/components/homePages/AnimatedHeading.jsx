import { motion, useScroll, useTransform } from "framer-motion";

const AnimatedHeading = () => {
  const { scrollY } = useScroll();

  // Transformations for animation
  const scale = useTransform(scrollY, [0, 300], [1, 0.92]); // Smooth shrink effect
  const yPosition = useTransform(scrollY, [0, 300], [0, 120]); // Move up
  const opacity = useTransform(scrollY, [0, 250], [1, 0]); // Fade out

  return (
    <section className="relative max-w-7xl mx-auto min-h-[65vh] flex flex-col lg:flex-row justify-center items-center text-center lg:text-left py-10 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 w-full">
        {/* Left Content - Animated Heading */}
        <div
          style={{ scale, y: yPosition, opacity }}
          className="flex flex-col items-center lg:items-start"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
            TAHWIL{" "}
            <span className="text-[#C4D600]">Transforming Food Safety</span>{" "}
            with Expertise & Compliance.
          </h1>
        </div>

        {/* Right Content - Paragraph & Button */}
        <div
          style={{ opacity, y: yPosition }}
          className="flex flex-col gap-6 items-center lg:items-start text-white text-center lg:text-left px-4 lg:px-0"
        >
          <p className="text-lg md:text-xl font-sans max-w-2xl">
            Ensure food safety and compliance with expert guidance. We provide
            training, certifications, and consultancy to help businesses meet
            industry standards, prevent risks, and maintain quality. Protect
            your customers and brand with our trusted food safety solutions.
          </p>

          <button className="px-6 py-3 bg-[#C4D600] text-black font-semibold rounded-md shadow-md hover:bg-[#a8be00] transition-all duration-300">
            ➝ Explore Our Solutions
          </button>
        </div>
      </div>
    </section>
  );
};

export default AnimatedHeading;
