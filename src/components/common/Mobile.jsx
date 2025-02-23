import React, { useState } from "react";
import NavItem from "./NavItem";
import navLinksData from "../../data/navLinksData";
import { Link } from "react-router-dom";

const Mobile = () => {
  let [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex flex-col gap-y-1 p-2 " onClick={toggleMenu}>
        <div
          className={`h-0.5 w-6 transform transition-transform bg-mirage-950  ${
            isOpen ? "rotate-45 translate-y-1" : ""
          }`}
        ></div>
        <div
          className={`h-0.5 w-6 transform transition-transform bg-mirage-950 ${
            isOpen ? "-rotate-45 -translate-y-0.5 " : ""
          }`}
        ></div>
        <div
          className={`h-0.5 w-3 transform transition-transform bg-mirage-950 ${
            isOpen ? "hidden" : ""
          }`}
        ></div>
      </div>

      <div
        className={`absolute top-18 right-0 h-screen  ${
          isOpen ? "md:w-[60vw] w-[100vw]" : "w-[-0vh] overflow-hidden"
        } bg-titan-white-300 transition-all duration-200 ease-in-out z-50 ${
          isOpen
            ? "shadow-[inset_0_-5px_5px_rgba(0,0,0,0.1),-15px_0_25px_rgba(0,0,0,0.15)]"
            : ""
        }  shadow-2xl`}
      >
        <div className="w-full p-4">
          <ul className="w-full rounded-lg space-y-1">
            {navLinksData.map((ele, ind) => (
              <li key={ind} className="w-full">
                <Link
                onClick={() => setIsOpen(false)}
                  to={ele.path}
                  className="block w-full p-3 border-[1px] border-bluemine-200 hover:bg-bluemine-300 transition-all duration-300 rounded-md text-start"
                >
                  {ele.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Mobile;

{
  /* <div>
    <DarkModeToggle setDarkMode={setDarkMode} darkMode={darkMode} />
</div>   */
}
