import React from "react";
import ProductScannerUI from "./CarouselComponent";
function MobileOutlay() {
  return (
    <div className="opacity bg-black h-[500px] p-3 pb-0 mt-8 w-80 rounded-t-[50px]">
      <div className="bg-white overflow-hidden flex justify-center rounded-t-[40px] h-full w-full">
        <div className="bg-black w-25 h-8 rounded-full mt-3 opacity-100"></div>
        <ProductScannerUI />
      </div>
    </div>
  );
}

export default MobileOutlay;
