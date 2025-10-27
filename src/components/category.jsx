import React from "react";

// Category images
import minutesImg from "../img/minutes.webp";
import mobilesImg from "../img/mobiles.webp";
import appliancesImg from "../img/appliances.webp";
import electronicsImg from "../img/electronics.webp";
import fashionImg from "../img/fashion.webp";
import homeImg from "../img/home.webp";
import beautyImg from "../img/beauty.webp";
import furnitureImg from "../img/furniture.webp";
import flightImg from "../img/flight.webp";
import groceryImg from "../img/grocery.webp";

const Category = () => {
  const categories = [
    { name: "Offers", image: minutesImg },
    { name: "Mobiles", image: mobilesImg },
    { name: "Electronics", image: electronicsImg },
    { name: "TVs", image: appliancesImg },
    { name: "Fashion", image: fashionImg },
    { name: "Home", image: homeImg },
    { name: "Beauty", image: beautyImg },
    { name: "Furniture", image: furnitureImg },
    { name: "Travel", image: flightImg },
    { name: "Grocery", image: groceryImg },
  ];

  return (
    <section>
      {/* Desktop view */}
      <div className="hidden sm:flex flex-wrap justify-between bg-white shadow-sm py-2 px-1">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer mb-4 sm:w-[14%] md:w-[10%] lg:w-[8%]"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-cover rounded-md mb-2"
            />
            <p className="text-sm md:text-sm font-medium text-gray-700 text-center">
              {cat.name}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile view */}
      <div className="flex sm:hidden overflow-x-auto gap-3 py-3 px-2 scrollbar-hide">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="shrink-0 w-[23%] flex flex-col items-center cursor-pointer"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-10 h-10 object-cover rounded-md mb-1"
            />
            <p className="text-xs font-small text-gray-700 text-center">
              {cat.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
