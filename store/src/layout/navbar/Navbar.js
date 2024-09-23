import { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useCart } from "react-use-cart";
import { IoSearchOutline } from "react-icons/io5";
import { FiShoppingCart, FiUser, FiBell } from "react-icons/fi";
import useTranslation from "next-translate/useTranslation";
import { getUserSession } from "@lib/auth";
import useGetSetting from "@hooks/useGetSetting";
import { handleLogEvent } from "src/lib/analytics";
import NavbarPromo from "@layout/navbar/NavbarPromo";
import CartDrawer from "@components/drawer/CartDrawer";
import { SidebarContext } from "@context/SidebarContext";

const Navbar = () => {
  const { t } = useTranslation();
  const [searchText, setSearchText] = useState("");
  const { toggleCartDrawer } = useContext(SidebarContext);
  const { totalItems } = useCart();
  const router = useRouter();

  const userInfo = getUserSession();

  const { storeCustomizationSetting } = useGetSetting();

  // console.log("storeCustomizationSetting", storeCustomizationSetting);

  const handleSubmit = (e) => {
    e.preventDefault();

    // return;
    if (searchText) {
      router.push(`/search?query=${searchText}`, null, { scroll: false });
      setSearchText("");
      handleLogEvent("search", `searched ${searchText}`);
    } else {
      router.push(`/ `, null, { scroll: false });
      setSearchText("");
    }
  };

  // console.log(
  //   "storeCustomizationSetting?.navbar?.header_logo",
  //   storeCustomizationSetting?.navbar?.logo
  // );

  return (
    <>
      {/* <CartDrawer /> */}
      <div className="bg-white dark:dark-slate-950  dark:text-white sticky top-0 z-20">
        <div className="py-4">
          <div className="container">
            {/* logo and links  */}
            <div>
              <Link
                href="/"
                className="text-black font-semibold tracking-widest uppercase sm:text-3xl text-2xl font-serif "
              >
                Sai Silver
              </Link>
              {/* menu items */}
              <div></div>
            </div>
          </div>
        </div>

        {/* links right section */}
      </div>
    </>
  );
};
export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
