import React from "react";
import footerLink from "../../data/footerLink";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full bg-mirage-950 text-white px-4 sm:px-6 md:px-8 lg:px-14 py-10">
      {/* Wrapper for content and links */}
      <div className="flex flex-col gap-y-15 lg:flex-row lg:justify-between">
        {/* Footer Description */}
        <div className="max-w-xl space-y-4">
          <div className="flex items-center gap-x-2">
            {/* Placeholder Logo */}
            <div className="text-titan-white-200 text-4xl font-bold">
              ⧉
            </div>{" "}
            <h1 className="text-2xl text-titan-white-200 font-bold">TAHWIL</h1>
          </div>

          <p className="text-lg font-medium max-w-3xl leading-relaxed">
            Stay connected with us for the latest updates, insights, and
            solutions. Explore our services, learn more about our company, and
            reach out anytime.
          </p>
        </div>

        {/* Footer Links */}
        <div className="max-w-3xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-y-8 gap-x-10">
            {footerLink.map((section, index) => (
              <div
                key={index}
                className="flex lg:flex-col space-y-5 items-start justify-between "
              >
                <div>
                  <h3 className="text-sm uppercase tracking-wide font-semibold text-titan-white-100">
                    {section.title}
                  </h3>
                </div>

                <div className="py-0 lg:w-auto h-[20vh] md:w-[30vw] w-[50vw] space-y-4 ">
                  {section.links.map((link, ind) => (
                    <div
                      key={ind}
                      className="flex flex-col items-start justify-between"
                    >
                      <div className="relative w-fit group">
                        {/* Link Text */}
                        <Link
                          to={link.path}
                          className="block text-mirage-200 hover:text-lg transition-all ease-in-out"
                        >
                          {link.title}
                        </Link>

                        {/* Underline Animation */}
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-titan-white-400 transition-all duration-300 group-hover:w-full"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* End of Footer */}
      <div className="flex lg:flex-row md:flex-row flex-col space-y-2  justify-between">
        <div className="text-mirage-400">info@tahwil.com</div>
        {/* <div className="text-titan-white-200 text-4xl font-bold">⧉</div> */}
        <div className="text-mirage-400">
          Copyright © Tahwil Consultancy 2024
        </div>
      </div>
    </div>
  );
};

export default Footer;
