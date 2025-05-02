"use client";

import Image from "next/image";
import { useRef } from "react";
import { FaArrowCircleDown } from "react-icons/fa";
const Banner = () => {

  const scrollToNextSection = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex flex-row min-h-screen bg-black text-white overflow-hidden">
      {/* Left Image */}
      <div className="w-full sm:w-1/2 h-screen relative">
        <Image
          src="/jewel/store.webp"
          alt="Sai Silver"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right Content — Hidden on mobile */}
      <div className="hidden sm:flex w-1/2 flex-col justify-between px-4 md:px-6 lg:px-12 py-6 bg-gradient-to-r from-black to-neutral-600 overflow-hidden">
        {/* Headline */}
        <div className="m-auto text-start space-y-4 px-2">
          <h1 className="text-[32px]  text-neutral-300 md:text-6xl lg:text-8xl tracking-wide font-mont font-semibold leading-tight">
            We deal in only <br /> pure 925 hallmark <br /> silver
          </h1>
          <p className="text-sm md:text-lg lg:text-2xl text-neutral-400 tracking-wide font-mont">
            Where purity meets artistry in every silver piece.
          </p>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center text-xs md:text-sm lg:text-lg mt-6">
          <div className="flex items-center gap-1 md:gap-2">
            <button className="border-2 border-[#ff6b01] px-4 py-1 text-xl"
            onClick={scrollToNextSection}>
            
              Explore
            </button>
            <span className="text-[#ff6b01] text-xl md:text-3xl animate-bounce">
              <FaArrowCircleDown />
            </span>
          </div>
          <p className="text-neutral-300 font-mont text-lg tracking-wide">Smile of Purity</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
