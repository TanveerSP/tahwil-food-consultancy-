import React from "react";
import Focus from "../../assets/svg/focus.svg";
import Safety from "../../assets/svg/safety.svg";
import Training from "../../assets/svg/training.svg";

const cards = [
  {
    title: "Food Safety Training",
    titleTwo: "Comprehensive Food Safety Training",
    icon: Safety,
    text: "Our training programs ensure your team is equipped with essential knowledge and practical skills to maintain high food safety standards. Topics include basic hygiene, HACCP principles, regulatory compliance, risk assessment, contamination prevention, and best practices for handling, storing, and preparing food safely. Our expert-led sessions are designed to enhance awareness, improve efficiency, and ensure full compliance with industry regulations.",
  },
  {
    title: "HACCP Implementation",
    titleTwo: "Seamless HACCP Implementation",
    icon: Focus,
    text: "Our expert team guides you through the entire HACCP process, from hazard identification to implementation and monitoring, ensuring your food safety management system is fully compliant, effective, and tailored to your specific needs. We provide step-by-step assistance, documentation support, and training to help your business maintain the highest safety standards and regulatory compliance.",
  },
  {
    title: "Food Safety Consulting",
    titleTwo: "Expert Food Safety Consulting",
    icon: Training,
    text: "We offer tailored consulting services to enhance your food safety practices, covering everything from risk assessments and gap analysis to certification support and regulatory compliance. Our expert guidance ensures your business meets industry standards, minimizes risks, and maintains a strong food safety culture.",
  },
];

const AnimatedCards = () => {
  return (
    <div className="flex flex-wrap justify-center px-4 py-8 md:px-8 lg:px-16 gap-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="group relative w-full sm:w-[90%] md:w-[45%] lg:w-1/3 xl:w-1/4 h-auto rounded-2xl overflow-hidden transition-all duration-300 shadow-lg bg-white hover:scale-105 hover:shadow-2xl"
        >
          {/* Gradient Background */}
          <div
            className="absolute inset-0 bg-titan-white-200 "
          ></div>
          {/* Content */}
          <div className="relative p-6 flex flex-col justify-center gap-y-6 text-white transform transition-all duration-500 group-hover:translate-y-[-10px] group-hover:scale-105">
            <div className="flex items-center gap-x-2">
              <img src={card.icon} alt={card.title} className="w-12 h-12" />
              <span className="text-2xl font-semibold text-gray-900">
                {card.title}
              </span>
            </div>

            {/* Text Section */}
            <div className="opacity-90 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
              <p className="text-lg font-medium text-gray-900">
                {card.titleTwo}
              </p>
              <p className="text-sm text-gray-700">{card.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnimatedCards;
