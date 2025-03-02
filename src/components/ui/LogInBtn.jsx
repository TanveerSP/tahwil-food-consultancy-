import React from "react";

const LogInBtn = ({ text = "Click Me", onclick }) => {
  return (
    <button onClick={onclick}
    className="py-[12px] px-4 font-medium text-md border-[1px] rounded-lg text-mirage-900 border-mirage-900 "
    >
      <span>{text}</span>
    </button>
  );
};

export default LogInBtn;
