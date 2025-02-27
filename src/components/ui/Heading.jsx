import React from "react";

const Heading = ({ text }) => {
  return (
    <div className="relative group w-fit">
      <h3 className="text-lg tracking-wide uppercase font-semibold text-mirage-500">
        {text}
      </h3>
      <div className="absolute bottom-0 left-0 h-1 rounded-full bg-chetwode-blue-700 w-7 transition-all duration-300 group-hover:w-full"></div>
    </div>
  );
};

export default Heading;
