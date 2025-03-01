import React from "react";

const LogInBtn = ({ text = "Click Me", onclick }) => {
  return (
    <button onClick={onclick}
    className="py-2 px-4 text-md border-[1px] font-medium rounded-lg text-mirage-600 border-mirage-500 hover:bg-chetwode-blue-600 hover:text-titan-white-50 transition-all ease-in-out duration-300"
    >
      <span>{text}</span>
    </button>
  );
};

export default LogInBtn;
