import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { Link } from "react-router-dom";
import Loader from "../../common/Loader";

const Template = ({ title, desc1, desc2, formType }) => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex min-h-[100vh] items-center justify-center px-6 py-12">
      {loading ? (
        <Loader />
      ) : (
        <div className="w-full max-w-6xl flex flex-col-reverse md:flex-row items-center gap-y-8 md:gap-x-12 rounded-2xl overflow-hidden">
          {/* Left Section */}
          <div className="hidden md:flex flex-col justify-between p-10 w-1/2 bg-chetwode-blue-600 text-white rounded-l-2xl relative">
            <div className="absolute right-0 top-1/4 w-20 h-20 bg-titan-white-100 rounded-full translate-x-1/2 -translate-y-1/2"></div>

            <h1 className="text-4xl font-semibold flex items-center gap-x-2">
              <span className="font-medium text-4xl">⧉</span> Tahwil
            </h1>

            <h2 className="md:text-3xl lg:text-4xl font-bold max-w-[400px] leading-tight text-white">
              {title}
            </h2>

            <div className="space-y-2 max-w-xl text-white opacity-80">
              <p className="text-lg font-light">{desc1}</p>
              <p className="text-lg font-light">{desc2}</p>
            </div>

            <p className="text-lg font-medium">
              {formType === "signup" ? "Already have an account?" : "New here?"}
              <Link
                to={formType === "signup" ? "/login" : "/sign-up"}
                className="ml-1 underline hover:text-gray-200 transition"
              >
                {formType === "signup" ? "Log in" : "Sign up"}
              </Link>
            </p>

            <div className="mt-4">
              <span className="text-sm opacity-80">They trust us:</span>
              <div className="flex space-x-4 mt-2">
                <span className="w-16 h-8 bg-white opacity-80 rounded-md"></span>
                <span className="w-16 h-8 bg-white opacity-80 rounded-md"></span>
                <span className="w-16 h-8 bg-white opacity-80 rounded-md"></span>
                <span className="w-16 h-8 bg-white opacity-80 rounded-md"></span>
                <span className="w-16 h-8 bg-white opacity-80 rounded-md"></span>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="w-full md:w-1/2 p-2 lg:p-8 md:p-1 max-w-[450px] mx-auto">
            {formType === "login" ? <LoginForm /> : <SignupForm />}
          </div>
        </div>
      )}
    </div>
  );
};

export default Template;
