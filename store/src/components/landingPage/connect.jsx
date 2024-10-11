import Image from "next/image";
import React from "react";

const Connect = () => {
  return (
    <div className="p-16 bg-gray-50">
    <div className="bg-white rounded-lg shadow-2xl md:flex">
      <Image
        src="https://www.subzero-wolf.com/-/media/featured-articles/home-page/adobestock_564688321.jpeg?h=541&width=733&udi=1&cropregion=330,0,6618,4638"
        alt="lady"
        className="rounded-t-lg md:w-1/2 md:rounded-l-lg md:rounded-t-none transform transition-transform duration-500 hover:scale-105"
        width={500}
        height={500}
      />
      <div className="p-6 md:w-1/2 flex flex-col justify-center">
        <span className="uppercase tracking-widest text-black font-medium text-[15px] flex justify-center mb-2">
          NOT SURE WHERE TO START?
        </span>
        <h2 className="text-4xl font-normal tracking-wider font-serif text-center text-black mb-6">
          Connect with us
        </h2>
        <div className="flex flex-col justify-center items-center">
          <span className="text-black font-sans font-thin text-[15px] tracking-wider text-center mb-4">
            We’re here to offer expert advice and support—whether you are seeking general guidance on a remodel or new-build project, or have questions about specific products you are considering for your home.
          </span>
        </div>
        <div className="flex justify-center">
          <button
            data-ripple-light="true"
            type="button"
            className="flex items-center select-none py-3 px-6 text-center align-middle font-sans text-sm font-medium italic text-black group"
          >
            Contact Us
            <svg
              className="w-6 h-5 text-black ml-1 transition-transform duration-300 group-hover:translate-x-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m9 5 7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default Connect;
