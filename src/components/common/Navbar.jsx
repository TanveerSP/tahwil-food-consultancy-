import React from "react";
import { Link } from "react-router-dom";
import Mobile from "./Mobile";
import NavItem from "./NavItem";
import navLinksData from "../../data/navLinksData";
import AuthBtn from "../ui/AuthBtn";

const Navbar = () => {
  return (
    <div
      className={`fixed backdrop-blur-3xl h-18 py-4 shadow-2xl flex w-full pt-4 z-50 items-center justify-center transition-all duration-500`}
    >
      <div className=" flex w-full  mx-auto rounded-2xl px-5 items-center justify-between">
        {/* First Div */}
        <Link to={"/"}>
          <div className="text-2xl font-bold">TAHWIL</div>
        </Link>

        {/* Second Div */}
        <div className="hidden lg:inline-block">
          <nav className=" p-4 flex justify-between items-center">
            <ul className="flex gap-x-4 ">
              {navLinksData.map((link, ind) => (
                <NavItem key={ind} name={link.name} path={link.path} />
              ))}
            </ul>
          </nav>
        </div>

        {/* Theerd Div */}
        <div className="flex gap-x-4 items-center justify-center">
          <div>
            <AuthBtn props={"Register"} />
          </div>

          {/* Mobile navigation with dark mode toggle */}
          <nav className="inline-block lg:hidden ">
            <Mobile />
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
