import React from "react";

const GiftSection = () => {
  return (
    <>
      <div className="text-center px-4 sm:px-6">
        {/* Upper text section */}
        <p className="text-sm sm:text-md font-normal text-gray-700 mb-4 tracking-wider leading-7 sm:leading-9">
          Showcase your style with our everyday jewelry, handcrafted by skilled<br />
          Karigars, made from 92.5 sterling silver and finished with<br />
          an 18KT real gold polish.
        </p>
      </div>
      <div className="bg-[#fcf7e9] py-8 sm:py-16">
        <div className="text-center mt-10">
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-medium mb-6">
            A GIFT THAT MAKES YOU UNFORGETTABLE
          </h2>

          {/* Image and text container */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {/* Image */}
            <img
              src="/jewellery/jewelleryBox.jpg"
              alt="Gift Box"
              className="w-60 sm:w-80 h-auto object-cover"
            />

            {/* Text and button */}
            <div className="text-justify p-3 md:text-left max-w-lg">
              <p className="text-gray-700 mb-6 text-sm sm:text-base leading-6 sm:leading-7">
                Explore our collection of perfect, fail-proof gifts. To make
                this year’s gift truly unforgettable, choose a piece of jewelry
                from Sai Silver.
              </p>

              {/* Explore Gifts button */}
              <button className="px-6 py-2 w-fit border border-gray-700 hover:bg-gray-700 hover:text-white transition duration-300">
                EXPLORE GIFTS
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GiftSection;
