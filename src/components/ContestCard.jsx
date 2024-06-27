import React from "react";

const ContestCard = ({ title, rank }) => {
  return (
    <div className="lg:flex items-center bg-[#221f1f] hover:bg-[#1f2937] p-2 rounded-lg">
      <div className="flex">
        <p className="md:text-2xl text-white mr-8">{title}</p>
      </div>
      <div className="flex flex-grow">
        <p className="md:text-2xl text-white mr-8">{rank}</p>
        <div className="hidden sm:block ml-auto text-white font-bold">
          <button className="bg-orange-900 hover:bg-orange-600 py-1 px-4 rounded mr-4">
            比賽經歷
          </button>
          <button className="bg-orange-900 hover:bg-orange-600 py-1 px-4 rounded mr-4">
            官方連結
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContestCard;
