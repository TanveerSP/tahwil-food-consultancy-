import React from "react";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { BsArrowLeftSquareFill } from "react-icons/bs";

const ButtonDefault = () => {
  return (
    <button className="bg-black text-white text-lg font-medium flex items-center  p-2 gap-2 rounded-lg">
      Discover Our Solution
      <BsArrowRightSquareFill 
      size={35}
      />
    </button>
  );
};

export default ButtonDefault;
