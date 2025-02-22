import React from "react";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-6">
      <h1 className="text-4xl font-bold text-gray-800">
        🚧 Work in Progress 🚧
      </h1>
      <p className="text-lg text-gray-600 mt-4">
        We're working hard to bring you something amazing! Stay tuned. 🚀
      </p>
      <div className="mt-6 animate-pulse">
        <svg
          className="w-16 h-16 text-gray-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4l3 3m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Error;
