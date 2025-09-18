import React from "react";

const SlotSchedule = () => {
  return (
    <div className="bg-[#192832] rounded-2xl shadow-md flex items-center justify-between p-8 py-18 max-w-4xl mx-auto mt-10">
      <div className="text-white max-w-md">
        <h2 className="text-2xl font-bold mb-3">
          Claim Your Slot <br /> Schedule Instantly
        </h2>
        <p className="text-gray-300 text-sm mb-5">
          Experience the convenience of instant scheduling and save time for the things that matter most.
        </p>
        <button className="bg-white text-[#192832] font-medium px-5 py-2 rounded-full hover:bg-gray-200 transition">
          Book Your Slot Now
        </button>
      </div>

      <div className="bg-gray-300 w-56 h-40 rounded-md"></div>
    </div>
  );
};

export default SlotSchedule;