import React from "react";

function FacePile() {
  return (
    <div className="flex flex-col mt-10 lg:flex-row lg:items-center">
      <div className="flex  items-center justify-center mr-3 mb-8 lg:mb-0 gap-2">
        <div className="h-8 w-8 bg-blue-400 rounded-full hover:z-0"></div>
        <div className="h-8 w-8 bg-green-400 rounded-full ml-[-13px] hover:z-0"></div>
        <div className="h-8 w-8 bg-orange-400 rounded-full ml-[-13px] hover:z-0"></div>
        <div className="h-8 w-8 bg-purple-400 rounded-full ml-[-13px] hover:z-0"></div>
        <div className="h-8 w-8 bg-gray-300 opacity-40 rounded-full ml-[-13px] hover:z-0 text-xs text-center items-center flex justify-center">
          3k+
        </div>
      </div>
      <p className="text-xs text-gray-600">
        Trusted by thousands of healthy families
      </p>
    </div>
  );
}

export default FacePile;
