import React from "react";
import { FaAngleRight } from "react-icons/fa6";

const AuthBtn = ({ text = "Click Me", onclick }) => {
  return (
    <button
      onClick={onclick}
      className="py-[12px] px-4 text-md border-[1px] border-chetwode-blue-600 shadow-lg shadow-chetwode-blue-300 font-semibold rounded-lg text-titan-white-50 bg-chetwode-blue-600 flex items-center gap-x-2 transition-shadow duration-300 ease-in-out hover:shadow-none"
    >
      <span>{text}</span>
      <FaAngleRight />
    </button>
  );
};

export default AuthBtn;
