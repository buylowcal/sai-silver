import React from "react";

function Banner() {
  return (
    <div className="overflow-hidden">
      <section
        id="home"
        className="h-full 2xl:h-screen w-screen bg-cover bg-no-repeat bg-center"
      >
        <div className="w-full h-full relative">
          <img
            className="w-full h-auto md:h-full object-cover" 
            src="/jewel/banner3.png"
            alt="Jewellery Banner"
          />
        </div>

        {/* Responsive button positioned at the bottom-left */}
        {/* Uncomment and adjust as needed */}
        {/* <button className="uppercase relative left-4 md:bottom-4 md:left-8 lg:bottom-20 lg:left-10 bg-transparent border border-2 border-[#ff6b01] text-white px-4 py-2 md:px-6 md:py-3 text-base md:text-base lg:text-lg">
          Shop Now
        </button> */}
      </section>
    </div>
  );
}

export default Banner;
