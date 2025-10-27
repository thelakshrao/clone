import React, { useMemo } from "react";
import products from "../data/products";
import { useNavigate } from "react-router-dom";
import Assured from "../images/Assured.png";

const ProductGrid = () => {
  const navigate = useNavigate();

  // Shuffle products once per render
  const shuffledProducts = useMemo(() => {
    const arr = [...products]; // copy array
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, []);

  return (
    <section className="bg-transparent px-2 sm:px-4 md:px-8 py-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-5">
        {shuffledProducts.map((item) => (
          <div
            key={item.id + Math.random()} // optional: avoid key collision if IDs repeat
            onClick={() => navigate(`/product/${item.id}`)}
            className="cursor-pointer bg-white hover:shadow-md transition-all duration-200 p-3"
          >
            <div className="w-full flex justify-center">
              <img
                src={item.images[0]}
                alt={item.description}
                className="object-contain w-32 h-32 sm:w-36 sm:h-36"
              />
            </div>

            <div className="mt-2 justify-center">
              <h3 className="font-medium text-gray-800 text-sm sm:text-base truncate">
                {item.name}
              </h3>

              <div className="flex items-center gap-1 mt-1">
                <span className="text-green-600 font-semibold text-sm">
                  {item.discount}% Off
                </span>
                <span className="text-gray-400 line-through text-xs">
                  ₹{item.originalPrice}
                </span>
              </div>

              <div className="flex items-center gap-10 mt-1">
                <p className="text-black font-bold text-lg sm:text-xl">
                  ₹{item.price}
                </p>
                {item.assured && (
                  <img
                    src={Assured}
                    alt="Assured"
                    className="w-14 sm:w-16 object-contain"
                  />
                )}
              </div>

              <p className="text-gray-500 text-center text-xs mt-1">
                Free Delivery in Two Days
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
