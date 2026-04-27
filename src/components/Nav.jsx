import React from "react";

function Nav() {
  return (
    <div className="bg-[#F7FBF7] p-3 rounded-xl rounded-b-none border border-b-0 border-[#d3dbd3] flex items-center justify-between">
      <img src="/olive.png" alt="logo" className="h-13 w-25" />

      {/* Navigation Links */}
      <div className="flex gap-4">
        <span className="text-sm text-gray-700 p-2 hover:bg-[#EFF3EF] rounded-md cursor-pointer">
          Solutions
        </span>
        <span className="text-sm text-gray-700 p-2 hover:bg-[#EFF3EF] rounded-md cursor-pointer">
          Feature
        </span>
        <span className="text-sm text-gray-700 p-2 hover:bg-[#EFF3EF] rounded-md cursor-pointer">
          Pricing
        </span>
        <span className="text-sm text-gray-700 p-2 hover:bg-[#EFF3EF] rounded-md cursor-pointer">
          Blog
        </span>
        <span className="text-sm text-gray-700 p-2 hover:bg-[#EFF3EF] rounded-md cursor-pointer">
          Restaurant
        </span>
        <span className="text-sm text-gray-700 p-2 hover:bg-[#EFF3EF] rounded-md cursor-pointer">
          Food
        </span>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button className="text-gray-700 font-light">Sign in</button>
        <button className="rounded-full bg-green-950 text-white p-4">
          Get Olive
        </button>
      </div>
    </div>
  );
}

export default Nav;
