import React from 'react';
import { FaPinterestP, FaFacebookF, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
const FooterBottom = () => {
  return (
    <div className="bg-white text-center py-6">
      {/* Social Media Icons */}
      <div className="flex justify-center space-x-4 mb-4">
        <Link href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" className="bg-black hover:bg-[#ff6b01] hover:text-black text-white p-3 text-2xl rounded-full">
          <FaPinterestP />
       </Link> 
        <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="bg-black hover:bg-[#ff6b01] hover:text-black text-white p-3 text-2xl rounded-full">
          <FaFacebookF />
       </Link>
        <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="bg-black hover:bg-[#ff6b01] hover:text-black text-white p-3 text-2xl rounded-full">
          <FaInstagram />
       </Link> 
      </div>
      
      {/* Copyright Text */}
      <p className="text-sm text-gray-400">
        &copy; COPYRIGHT SAI SILVER 2024. <br /> ALL RIGHTS RESERVED
      </p>
    </div>
  );
};

export default FooterBottom;
