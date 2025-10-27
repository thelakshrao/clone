import React, { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import Logo from "../images/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#2874f0] shadow-md px-4 py-3 md:px-8">
      {/* ---------- TOP ROW ---------- */}
      <div className="flex items-center justify-between">
        {/* Left: Logo + Hamburger (mobile) */}
        <div className="flex items-center gap-3">
          {/* Hamburger (only mobile) */}
          <button
            className="text-white text-xl md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Logo */}
          <img src={Logo} alt="Logo" className="w-20 h-auto object-contain" />
        </div>

        {/* Center: Search Bar (only desktop) */}
        <div className="hidden md:flex items-center w-1/2 bg-white rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Search for Products, Brands and More"
            className="w-full px-4 py-2 text-gray-700 focus:outline-none text-sm"
          />
        </div>

        {/* Right: Buttons */}
        <div className="flex items-center gap-4">
          {/* Login (desktop only) */}
          <button className="hidden md:block text-white font-semibold px-4 py-2 rounded-md cursor-pointer">
            Login
          </button>

          {/* Cart */}
          <button className="flex items-center gap-2 text-white font-semibold px-2 py-2 rounded-md cursor-pointer">
            <FaShoppingCart className="text-2xl" />
            <span className="hidden md:inline">Cart</span>
          </button>
        </div>
      </div>

      {/* ---------- SEARCH BAR (MOBILE ONLY) ---------- */}
      <div className="flex md:hidden items-center mt-2 bg-white rounded-md overflow-hidden">
        <input
          type="text"
          placeholder="Search for Products, Brands and More"
          className="w-full px-4 py-2 text-gray-700 focus:outline-none text-sm"
        />
      </div>

      {/* ---------- MOBILE LOGIN MENU ---------- */}
      {menuOpen && (
        <div className="md:hidden mt-2 bg-[#2874f0] rounded-md py-2">
          <button className="block w-full text-left text-white font-medium px-4 py-2 hover:bg-blue-700 transition">
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
