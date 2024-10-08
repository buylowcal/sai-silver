import React from 'react';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';
import { FaBolt } from 'react-icons/fa'; // Bolt icon (optional replacement if you need it)

const Navbar = () => {
  return (
    <header className="w-full bg-black text-white">
      {/* Announcement Bar */}
      <div className="bg-black text-sm text-white py-2 flex justify-between items-center px-4">
        <span className="uppercase">1 Year Warranty | Wear Everyday</span>
        <span>50000+ Happy Customers</span>
        <span>Tarini's "A Part of Me" Collection is Live - Shop Now</span>
      </div>

      {/* Main Navbar */}
      <nav className="bg-black bg-opacity-90 backdrop-blur-lg">
        <div className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
          {/* Search Section */}
          <div className="flex items-center space-x-2">
            <FiSearch className="text-white w-6 h-6" />
            <span className="uppercase text-white tracking-widest">Search</span>
          </div>

          {/* Logo */}
          <div className="text-white flex items-center">
            <img
              src="/path-to-logo.png" // Replace with your logo path
              alt="White Hathi Logo"
              className="h-10 w-auto"
            />
            <span className="ml-2 text-2xl font-serif tracking-wider">white hathi</span>
          </div>

          {/* Right Section - Bolt Icon and Cart */}
          <div className="flex items-center space-x-4">
            <FaBolt className="text-yellow-400 w-5 h-5" />
            <FiShoppingCart className="text-white w-6 h-6" />
          </div>
        </div>

        {/* Menu Items */}
        <div className="flex justify-center space-x-6 py-2 text-sm uppercase tracking-wide bg-gradient-to-b from-black to-transparent">
          <span>Shop by</span>
          <span>Bestsellers</span>
          <span>New In</span>
          <span>Gifts</span>
          <span>Personalized</span>
          <span>Necklaces</span>
          <span>Rings</span>
          <span>Earrings</span>
          <span>Bracelets</span>
          <span>Anklets</span>
          <span>About</span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
