import React from "react";
import { Link } from "react-router-dom";
import Mobile from "./Mobile";
import NavItem from "./NavItem";
import navLinksData from "../../data/navLinksData";
import AuthBtn from "../ui/AuthBtn";
import { motion, useScroll } from "framer-motion";

const Navbar = () => {
  const { scrollYProgress } = useScroll(); // Track scroll progress

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Navbar */}
      <div className="backdrop-blur-sm h-18 py-4 shadow-2xl flex w-full pt-4 items-center justify-center transition-all duration-500">
        <div className="flex w-full mx-auto rounded-2xl px-5 items-center justify-between">
          {/* First Div */}
          <Link to={"/"}>
            <div className="text-2xl text-chetwode-blue-700 font-bold">TAHWIL</div>
          </Link>

          {/* Second Div */}
          <div className="hidden lg:inline-block">
            <nav className="p-4 flex justify-between items-center">
              <ul className="flex gap-x-4">
                {navLinksData.map((link, ind) => (
                  <NavItem key={ind} name={link.name} path={link.path} />
                ))}
              </ul>
            </nav>
          </div>

          {/* Third Div */}
          <div className="flex gap-x-4 items-center justify-center">
            <div>
              <AuthBtn props={"Register"} />
            </div>

            {/* Mobile navigation */}
            <nav className="inline-block lg:hidden">
              <Mobile />
            </nav>
          </div>
        </div>
      </div>

      {/* Scroll Progress Bar (Under Navbar) */}
      <motion.div
        className="h-1 bg-chetwode-blue-600 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
};

export default Navbar;
