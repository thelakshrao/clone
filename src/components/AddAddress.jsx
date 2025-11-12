import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const states = [
  { code: "AN", name: "Andaman and Nicobar Islands" },
  { code: "AP", name: "Andhra Pradesh" },
  { code: "AR", name: "Arunachal Pradesh" },
  { code: "AS", name: "Assam" },
  { code: "BR", name: "Bihar" },
  { code: "CH", name: "Chandigarh" },
  { code: "CT", name: "Chhattisgarh" },
  { code: "DN", name: "Dadra and Nagar Haveli and Daman and Diu" },
  { code: "DL", name: "Delhi" },
  { code: "GA", name: "Goa" },
  { code: "GJ", name: "Gujarat" },
  { code: "HR", name: "Haryana" },
  { code: "HP", name: "Himachal Pradesh" },
  { code: "JK", name: "Jammu and Kashmir" },
  { code: "JH", name: "Jharkhand" },
  { code: "KA", name: "Karnataka" },
  { code: "KL", name: "Kerala" },
  { code: "LA", name: "Ladakh" },
  { code: "LD", name: "Lakshadweep" },
  { code: "MP", name: "Madhya Pradesh" },
  { code: "MH", name: "Maharashtra" },
  { code: "MN", name: "Manipur" },
  { code: "ML", name: "Meghalaya" },
  { code: "MZ", name: "Mizoram" },
  { code: "NL", name: "Nagaland" },
  { code: "OD", name: "Odisha" },
  { code: "PY", name: "Puducherry" },
  { code: "PB", name: "Punjab" },
  { code: "RJ", name: "Rajasthan" },
  { code: "SK", name: "Sikkim" },
  { code: "TN", name: "Tamil Nadu" },
  { code: "TS", name: "Telangana" },
  { code: "TR", name: "Tripura" },
  { code: "UP", name: "Uttar Pradesh" },
  { code: "UK", name: "Uttarakhand" },
  { code: "WB", name: "West Bengal" },
];

const AddAddress = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { product, quantity } = location.state || {};

  // Store address details
  const [address, setAddress] = useState({
    name: "",
    phone: "",
    pincode: "",
    city: "",
    state: "",
    house: "",
    area: "",
  });

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Address Saved!");
    navigate("/order-summary", { state: { product, quantity, address } });
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
            name="name"
            placeholder="Full Name (Required)*"
            required
            value={address.name}
            onChange={handleChange}
            className="w-full h-12 px-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Mobile number (Required)*"
            required
            value={address.phone}
            onChange={handleChange}
            className="w-full h-12 px-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <input
            type="text"
            name="pincode"
            placeholder="Pincode (Required)*"
            required
            value={address.pincode}
            onChange={handleChange}
            className="w-full h-12 px-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="text"
              name="city"
              placeholder="City *"
              required
              value={address.city}
              onChange={handleChange}
              className="w-full md:flex-1 h-12 px-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <select
              name="state"
              required
              value={address.state}
              onChange={handleChange}
              className="w-full md:flex-1 h-12 px-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <option value="">State *</option>
              {states.map((state) => (
                <option key={state.code} value={state.name}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>

          <input
            type="text"
            name="house"
            placeholder="House No., Building Name (Required)*"
            required
            value={address.house}
            onChange={handleChange}
            className="w-full h-12 px-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <input
            type="text"
            name="area"
            placeholder="Road name, Area, Colony (Required)*"
            required
            value={address.area}
            onChange={handleChange}
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
