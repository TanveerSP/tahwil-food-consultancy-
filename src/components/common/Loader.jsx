import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-titan-white-100">
      <div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
        <div className="flex justify-center">
          <div
            className="animate-spin inline-block size-10 border-[4px] border-current border-t-transparent text-chetwode-blue-600 rounded-full"
            role="status"
            aria-label="loading"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
