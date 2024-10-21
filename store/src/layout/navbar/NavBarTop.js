import Link from "next/link";
// import dayjs from "dayjs";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import dynamic from "next/dynamic";
import { IoLockOpenOutline } from "react-icons/io5";
import { FiPhoneCall, FiUser } from "react-icons/fi";
import { signOut } from "next-auth/react";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

//internal import
import { getUserSession } from "@lib/auth";
import useGetSetting from "@hooks/useGetSetting";
import useUtilsFunction from "@hooks/useUtilsFunction";

const NavBarTop = () => {
  const userInfo = getUserSession();
  const router = useRouter();

  const { storeCustomizationSetting } = useGetSetting();
  const { showingTranslateValue } = useUtilsFunction();

  const handleLogOut = () => {
    signOut();
    Cookies.remove("couponInfo");
    router.push("/");
  };

  useEffect(() => {
    if (userInfo) {
      const decoded = jwtDecode(userInfo?.token);

      const expireTime = new Date(decoded?.exp * 1000);
      const currentTime = new Date();

      // console.log(
      //   // decoded,
      //   "expire",
      //   dayjs(expireTime).format("DD, MMM, YYYY, h:mm A"),
      //   "currentTime",
      //   dayjs(currentTime).format("DD, MMM, YYYY, h:mm A")
      // );
      if (currentTime >= expireTime) {
        console.log("token expire, should sign out now..");
        handleLogOut();
      }
    }
  }, [userInfo]);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentClass, setCurrentClass] = useState("");

  console.log("@@@", currentSlide);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide => {
        let newSlide = prevSlide + 1;
        let newClass = "";

        if (newSlide > 3) {
          newSlide = 1;
          newClass = "transformminus200";
        } else if (newSlide === 2) {
          newClass = "transformminus100";
        } else if (newSlide === 1) {
          newClass = "transform200";
        }

        setCurrentClass(newClass);
        return newSlide;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className="block bg-black py-2.5 md:px-3">
        <div className="min-w-screen mx-auto">
          <div
            className={`text-gray-700 font-sans text-[12px] md:text-xs font-medium flex justify-between items-center 
               ${isMobile ? currentClass : ''} 
              `}
          >
            <div className="flex items-center font-sans tracking-wider text-[12px] lg:text-xs text-white font-semibold uppercase whitespace-nowrap min-w-full md:min-w-fit md:w-fit justify-center">
              1 YEAR WARRANTY | WEAR EVERYDAY
            </div>

            <div className="flex items-center font-sans tracking-wider text-[12px] lg:text-xs text-white font-semibold uppercase whitespace-nowrap min-w-full md:min-w-fit md:w-fit justify-center ">
              50000+ HAPPY CUSTOMERS
            </div>

            <div className="flex items-center font-sans tracking-wider text-[12px] lg:text-xs text-white font-semibold uppercase whitespace-nowrap min-w-full md:min-w-fit md:w-fit justify-center">
              Sai's "A Part of Me" Collection is Live - Shop Now
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(NavBarTop), { ssr: false });
