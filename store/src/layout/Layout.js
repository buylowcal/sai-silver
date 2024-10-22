import Head from "next/head";
import { ToastContainer } from "react-toastify";
//  import Footer from "@layout/footer/Footer";
import NavBarTop from "./navbar/NavBarTop";
import FooterTop from "@layout/footer/FooterTop";
import MobileFooter from "@layout/footer/MobileFooter";
import FeatureCard from "@components/feature-card/FeatureCard";
import Navbar from "@components/landingPage/navbar";
import Footer from "@layout/footer/Footer";

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
          <link
            rel="icon"
            href="/saii.png"
            type="image/png"
            sizes="48x48"
            className="rounded-full border-2 border-[#767676]"
          />
        </Head>
        {/* Make the top navigation sticky */}
        
        <div className="sticky top-0 z-50">
    

          {/* <div className="flex flex-col">
            <Navbar />
          </div> */}
        </div>

        <div className="bg-white">{children}</div>

        <div className="w-full">
          <div className="border-t border-gray-100 w-full">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
