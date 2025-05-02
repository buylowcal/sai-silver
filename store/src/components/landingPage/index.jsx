import React from "react";
import Banner from "./banner";
import FeaturedProducts from "./featured-products";
import DiscountProducts from "./discounted-products";
import FeaturesSection from "./feature";
import GiftSection from "./gift";
import Community from "./community";
import Showroom from "./showroom";
import Testimonials from "./testimonials";
import HumanCategory from "./humanCategory";

const imageUrls = [
  "/jewel/showroom/1.webp",
  "/jewel/showroom/2.webp",
  "/jewel/showroom/3.webp",
  "/jewel/showroom/4.webp",
];

const LandingPage = ({ discountProducts, popularProducts, attributes }) => {
  return (
    <div className="bg-white mx-auto w-full overflow-hidden">
      <Banner />
      <HumanCategory />
      <Showroom />
      <div className="mb-12">
        <FeaturesSection />
      </div>
      <FeaturedProducts
        attributes={attributes}
        popularProducts={popularProducts}
      />
      <div id="showroom" className="relative py-24 px-5 sm:px-8 overflow-hidden">

        {/* Background Text */}
        <h2 className="absolute top-[15%] left-1/2 -translate-x-1/2 -translate-y-1/2 
   whitespace-nowrap text-6xl sm:text-7xl md:text-9xl lg:text-[170px] 
   font-extrabold text-gray-200 font-baskerville capitalize tracking-wide
   pointer-events-none select-none z-20">
          Sai Silver
          {/* <span className="text-[#ff6b01]/50">Showroom</span> */}
        </h2>

        {/* Background Pattern */}
        <div className="absolute inset-0 z-10">
          <div className="h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)]
       [background-size:16px_16px]" />
        </div>

        {/* Moving Image Strip */}
        <div className="relative z-20 overflow-hidden">
          <div
            className="flex flex-nowrap animate-scroll-horizontal"
            style={{
              animation: "scrollHorizontal 10s linear infinite"
            }}
          >
            {[...imageUrls, ...imageUrls].map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`Gallery ${index + 1}`}
                className="grayscale hover:grayscale-0 transition duration-300 ease-in-out 
          w-80 h-80 mx-4 shadow-xl"
              />
            ))}
          </div>
        </div>
      </div>


      <GiftSection />
      {/* <DiscountProducts
        discountProducts={discountProducts}
        attributes={attributes}
      /> */}

      <img
        className="w-full h-auto max-h-screen object-cover"
        src="/jewel/banner2.png"
        alt="Jewellery Banner"
      />
      <Testimonials />
      <Community />
      <br />
    </div>
  );
};

export default LandingPage;
