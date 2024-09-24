import React from "react";
import Services from "@components/landingPage/services";
import ToolsResources from "@components/landingPage/toolsResources";
import Footer from "@components/landingPage/footer";
import Journey from "@components/landingPage/journey";
import Innovations from "@components/landingPage/innovations";
import Connect from "@components/landingPage/connect";
import Brand from "@components/landingPage/brand";
import Showroom from "./showroom";
import Category from "@components/landingPage/category";
import LovedDesigns from "./lovedDesigns";
import Navbar from "./navbar";
import Banner from "./banner";
import CategoriesSlider from "./categories-slider";
import FeaturedProducts from "./featured-products";
import DiscountProducts from "./discounted-products";
import FeatureCategory from "@components/category/FeatureCategory";



const LandingPage = ({discountProducts,popularProducts,attributes}) => {
  return (
    <div className="bg-gary-50">
      {/* <Brand /> */}
      {/* <Category/> */}
      {/* <LovedDesigns/> */}
      {/* <Showroom/> */}
      {/* <Connect />
      <Innovations />
      <Journey />
      <Services /> */}
      <Navbar />
      <Banner />
      {/* <FeatureCategory/> */}
      <CategoriesSlider attributes={attributes} />
      <FeaturedProducts attributes={attributes}  popularProducts={popularProducts} />

      <DiscountProducts  discountProducts={discountProducts} attributes={attributes} />
       {/* <Footer /> */}
      <br />
      {/* <div className="mt-6">
        <ToolsResources />
      </div> */}
      
    </div>
  );
};

export default LandingPage;
