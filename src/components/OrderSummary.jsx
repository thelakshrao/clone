import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product, quantity, address } = location.state || {};

  if (!product)
    return <p className="pt-20 text-center">No product selected!</p>;

  const { name, images, price, originalPrice, discount } = product;
  const productImage = images[0];

  const handleContinue = () => {
    navigate("/payment", { state: { product, quantity, address } });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pb-24">
      <div className="bg-white w-full max-w-md shadow-md">
        {/* Header */}
        <div className="flex items-center border-b border-gray-200 px-4 py-3">
          <button
            className="text-2xl text-black mr-3"
            onClick={() => navigate(-1)}
          >
            &larr;
          </button>
          <h5 className="text-lg font-semibold">Order Summary</h5>
        </div>

        {/* Delivered To */}
        <div className="px-4 py-3 border-b border-gray-100">
          <h6 className="text-gray-500 text-sm mb-1">Delivered to:</h6>
          {address ? (
            <>
              <p className="font-semibold">{address.name}</p>
              <p className="text-gray-500 text-sm">
                {address.house}, {address.area}, {address.city} -{" "}
                {address.pincode}
              </p>
              <p className="text-gray-500 text-sm">{address.state}</p>
              <p className="text-gray-500 text-sm">{address.phone}</p>
            </>
          ) : (
            <p className="text-gray-500 text-sm">No address provided</p>
          )}
        </div>

        {/* Product Card */}
        <div className="flex p-4 border-b border-gray-100">
          <img
            src={productImage}
            alt={name}
            className="w-20 h-20 object-contain mr-4"
          />
          <div className="flex-1">
            <p className="font-semibold mb-1">{name}</p>
            <span className="bg-blue-600 text-white text-xs px-1 rounded">
              f Assured
            </span>
            <div className="flex justify-between mt-2 text-sm text-gray-500">
              <p>Qty: {quantity}</p>
              <p>₹{price}</p>
            </div>
          </div>
        </div>

        {/* Price Details */}
        <div className="px-4 py-4 border-b border-gray-100">
          <p className="font-semibold mb-3">Price Details</p>

          <div className="flex justify-between mb-2">
            <span>
              Price ({quantity} item{quantity > 1 ? "s" : ""})
            </span>
            <span>₹{originalPrice}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Discount</span>
            <span className="text-green-600 font-medium">{discount}% off</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Delivery Charges</span>
            <span className="text-green-600 font-bold">FREE Delivery</span>
          </div>
          <div className="flex justify-between mt-2 border-t border-dashed pt-2 font-bold text-lg">
            <span>Total Amount</span>
            <span>₹{price}</span>
          </div>

          <p className="text-green-600 text-sm font-medium mt-3">
            You will save {discount}% off on this order
          </p>
        </div>

        {/* Safe Payment Info */}
        <div className="px-4 py-3 text-center text-sm text-gray-500">
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="green"
              className="inline-block mr-1"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.497 5.384 7.3a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.08-.022z" />
            </svg>
            Safe and secure payments. Easy returns.
            <br />
            100% Authentic products
          </p>
        </div>
      </div>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 w-full max-w-md bg-white shadow-inner flex justify-between items-center px-4 py-3">
        <div>
          <span className="line-through text-gray-500 text-sm mr-2">
            ₹{originalPrice}
          </span>
          <span className="font-bold text-lg">₹{price}</span>
        </div>
        <button
          onClick={handleContinue}
          className="bg-yellow-400 hover:bg-yellow-500 px-6 py-2 font-bold rounded"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
