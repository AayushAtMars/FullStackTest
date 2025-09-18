import React from "react";
import doctor from "../assets/doctor.png";

const HeroSection = () => {
  return (
    <section className="pt-16 md:pt-24 pb-32 bg-[#ebebeb] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative px-4 sm:px-6 lg:px-8">


        <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-4 md:gap-6">
          <p className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl text-[#192832] font-bold">
            OUR
          </p>
          <img
            className="h-24 sm:h-32 md:h-40 lg:h-48 w-auto"
            src={doctor}
            alt="doctor"
          />
          <div className="flex flex-col gap-2 sm:gap-4">
            <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl text-[#192832] font-bold">
              FOCUS
            </h1>
            <h2 className="text-lg sm:text-2xl md:text-4xl lg:text-6xl text-[#192832] font-semibold">
              YOUR HEALTH
            </h2>
          </div>
        </div>

 
        <div className="py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start md:items-center">

            <div className="space-y-6 text-center md:text-left">
              <p className="text-gray-600 max-w-sm mx-auto md:mx-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                aliquet dolor libero, eget venenatis mauris.
              </p>
              <button className="px-6 py-3 bg-[#192832] text-white rounded-lg shadow hover:bg-[#28353d] cursor-pointer transition">
                Appointment Now
              </button>
            </div>

            <div className="bg-gray-200 w-full h-64 md:h-80 rounded-lg"></div>

            <div className="flex flex-col gap-6">
              <div className="bg-white shadow-md rounded-lg p-6 text-center">
                <p className="text-2xl font-bold text-[#192832]">95%</p>
                <p className="text-gray-500 text-sm">Satisfaction</p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6 text-center">
                <p className="text-2xl font-bold text-[#192832]">+200</p>
                <p className="text-gray-500 text-sm">Doctors</p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6 text-center">
                <p className="text-2xl font-bold text-[#192832]">85%</p>
                <p className="text-gray-500 text-sm">Success Rate</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:bottom-[-7rem] flex justify-center mt-8 md:mt-0">
          <div className="bg-white shadow-xl rounded-xl p-6 w-64 sm:w-72 text-center">
            <div className="h-56 sm:h-64 w-full bg-gray-200 rounded-lg"></div>
            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              Dr. Sujal
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
