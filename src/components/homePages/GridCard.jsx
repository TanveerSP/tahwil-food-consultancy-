import React from "react";
import MyImg from "../../assets/AboutMe.jpg";

const GridCard = () => {
  return (
    <section className=" min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl w-full">
        {/* Left Image Card */}
        <div className="relative rounded-3xl overflow-hidden bg-gray-200 shadow-lg md:col-span-1">
          <img src={MyImg} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
            <button className="bg-white text-black px-4 py-2 rounded-full mb-4">
              Let's Start us
            </button>
            <h2 className="text-white text-3xl font-semibold">
              Expert Food Safety & Consultancy Services Since 2024
            </h2>
          </div>
        </div>

        {/* Right Side - 4 Cards in a 2x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:col-span-2">
          {/* Core Values Title */}
          <div className="rounded-3xl bg-white shadow-lg flex items-center justify-center p-6 sm:col-span-2">
            <h2 className="text-4xl font-semibold text-gray-900">Our Core Services</h2>
          </div>
          
          {/* Value Cards */}
          <div className="rounded-3xl bg-rio-grande-500 p-6 shadow-lg flex flex-col justify-between">
            <div className="text-4xl">📜</div>
            <h3 className="text-2xl font-semibold text-rio-grande-50 mt-4">Food Safety Training</h3>
            <p className="text-black mt-2">
              Comprehensive food safety training programs for individuals & businesses to ensure compliance.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg flex flex-col justify-between">
            <div className="text-4xl">🏆</div>
            <h3 className="text-2xl font-semibold text-black mt-4">Certification Assistance</h3>
            <p className="text-black mt-2">
              Helping food businesses achieve necessary certifications for industry standards and compliance.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg flex flex-col justify-between">
            <div className="text-4xl">🔍</div>
            <h3 className="text-2xl font-semibold text-black mt-4">Hygiene Audits</h3>
            <p className="text-black mt-2">
              Conducting thorough hygiene inspections to ensure the highest food safety standards.
            </p>
          </div>

          <div className="rounded-3xl bg-rio-grande-500 p-6 shadow-lg flex flex-col justify-between">
            <div className="text-4xl">🍽️</div>
            <h3 className="text-2xl font-semibold text-rio-grande-50 mt-4">Food Quality Consulting</h3>
            <p className="text-black mt-2">
              Expert guidance on maintaining food quality, compliance, and best practices for the industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridCard;
