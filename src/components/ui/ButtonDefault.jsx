import React from "react";
import { BsArrowRightSquareFill } from "react-icons/bs";

const ButtonDefault = ({ text = "Click Me", onclick }) => {
  return (
    <button 
      onClick={onclick}
      className="flex items-center gap-x-3 px-4 py-2 bg-black text-white text-lg font-medium uppercase rounded-lg 
                 transition-all duration-200 transform hover:scale-95 hover:bg-mirage-900"
    >
      {text}
      <BsArrowRightSquareFill size={30} />
    </button>
  );
};

export default ButtonDefault;
