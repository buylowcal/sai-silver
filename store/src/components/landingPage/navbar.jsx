import React, { useState, useEffect, useContext, useRef } from "react";
import useAsync from "@hooks/useAsync";
import { SidebarContext } from "@context/SidebarContext";
import CategoryServices from "@services/CategoryServices";
import useUtilsFunction from "@hooks/useUtilsFunction";
import { useRouter } from "next/router";
import { ShoppingCartIcon, UserIcon } from "@heroicons/react/outline";
import { FiShoppingCart, FiUser, FiSearch, FiMenu } from "react-icons/fi"; // Import FiMenuimport { useCart } from "react-use-cart";
import { getUserSession } from "@lib/auth";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "./search-bar";
import CartDrawer from "@components/drawer/CartDrawer";
import Sidebar from "./sidebar";
import { useCart } from "react-use-cart";
import CategoryDrawer from "@components/drawer/CategoryDrawer";
import { signOut } from "next-auth/react";

function Navbar() {
  const [navBg, setNavBg] = useState("bg-black");
  const [showSearch, setShowSearch] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false); // State for sidebar
  const router = useRouter();
  const userInfo = getUserSession();

  const { showingTranslateValue } = useUtilsFunction();
  const { isLoading, setIsLoading, toggleCartDrawer, toggleCategoryDrawer } =
    useContext(SidebarContext);
  const { data, error } = useAsync(() => CategoryServices.getShowingCategory());
  const { totalItems } = useCart();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    if (userInfo) {
      setIsDropdownOpen(!isDropdownOpen);
    } else {
      router.push("/auth/login");
    }
  };

  const handleLogout = async () => {
    await signOut();
    setIsDropdownOpen(false);
  };

  // For demonstration, store last searches
  const [lastSearches, setLastSearches] = useState([
    "Diamond Ring",
    "Gold Necklace",
  ]);

  const handleCategoryClick = (id, category) => {
    const category_name = showingTranslateValue(category)
      ?.toLowerCase()
      .replace(/[^A-Z0-9]+/gi, "-");

    router.push(`/search?category=${category_name}&_id=${id}`);
    setIsLoading(!isLoading);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Check the scroll position
      if (window.scrollY > window.innerHeight) {
        // Change this condition as necessary
        setNavBg("bg-black");
      } else {
        setNavBg("bg-black");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed flex justify-between gap-4 space-x-4 w-full z-40 transition-all duration-300 p-4  ${navBg}`}
      >
        <div className="max-w-7xl px-4 flex justify-start items-center h-16 ml-4">
          <img
            onClick={() => router.push("/")}
            src="/logo/logo-color.png"
            className="cursor-pointer w-80 h-auto object-contain md:block hidden"
            alt="Brand Logo"
          />
          <img
            onClick={() => router.push("/")}
            src="/logo/saii.png"
            className="cursor-pointer w-8 h-8 object-contain md:hidden block"
            alt="Brand Logo"
          />
        </div>

        {/* Remaining Navbar content... */}

        <div className="flex justify-end ">
          {/* Center: Categories (hidden on small screens) */}
          {router?.pathname !== "/search" && (
            <div className="hidden sm:hidden md:flex flex items-center space-x-2">
              {data[0]?.children?.slice(1, 7).map((category, index) => (
                <div
                  key={index}
                  onClick={() =>
                    handleCategoryClick(category?._id, category.name)
                  }
                  className="cursor-pointer group"
                >
                  <h3
                    className="
                  text-white
                  text-[14px]
                  sm:text-[13px]
                  md:text-[13px]
                  mt-2
                
                  whitespace-nowrap
                  tracking-widest
                  font-sans
                  group-hover:text-[#ff6b01]
                  leading-loose
                  p-2
                  px-2
                  mx-2
                  relative
                  after:content-[' ']
                  after:absolute
                  after:left-0
                  after:bottom-0
                  after:h-0.5
                  after:w-full
                  after:bg-current
                  after:transition-transform
                  after:duration-500
                  after:scale-x-0
                  after:origin-center
                  hover:after:scale-x-100
                "
                  >
                    {showingTranslateValue(category?.name).toUpperCase()}
                  </h3>
                </div>
              ))}
            </div>
          )}

          {/* Right Side: Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <FiSearch
              className="h-4 w-4 md:h-6 md:w-6 cursor-pointer text-white hover:text-[#ff6b01]"
              onClick={() => setShowSearch(true)}
              aria-label="Search"
            />

            {/* Cart Icon */}
            <div className="relative">
              <FiShoppingCart
                className="h-4 w-4 md:h-6 md:w-6 cursor-pointer text-white hover:text-[#ff6b01]"
                onClick={toggleCartDrawer}
                aria-label="Cart"
              />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 inline-flex items-center justify-center p-1 h-4 w-4 text-xs font-medium leading-none text-white bg-[#ff6b01] rounded-full">
                  {totalItems}
                </span>
              )}
            </div>

            {/* Profile Icon */}
            <div className="relative" ref={dropdownRef}>
              <button
                className="text-white hover:text-[#ff6b01] text-2xl  font-bold"
                aria-label="Login"
                onClick={toggleDropdown}
              >
                {userInfo?.image ? (
                  <Image
                    width={29}
                    height={29}
                    src={userInfo.image}
                    alt="user"
                    className="ring ring-[#ff6b01] ring-2 rounded-full px-2 py-1 hover:ring-white"
                  />
                ) : userInfo?.name ? (
                  <span className="leading-none font-bold font-baskerville block mt-0 ring-2 ring-white hover:ring-[#ff6b01] rounded-full px-2 py-1">
                    {userInfo.name[0]}
                  </span>
                ) : (
                  <FiUser className="h-4 w-4 md:h-6 md:w-6 cursor-pointer text-white hover:text-[#ff6b01]" />
                )}
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-black shadow-md shadow-[#ff6b01] rounded-md shadow-lg py-1 transition-all duration-300 ease-in-out transform origin-top-right scale-100 opacity-100">
                  <Link
                    href="/user/dashboard"
                    className="inline-flex space-x-2 gap-2 px-4 py-2 text-[17px] uppercase tracking-widest  text-white  hover:text-[#ff6b01]"
                  >
                    <svg
                      class="w-6 h-6 text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9.143 4H4.857A.857.857 0 0 0 4 4.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 10 9.143V4.857A.857.857 0 0 0 9.143 4Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 20 9.143V4.857A.857.857 0 0 0 19.143 4Zm-10 10H4.857a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286A.857.857 0 0 0 9.143 14Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286a.857.857 0 0 0-.857-.857Z"
                      />
                    </svg>
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="inline-flex space-x-2 gap-2 w-full text-left px-4 py-2 text-[17px] uppercase tracking-widest text-white  hover:text-[#ff6b01]"
                  >
                    <svg
                      class="w-6 h-6 text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2"
                      />
                    </svg>
                    Logout
                  </button>
                </div>
              )}
            </div>

            {/* Burger Menu Icon (visible on small screens) */}
            <div className="md:hidden block">
              <FiMenu
                className="h-4 w-4 md:h-6 md:w-6 cursor-pointer text-white hover:text-[#ff6b01]"
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
          categories={data[0]?.children?.slice(1, 5)}
          handleCategoryClick={handleCategoryClick}
        />
      )}

      {/* SearchBar Component */}
      {showSearch && (
        <SearchBar
          showSearch={showSearch}
          setShowSearch={setShowSearch}
          lastSearches={lastSearches}
        />
      )}
    </>
  );
}

export default Navbar;
