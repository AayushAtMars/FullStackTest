import React from "react";

const SlotSchedule = () => {
  return (
    <div className="bg-[#192832] rounded-2xl shadow-md flex flex-col md:flex-row items-center justify-between p-6 md:p-8 max-w-4xl mx-auto mt-10">

      <div className="text-white max-w-md text-center md:text-left mb-6 md:mb-0">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Claim Your Slot <br /> Schedule Instantly
        </h2>
        <p className="text-gray-300 text-sm md:text-base mb-5">
          Experience the convenience of instant scheduling and save time for the
          things that matter most.
        </p>
        <button className="bg-white text-[#192832] font-medium px-5 py-2 rounded-full hover:bg-gray-200 transition">
          Book Your Slot Now
        </button>
      </div>

      <div className="bg-gray-300 w-full h-40 md:w-56 md:h-40 rounded-md"></div>
    </div>
  );
};

export default SlotSchedule;
