import React, { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes, FaSearch, FaArrowLeft } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../images/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="bg-[#2874f0] shadow-md px-4 py-3 md:px-8">
      {/* ---------- NAVBAR MAIN ROW ---------- */}
      <div className="flex items-center justify-between">
        {/* Left: Back Button + Logo */}
        <div className="flex items-center gap-3">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="text-white hover:text-gray-200 text-xl"
          >
            <FaArrowLeft />
          </button>

          {/* Logo */}
          <img
            src={Logo}
            alt="Logo"
            className="w-20 h-auto object-contain cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>

        {/* Center: Search Bar (Desktop Only) */}
        <div className="hidden md:flex items-center w-1/2 bg-white rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Search for Products, Brands and More"
            className="w-full px-4 py-2 text-gray-700 focus:outline-none text-sm"
          />
          <button className="px-3 text-gray-600 hover:text-black">
            <FaSearch />
          </button>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-4">
          {/* Search Icon (Mobile Only) */}
          <button className="text-white text-lg md:hidden">
            <FaSearch />
          </button>

          {/* Cart */}
          <button className="flex items-center gap-2 text-white font-semibold px-2 py-2 rounded-md cursor-pointer hover:bg-[#1a5fd1] transition">
            <FaShoppingCart className="text-2xl" />
            <span className="hidden md:inline">Cart</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
