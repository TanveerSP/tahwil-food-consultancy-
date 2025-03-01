import React from "react";

const LoginForm = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold text-start text-mirage-900">
        Login
      </h1>
      <form className="flex flex-col w-full gap-y-4">
        <label>
          <p className="mb-1 text-[1.1rem] text-mirage-900">Email Address</p>
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            className="w-full rounded border border-mirage-400 p-3 text-mirage-800"
          />
        </label>

        <label>
          <p className="mb-1 text-[1.1rem] text-mirage-900">Password</p>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="w-full rounded border border-mirage-400 p-3 text-mirage-800"
          />
        </label>

        <button
          type="submit"
          className="rounded bg-chetwode-blue-600 shadow-md p-3 font-medium text-titan-white-100 hover:bg-chetwode-blue-500"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
