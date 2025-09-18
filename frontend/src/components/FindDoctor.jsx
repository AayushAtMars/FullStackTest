import React from "react";

const FindDoctor = () => {
  return (
    <div className="bg-[#192832] max-w-7xl mx-auto py-5 rounded-xl">
      <h2 className="px-10 text-2xl font-bold text-white">
        Find A Doctor
      </h2>
      <div className="p-4 rounded-lg flex items-center justify-around gap-4">
        <input
          type="text"
          placeholder="Name"
          className="bg-transparent border border-gray-600 text-white placeholder-gray-400 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#192832]"
        />
        <input
          type="text"
          placeholder="Specialist"
          className="bg-transparent border border-gray-600 text-white placeholder-gray-400 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#192832]"
        />
        <div className="flex items-center gap-2">
          <span className="text-white">Available</span>
          <input type="checkbox" className="w-5 h-5" />
        </div>
        <button className="bg-white text-black font-semibold px-8 py-2 rounded-lg shadow hover:bg-gray-200 transition">
          Search
        </button>
      </div>
    </div>
  );
}

export default FindDoctor;