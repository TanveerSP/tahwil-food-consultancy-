import React from "react";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { BiWorld } from "react-icons/bi";
import { FcCallback } from "react-icons/fc";

const InfoSectionData = [
  {
    heading: "Chat on us",
    desc1: "Our friendly team is here to help.",
    desc2: "info@tahwil.com",
    icon: <HiChatBubbleLeftRight fontSize={25} />,
  },
  {
    heading: "Visit us",
    desc1: "lorem ipsum dolor sit amet.",
    desc2: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    icon: <BiWorld fontSize={25} />,
  },
  {
    heading: "Call us",
    desc1: "Mon - Fri From 8am to 5pm",
    desc2: "+91 9999999999",
    icon: <FcCallback fontSize={25} />,
  },
];

const InfoSection = () => {
  return (
    <div className="lg:w-[40%]">
      <div className="flex flex-col gap-6 rounded-xl bg-titan-white-200 p-4 lg:p-6">
        {InfoSectionData.map((element, index) => (
          <div
            key={index}
            className="flex flex-col gap-[2px] p-3 text-sm text-mirage-700"
          >
            <div className="flex flex-row items-center gap-3">
              {element.icon}
              <h1 className="text-lg font-semibold text-mirage-900">
                {element.heading}
              </h1>
            </div>
            <p className="font-medium">{element.desc1}</p>
            <p className="font-semibold">{element.desc2}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
