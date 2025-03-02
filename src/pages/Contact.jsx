import React from "react";
import InfoSection from "../components/ContactPage/InfoSection";
import Footer from "../components/common/Footer"

const Contact = () => {
  return (
    <div className="mt-18">
      <div className="mx-auto flex w-11/12 max-w-maxContent mb-10 mt-8 flex-col justify-between gap-10 text-white lg:flex-row ">
        <InfoSection />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
