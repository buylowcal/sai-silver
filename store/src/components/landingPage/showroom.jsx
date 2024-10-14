import React from "react";

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
        <source src="/Jewellery/jewells.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay effect */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Text and button on top of the video */}
      <div className="absolute bottom-10 left-10 z-10 text-white">
        {/* Subtitle */}
        <span className="uppercase tracking-widest font-normal text-[15px] flex justify-start mb-6">
          an Experience like no other
        </span>

        {/* Title */}
        <h2 className="text-5xl font-serif tracking-wide mb-6">
          Showroom
        </h2>

        {/* Paragraph */}
        <p className="text-[19px] tracking-widest leading-relaxed w-full px-4 sm:max-w-lg sm:px-0  mb-8 text-justify">
          From custom-made to personalized touch to love, earrings, rings, and much more 
          have become an essential part of our daily lives. With the
          right ornaments, you can make your love and life  a true oasis of comfort
          and convenience.
        </p>

        {/* Button */}
        <button className="w-fit text-black whitespace-nowrap bg-white border border-white hover:bg-black hover:border-black hover:text-white font-normal tracking-widest rounded-full text-base px-6 py-2 text-center">
          Explore Showroom
        </button>
      </div>
    </div>
  );
};

export default Showroom;
