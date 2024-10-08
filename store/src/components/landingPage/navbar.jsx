import React, { useState, useEffect, useContext } from "react";
import { SidebarContext } from "@context/SidebarContext";
import CategoryServices from "@services/CategoryServices";
import useUtilsFunction from "@hooks/useUtilsFunction";
import { useRouter } from "next/router";
import { FiShoppingCart, FiUser, FiSearch, FiMenu } from "react-icons/fi";
import { useCart } from "react-use-cart";
import { getUserSession } from "@lib/auth";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "./search-bar";
import CartDrawer from "@components/drawer/CartDrawer";
import Sidebar from "./sidebar";
import CategoryDrawer from "@components/drawer/CategoryDrawer";
import { FaBolt } from "react-icons/fa"; // Bolt icon (optional replacement if you need it)

function Navbar() {
  const [navBg, setNavBg] = useState("bg-transparent text-white shadow-none");
  const [showSearch, setShowSearch] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const router = useRouter();
  const userInfo = getUserSession();

  const { showingTranslateValue } = useUtilsFunction();
  const { isLoading, setIsLoading, toggleCartDrawer, toggleCategoryDrawer } =
    useContext(SidebarContext);
  const { data } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavBg("bg-white text-black ");
      } else {
        setNavBg("bg-transparent");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <CartDrawer />
      <CategoryDrawer className="w-6 h-6 " />
    <header className="w-full bg-black text-white">
</header>
      <nav
        className={`fixed w-full z-40 transition-all duration-300 bg-gradient-to-b from-black to-gray-50 bg-opacity-90 backdrop-blur-lg `}
      >
        <div className="bg-black text-sm text-white py-2 flex justify-between items-center px-4">
          <span className="uppercase">1 Year Warranty | Wear Everyday</span>
          <span>50000+ Happy Customers</span>
          <span>Tarini's "A Part of Me" Collection is Live - Shop Now</span>
        </div>

        <div className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
          {/* Logo */}
          <div className="text-white flex items-center">
            <img
              src="/logo/saii.png" // Replace with your logo path
              alt="White Hathi Logo"
              className="h-10 w-auto"
            />
            <span className="ml-2 text-2xl font-serif tracking-wider">
              Sai Silver
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <FaBolt className="text-yellow-400 w-5 h-5" />
            <FiShoppingCart className="text-white w-6 h-6" />
          </div>
          {/* Categories */}
          {router?.pathname !== "/search" && (
            <div className="hidden md:flex items-center space-x-2">
              {data?.slice(1, 5).map((category, index) => (
                <div key={index} className="cursor-pointer group">
                  <h3
                    className="
                      relative text-xs mt-2 whitespace-nowrap tracking-widest 
                      font-serif leading-tight px-2 mx-2 
                      hover:text-emerald-500 w-full sm:w-auto sm:inline-block 
                      flex-shrink-0 text-center cursor-pointer"
                    onClick={() =>
                      handleCategoryClick(category._id, category.name)
                    }
                  >
                    {showingTranslateValue(category?.name).toUpperCase()}
                  </h3>
                </div>
              ))}
            </div>
          )}

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <FiSearch
              className="h-6 w-6 cursor-pointer hover:text-emerald-500"
              onClick={() => setShowSearch(true)}
              aria-label="Search"
            />

            <div className="relative">
              <FiShoppingCart
                className="h-6 w-6 cursor-pointer hover:text-emerald-500"
                onClick={toggleCartDrawer}
                aria-label="Cart"
              />
            </div>

            <button
              className="text-black text-2xl font-bold"
              aria-label="Login"
            >
              {userInfo?.image ? (
                <Link href="/user/dashboard">
                  <Image
                    width={29}
                    height={29}
                    src={userInfo?.image}
                    alt="user"
                    className="bg-white rounded-full"
                  />
                </Link>
              ) : (
                <Link href="/auth/login">
                  <FiUser className="h-6 w-6 cursor-pointer hover:text-emerald-500" />
                </Link>
              )}
            </button>

            <div className="md:hidden">
              <FiMenu
                className="h-6 w-6 cursor-pointer hover:text-emerald-500"
                onClick={toggleCategoryDrawer}
                aria-label="Menu"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar Component */}
      {showSidebar && (
        <Sidebar
          setShowSidebar={setShowSidebar}
          categories={data?.slice(1, 5)}
          handleCategoryClick={handleCategoryClick}
        />
      )}

      {/* SearchBar Component */}
      {showSearch && (
        <SearchBar showSearch={showSearch} setShowSearch={setShowSearch} />
      )}
    </>
  );
}

export default React.memo(Navbar);
