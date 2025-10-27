import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const states = [
  { code: "AP", name: "Andhra Pradesh" },
  { code: "KA", name: "Karnataka" },
  { code: "MH", name: "Maharashtra" },
];

const AddAddress = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { product, quantity } = location.state || {}; // Receive product info from Product Details

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Address Saved!");
    // Navigate to Order Summary and pass product info
    navigate("/order-summary", { state: { product, quantity } });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10">
      <div className="bg-white p-6 md:p-8 rounded-lg w-full max-w-md shadow-md">
        {/* Header */}
        <div className="flex items-center border-b border-gray-200 pb-3 mb-5">
          <button
            onClick={() => navigate(-1)}
            className="text-2xl text-black mr-3"
          >
            &larr;
          </button>
          <h5 className="text-lg font-semibold">Add delivery address</h5>
        </div>

        {/* Steps */}
        <ul className="flex justify-between mb-5">
          {["Address", "Order Summary", "Payment"].map((step, index) => (
            <li key={index} className="flex flex-col items-center flex-1">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-white mb-1 ${
                  index === 0 ? "bg-orange-500" : "bg-gray-400"
                }`}
              >
                {index + 1}
              </div>
              <span
                className={`text-sm ${
                  index === 0 ? "text-black font-bold" : "text-gray-500"
                }`}
              >
                {step}
              </span>
            </li>
          ))}
        </ul>

        {/* Address Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name (Required)*"
            required
            className="w-full h-12 px-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <input
            type="tel"
            placeholder="Mobile number (Required)*"
            required
            className="w-full h-12 px-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <input
            type="text"
            placeholder="Pincode (Required)*"
            required
            className="w-full h-12 px-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="text"
              placeholder="City *"
              required
              className="w-full md:flex-1 h-12 px-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <select
              required
              className="w-full md:flex-1 h-12 px-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              defaultValue=""
            >
              <option value="" disabled>
                State *
              </option>
              {states.map((state) => (
                <option key={state.code} value={state.code}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>

          <input
            type="text"
            placeholder="House No., Building Name (Required)*"
            required
            className="w-full h-12 px-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <input
            type="text"
            placeholder="Road name, Area, Colony (Required)*"
            required
            className="w-full h-12 px-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <button
            type="submit"
            className="w-full bg-orange-500 text-white h-12 rounded mt-2 hover:bg-orange-600 transition-colors"
          >
            Save Address
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddAddress;
