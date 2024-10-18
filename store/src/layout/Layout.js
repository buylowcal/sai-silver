import Head from "next/head";
import { ToastContainer } from "react-toastify";
//  import Footer from "@layout/footer/Footer";
import NavBarTop from "./navbar/NavBarTop";
import FooterTop from "@layout/footer/FooterTop";
import MobileFooter from "@layout/footer/MobileFooter";
import FeatureCard from "@components/feature-card/FeatureCard";
import Navbar from "@components/landingPage/navbar";
import Footer from "@components/landingPage/footer";
  
const Layout = ({ title, description, children }) => {

  return (
    <>  
      <ToastContainer />

      <div className="font-sans">
        <Head>
          <title>
            {title
              ? `Sai Silver | ${title}`
              : "Sai Silver - Best Silver Jewellery in Tri City"}
          </title>
          {description && <meta name="description" content={description} />}
          <link ref="icon" href="/saii.png" type="image/png" sizes="48x48" className="rounded-full border-2 border-[#767676]"/>
        </Head>
        {/* <NavBarTop /> */}
        <Navbar />
        <div className="bg-white h-screen ">{children}</div>
        {/* <MobileFooter /> */}
        <div className="w-full">
          {/* <FooterTop /> */}
         
         
          <div className="border-t border-gray-100 w-full">
            {/* <Footer  /> */}
          </div>
          {/* <hr className="hr-line"></hr>
          <div className="hidden relative lg:block mx-auto max-w-screen-2xl py-6 px-3 sm:px-10">
            <FeatureCard />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Layout;
