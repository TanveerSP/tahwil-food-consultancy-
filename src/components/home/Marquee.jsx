import React from "react";

const Marquee = () => {
  const items = [
    "Food Safety",
    "Hygiene Standards",
    "Certifications",
    "Training Programs",
    "Quality Control",
    "Regulatory Compliance",
    "Food Audits",
    "Risk Management",
  ];

  return (
    <div className="w-full flex  bg-mirage-950 relative overflow-hidden">
      {/* Marquee Wrapper */}
      <div className="flex whitespace-nowrap overflow-hidden">
        {/* Duplicate to make it seamless */}
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center py-10 gap-x-5 animate-[marquee_30s_linear_infinite]">
            {items.map((text, index) => (
              <div key={index} className="inline-flex items-center gap-x-4  justify-center">
                <h1 className="lg:text-[4vw] md:text-[4vw] text-3xl font-bold text-titan-white-50 px-1">{text}</h1>
                <div className="lg:h-[3vw] lg:w-[3vw] md:h-[3vw] md:w-[3vw] h-6 w-6 bg-titan-white-50 rounded-full mx-[2vw] mt-1  "></div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Tailwind Animation */}
      <style>
        {`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-100%); }
          }
        `}
      </style>
    </div>
  );
};

export default Marquee;
