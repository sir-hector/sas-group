import React from "react";

const Hero = () => {
  return (
    <div className="relative">
      <div
        className="bg-no-repeat bg-cover bg-center
      bg-[url('../public/banner1.jpeg')]
      xl:bg-[url('../public/banner1.jpeg')] h-128 flex place-items-center place-content-center flex-col"
      >
        <div className="h-1'2 bg-blue-600 mx-20 rounded">
          <div className="text-6xl text-white font-scand uppercase font-black	p-6 text-center">
            <h2>SASs BUSINESS<br></br> TRANSFORMATION PLAN</h2>
          </div>
        </div>
        <button className="bg-blue-400 text-white px-4 py-2 m-3 font-black text-sm	rounded">
          READ THE RAPORT
        </button>
        <div className="absolute bottom-5 flex gap-2 cursor-pointer">
            <div class="bg-blue-400 h-5 w-5 rounded"></div>
            <div class="bg-blue-500 h-5 w-5 rounded"></div>
            <div class="bg-blue-500 h-5 w-5 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
