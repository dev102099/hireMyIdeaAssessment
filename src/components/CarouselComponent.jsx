import React, { useState } from "react";
import { Heart, Share } from "lucide-react";

const DUMMY_DATA = [
  {
    id: 1,
    name: "SourLittles",
    brand: "YumEarth",
    score: 84,
    status: "Excellent",
    color: "text-green-500",
    bgColor: "bg-green-500",
    image: "https://placehold.co/100x140/A3E635/white?text=Sour\nLittles",
    bgImage: "https://placehold.co/300x200/A3E635/white?text=YumEarth",
    review:
      "This product's score is impacted mainly by the presence of processed sugars like organic cane sugar and organic rice syrup, which can be concerning for your family's health, especially since you prefer to avoid processed foods and harmful additives. While it does have some organic ingredients, the sugars can still affect your kids' energy levels and overall well-being, so it's good to enjoy treats like this in moderation.",
  },
  {
    id: 2,
    name: "Gradea Raw Pure Jersey Milk",
    brand: "Claravale Farm",
    score: 100,
    status: "Excellent",
    color: "text-green-500",
    bgColor: "bg-green-500",
    image: "https://placehold.co/100x140/fef08a/black?text=Milk",
    bgImage: "https://placehold.co/300x200/fef08a/black?text=Claravale+Farm",
    review:
      "This product scored perfectly because it contains no processed sugars, seed oils, or harmful additives, making it a great option for your family's health, especially since you're looking to avoid processed foods and additives while still enjoying an occasional treat.",
  },
  {
    id: 3,
    name: "Late July Snacks Thin And Crispy...",
    brand: "Late July",
    score: 58,
    status: "Limit",
    color: "text-orange-500",
    bgColor: "bg-orange-500",
    image: "https://placehold.co/100x140/fdba74/white?text=Chips",
    bgImage: "https://placehold.co/300x200/fdba74/white?text=Late+July",
    review:
      "This snack's score is primarily affected by the presence of organic sunflower oil and safflower oil, which are considered seed oils and can be less healthy for your family. While it does have some organic ingredients, the high level of seed oils suggests it's best to enjoy this treat only occasionally.",
  },
];

export default function ProductScannerUI() {
  const [activeIndex, setActiveIndex] = useState(1);
  const activeProduct = DUMMY_DATA[activeIndex];
  const totalItems = DUMMY_DATA.length;

  // Calculates the shortest distance between the current item and the active item
  // to create an infinite looping effect.
  const getOffset = (index) => {
    let offset = index - activeIndex;
    if (offset > totalItems / 2) offset -= totalItems;
    if (offset < -totalItems / 2) offset += totalItems;
    return offset;
  };

  const getCardStyle = (index) => {
    const offset = getOffset(index);

    if (offset === 0) {
      return "translate-x-0 scale-100 opacity-100 z-20 cursor-default";
    } else if (offset === -1) {
      return "-translate-x-[110%] scale-[0.85] opacity-40 z-10 cursor-pointer hover:opacity-60";
    } else if (offset === 1) {
      return "translate-x-[110%] scale-[0.85] opacity-40 z-10 cursor-pointer hover:opacity-60";
    } else {
      return `${offset < 0 ? "-" : ""}translate-x-[200%] scale-75 opacity-0 z-0 pointer-events-none`;
    }
  };

  return (
    // Replaced the hardcoded background colors with transparent so it fits your wrapper
    <div className="min-h-screen bg-transparent flex justify-center pb-12 font-sans text-gray-900">
      <div className="w-full max-w-md bg-transparent relative overflow-hidden flex flex-col pt-12">
        {/* Top Carousel Section */}
        <div className="relative h-48 w-full flex items-center justify-center mb-6">
          {DUMMY_DATA.map((product, index) => {
            const offset = getOffset(index);
            return (
              <div
                key={product.id}
                onClick={() => {
                  // Only allow clicking the immediate left/right neighbors to navigate
                  if (Math.abs(offset) === 1) {
                    setActiveIndex(index);
                  }
                }}
                className={`absolute transition-all duration-500 ease-out flex items-center justify-center w-35 h-30 rounded-[2rem] overflow-hidden shadow-lg ${getCardStyle(index)}`}
              >
                <img
                  src={product.bgImage}
                  alt={product.name}
                  className="object-cover w-full h-full"
                />
              </div>
            );
          })}
        </div>

        {/* Details Section */}
        <div className="px-5 flex flex-col gap-4 w-77">
          {/* Main Product Card */}
          <div className="bg-white rounded-3xl p-5 shadow-sm flex items-center gap-4">
            <div className="w-12 h-15 flex-shrink-0 rounded-xl overflow-hidden bg-gray-100 border border-gray-100">
              <img
                src={activeProduct.image}
                alt="thumbnail"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 flex flex-col overflow-hidden">
              <h2 className="text-xs font-bold leading-tight mb-1 truncate">
                {activeProduct.name}
              </h2>
              <p className="text-xs text-gray-500 mb-3">
                {activeProduct.brand}
              </p>

              <div className="flex items-center gap-2">
                <div
                  className={`w-3 h-3 rounded-full ${activeProduct.bgColor}`}
                ></div>
                <span className="font-bold text-xs text-base">
                  {activeProduct.score}/100
                </span>
                <span className={`text-xs font-medium ${activeProduct.color}`}>
                  {activeProduct.status}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-4 text-gray-400">
              <button className="hover:text-gray-600 transition-colors">
                <Share size={20} />
              </button>
              <button className="hover:text-red-500 transition-colors">
                <Heart size={20} />
              </button>
            </div>
          </div>

          {/* Oliver Says (Review) Card */}
          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                <img
                  src="https://placehold.co/40x40/e2e8f0/a1a1aa?text=O"
                  alt="Oliver"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-base">Oliver Says:</h3>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              "{activeProduct.review}"
            </p>
          </div>

          {/* Breakdown Header */}
          <div className="px-2 mt-2">
            <h3 className="font-bold text-lg">Breakdown</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
