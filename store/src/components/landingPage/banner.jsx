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
          <h1 className="text-[32px] md:text-6xl lg:text-8xl tracking-wide font-mont font-semibold leading-tight">
            We deal in only <br /> pure 925 hallmark <br /> silver
          </h1>
          <p className="text-sm md:text-lg lg:text-2xl text-neutral-400 tracking-wide font-mont">
            Where purity meets artistry in every silver piece.
          </p>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center text-xs md:text-sm lg:text-lg mt-6">
          <div className="flex items-center gap-1 md:gap-2">
            <button className="flex overflow-hidden items-center text-xl font-medium focus-visible:outline-none focus-visible:ring-1 
            focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-transparent text-white shadow hover:bg-black/90 h-9 
            px-4 py-2 max-w-64 whitespace-pre md:flex group relative w-full justify-center gap-2 rounded transition-all duration-300 
            ease-out hover:ring-2 hover:ring-black hover:ring-offset-2 font-mont tracking-wide"
            onClick={scrollToNextSection}>
              <span
                className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"
              ></span>
              Explore
            </button>
            <span className="text-orange-500 text-xl md:text-3xl animate-bounce">
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
