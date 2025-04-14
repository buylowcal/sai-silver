import React from "react";
import Link from "next/link";
const Showroom = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        muted
        autoPlay
        loop
        playsInline
        preload="auto"
      >
        <source src="/jewel/website video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay effect */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Text and button on top of the video */}
      <div className="absolute bottom-10  ml-12 z-10 text-white">
        {/* Subtitle */}
        <span className="uppercase tracking-widest font-normal text-[15px] text-[#ff6b01] flex justify-start mb-2">
          an Experience like no other
        </span>

        {/* Title */}
        <h2 className="text-5xl font-baskerville tracking-widest  mb-3">
          Showroom
        </h2>

        {/* Paragraph */}
        <p className="text-[18px] tracking-wide leading-relax font-sans w-full p-1.5 sm:max-w-xl sm:px-0 mb-8 text-justify">
          From custom-made to personalized touch to love, earrings, rings, and much more 
          have become an essential part of our daily lives. With the
          right ornaments, you can make your love and life  a true oasis of comfort
          and convenience.
        </p>

        {/* Button */}
        <Link href="/" className="w-fit text-black whitespace-nowrap bg-transparent text-white border border-white hover:bg-[#ff6b01] hover:border-black hover:text-white font-normal tracking-widest rounded-full text-base px-6 py-2 text-center">
          Explore Showroom
        </Link>
      </div>
    </div>
  );
};

export default Showroom;
