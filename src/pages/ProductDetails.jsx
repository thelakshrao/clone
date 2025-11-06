import React, { useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";
import Logo from "../images/flipkart-plus-logo.png";
import Rate from "../images/rate.png";
import Flipcart from "../images/flipcart.png";

// ✅ Like & Share Buttons Component
const ActionButtons = () => (
  <div className="absolute top-2 right-2 flex flex-col space-y-3">
    {/* Like Button */}
    <button className="bg-white/90 p-2 rounded-full shadow-md text-gray-500 hover:text-red-500 transition">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </button>

    {/* Share Button */}
    <button className="bg-white/90 p-2 rounded-full shadow-md text-gray-500 hover:text-blue-500 transition">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 12v8h16v-8M12 16V4m0 0l-4 4m4-4l4 4"
        />
      </svg>
    </button>
  </div>
);

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));
  const [selected, setSelected] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  if (!product) return <p className="pt-20 text-center">Product not found!</p>;

  const { price, originalPrice, discount, description, images, name } = product;

  // ✅ Swipe handling
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // swipe left
      setSelected((prev) => (prev + 1) % images.length);
    }
    if (touchEndX.current - touchStartX.current > 50) {
      // swipe right
      setSelected((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }
  };

  return (
    <div className="bg-white mb-10 min-h-screen">
      <div className="max-w-screen-xl mx-auto">
        {/* ---------- IMAGE SLIDER ---------- */}
        {/* ---------- IMAGE SLIDER ---------- */}
        <div
          className="relative w-full overflow-hidden flex justify-center items-center"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src={images[selected]}
            alt={name}
            className="w-full max-h-[450px] object-contain p-4"
          />
          <ActionButtons />
        </div>

        {/* ---------- DOTS BELOW IMAGE ---------- */}
        <div className="flex justify-center mt-3 gap-1.5">
          {images.map((_, i) => (
            <span
              key={i}
              className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-200 ${
                i === selected ? "bg-gray-800 scale-110" : "bg-gray-300"
              }`}
              onClick={() => setSelected(i)}
            />
          ))}
        </div>

        {/* ---------- DIVIDER ---------- */}
        <hr className="my-5 border-gray-200" />

        {/* ---------- PRODUCT INFO ---------- */}
        <div className="p-4">
          <p className="text-gray-700 text-sm mt-2">{name}</p>
          {/* Logo */}
          <img
            src={Logo}
            alt="Logo"
            className="w-10 "
            onClick={() => navigate("/")}
          />

          <div className="flex items-end mt-1 gap-3">
            <span className="text-green-600 text-base px-2 py-0.5 font-bold">
              {discount}% off
            </span>
            <span className="text-gray-400 line-through text-lg">
              ₹{originalPrice}
            </span>
            <span className="text-lg font-bold text-black">₹{price}</span>
          </div>
        </div>
        {/* ---------- DIVIDER ---------- */}
        <hr className="my-2 border-gray-200" />

        {/* dela offer */}
        <div className="text-l justify-center items-center text-center">
          Offer ends in 1:13
        </div>

        {/* ---------- DIVIDER ---------- */}
        <hr className="my-2 border-gray-200" />

        {/* ---------- DIVIDER ---------- */}
        <hr className="my-2 border-gray-200" />

        {/* rate */}
        <div className="flex items-center">
          <img src={Rate} alt="rate" className="w-10" />
          <p className="text-xs">8652+ Sold in Last 7 Days</p>
        </div>

        {/* ---------- DIVIDER ---------- */}
        <hr className="my-2 border-gray-200" />

        {/* flipcart */}
        <div className="flex justify-center items-center gap-3">
          <img src={Flipcart} alt="warranty" className="w-10" />
          <p className="text-sm">1 Year Manufacture Warranty</p>
        </div>
        {/* ---------- DIVIDER ---------- */}
        <hr className="my-2 border-gray-200" />

        {/* ---------- ALL IMAGES BELOW WARRANTY ---------- */}
        <div className="mt-2">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${name} ${idx + 1}`}
              className="w-full object-contain block"
              style={{ margin: 0, padding: 0 }} // ensures no space between images
            />
          ))}
        </div>
      </div>

      {/* ---------- FIXED BUY BUTTONS ---------- */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-20">
        <div className="flex h-12 max-w-screen-xl mx-auto">
          <button className="flex-1 bg-white text-xs text-black font-semibold flex items-center justify-center hover:bg-gray-100 transition">
            Add to Cart
          </button>

          <button
            className="flex-1 bg-yellow-500 text-black font-semibold text-xs hover:bg-yellow-400 transition"
            onClick={() =>
              navigate("/add-address", {
                state: {
                  product: product, // pass entire product object
                  quantity: 1, // you can make this dynamic if user selects qty
                },
              })
            }
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
