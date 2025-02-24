import React from "react";

const AnimatedBtn = ({ text = "Click Me", onClickBtn }) => {
  return (
    <button 
    onClick={onClickBtn}
    className="border-animate px-5 py-2 text-lg font-medium transition-transform duration-300 ease-in-out hover:scale-105">
      {text}
    </button>
  );
};

export default AnimatedBtn;
