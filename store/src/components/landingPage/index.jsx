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
