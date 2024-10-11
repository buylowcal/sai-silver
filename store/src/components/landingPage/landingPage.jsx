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
import CategoryCarousel from "@components/carousel/CategoryCarousel";


const LandingPage = () => {
  return (
    <div className="w-screen bg--500">
      <div className=" relative border   ">
        <CategoryCarousel />
      </div>

      <Category />
      {/* <LovedDesigns /> */}
    </div>
  );
};

export default LandingPage;
