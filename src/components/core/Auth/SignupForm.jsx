import React from "react";

const SignupForm = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold text-start text-mirage-900">
        Sign Up
      </h1>
      <form className="flex flex-col w-full gap-y-4">
        <div className="flex justify-between gap-4">
          <label className="w-1/2">
            <p className="mb-1 text-[1.1rem] text-mirage-900">First Name</p>
            <input
              type="text"
              name="firstName"
              placeholder="Enter first name"
              className="w-full rounded border border-mirage-400 p-3 text-mirage-800"
            />
          </label>
          <label className="w-1/2">
            <p className="mb-1 text-[1.1rem] text-mirage-900">Last Name</p>
            <input
              type="text"
              name="lastName"
              placeholder="Enter last name"
              className="w-full rounded border border-mirage-400 p-3 text-mirage-800"
            />
          </label>
        </div>

        <label>
          <p className="mb-1 text-[1.1rem] text-mirage-900">Email</p>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full rounded border border-mirage-400 p-3 text-mirage-800"
          />
        </label>

        <div className="flex justify-between gap-4">
          <label className="w-1/2">
            <p className="mb-1 text-[1.1rem] text-mirage-900">Password</p>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full rounded border border-mirage-400 p-3 text-mirage-800"
            />
          </label>
          <label className="w-1/2">
            <p className="mb-1 text-[1.1rem] text-mirage-900">
              Confirm Password
            </p>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              className="w-full rounded border border-mirage-400 p-3 text-mirage-800"
            />
          </label>
        </div>

        <button
          type="submit"
          className="rounded bg-chetwode-blue-600 shadow-md p-3 font-medium text-titan-white-100 hover:bg-chetwode-blue-500"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
