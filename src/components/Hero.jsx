import React from "react";
import FacePile from "./FacePile";
import MobileOutlay from "./MobileOutlay";

function Hero() {
  return (
    <div className="flex flex-col bg-[#F7FBF7] rounded-xl rounded-t-none border border-t-0 border-[#d3dbd3]">
      <div className="w-full flex justify-center align-center">
        {" "}
        <FacePile />
      </div>
      <div className="w-full gap-10 mt-15 flex flex-col items-center justify-center">
        <h1 className="lg:text-7xl text-3xl text-green-950 font-semibold">
          The Safest Way to <br></br> Shop for Groceries
        </h1>
        <p className="text-center text-xs text-lg text-gray-500">
          Use the Olive Food Scanner App to Instantly Eliminate <br /> Harmful
          Ingredients from Your Family's Diet and Get <br /> Expert-Backed Food
          Insights
        </p>
        <button className="cursor-pointer hover:opacity-80 p-2 pl-4 pr-4 flex items-center gap-2 text-sm text-white bg-green-950 rounded-full">
          <img src="/apple.png" alt="" className="h-5 w-5" /> Download for iOS
        </button>
      </div>
      <div className="w-full flex items-center justify-center ">
        <MobileOutlay />
      </div>
    </div>
  );
}

export default Hero;
