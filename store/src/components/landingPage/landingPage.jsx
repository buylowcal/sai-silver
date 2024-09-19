import React from "react";
import Services from "@components/landingPage/services";
import ToolsResources from "@components/landingPage/toolsResources";
import Footer from "@components/landingPage/footer";
import Journey from "@components/landingPage/journey";
import Innovations from "@components/landingPage/innovations";
import Connect from "@components/landingPage/connect";
import Brand from "@components/landingPage/brand";
import Showroom from "./showroom";
const LandingPage = () => {
  return (
    <div className="bg-gary-50">
      {/* <Brand /> */}
      <Showroom/>
      <Connect />
      <Innovations />
      <Journey />
      <Services />
      <br />
      <div className="mt-6">
        <ToolsResources />
      </div>
      
    </div>
  );
};

export default LandingPage;
