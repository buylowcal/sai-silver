// src/components/Navbar.jsx
import React, { useState, useEffect, useContext, useRef } from "react";
import useAsync from "@hooks/useAsync";
import { SidebarContext } from "@context/SidebarContext";
import CategoryServices from "@services/CategoryServices";
import useUtilsFunction from "@hooks/useUtilsFunction";
import { useRouter } from "next/router";
import { FiSearch, FiMenu } from "react-icons/fi"; // Import FiMenuimport { useCart } from "react-use-cart";
import { BsCart4 } from "react-icons/bs";
import { ImUser } from "react-icons/im";
import { getUserSession } from "@lib/auth";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "./search-bar";
import CartDrawer from "@components/drawer/CartDrawer";
import Sidebar from "./sidebar";
import { useCart } from "react-use-cart";
import CategoryDrawer from "@components/drawer/CategoryDrawer";
import { signOut } from "next-auth/react";
import { IoIosArrowDown } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa";
function Navbar() {
  const [navBg, setNavBg] = useState("bg-transparent");
  const [showSearch, setShowSearch] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false); // State for sidebar
  const router = useRouter();
  const userInfo = getUserSession();

  const { showingTranslateValue } = useUtilsFunction();
  const { isLoading, setIsLoading, toggleCartDrawer, toggleCategoryDrawer } =
    useContext(SidebarContext);
  const { data, error } = useAsync(() => CategoryServices.getShowingCategory());
  const { totalItems } = useCart();
  const [childCategories, setChildCategories] = useState({});
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { data: categories } = useAsync(() => CategoryServices.getShowingCategory());
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const toggleSubMenu = (subCategoryId) => {
    setActiveSubMenu(prev => (prev === subCategoryId ? null : subCategoryId));
  };
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
    // router.push('/auth/login')
    setIsDropdownOpen(false);
  };

  // For demonstration, store last searches
  const [lastSearches, setLastSearches] = useState([
    "Diamond Ring",
    "silver Necklace",
  ]);

  const handleCategoryClick = (id, category) => {
    const category_name = showingTranslateValue(category)
      ?.toLowerCase()
      .replace(/[^A-Z0-9]+/gi, "-");

    router.push(`/search?category=${category_name}&_id=${id}`);
    setIsLoading(!isLoading);
  };

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
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

  return (
    <>
      <CartDrawer />
      <CategoryDrawer className="w-6 h-6 drop-shadow-xl text-white" />
      <nav
        className={`
    fixed top-0 w-full z-50 p-3
    ${scrolled
            ? 'bg-white/95 backdrop-blur-md  shadow-[0_8px_30px_rgb(0,0,0,0.12)]'
            : 'bg-transparent'
          }
    transition-all duration-500 ease-in-out
  `}
      >


        <div className={`
    absolute inset-0 
    ${scrolled
            ? 'after:absolute after:bottom-[-20px] after:left-0 after:right-0 after:h-[20px] after:bg-gradient-to-b after:from-black/5 after:to-transparent after:blur-xl'
            : ''
          }
    transition-all duration-300
  `} />

        <div className={`
          absolute inset-0 
          ${scrolled
            ? 'bg-white/10 backdrop-blur-sm'
            : 'bg-transparent'
          }
          transition-all duration-300
        `} />

        {/* Main content */}
        <div className="w-full px-4 relative z-10">
          <div className="flex items-center justify-between h-16">
            {/* Left Section - Logo */}
            <div className="flex-shrink-0">
              <img
                onClick={() => router.push("/")}
                src={
                  router.pathname === "/"
                    ? scrolled
                      ? "/logo/logo-color.png"
                      : "/jewel/sai-silver-white.png"
                    : "/logo/logo-color.png"
                }
                className="cursor-pointer w-48 md:w-80 h-auto object-contain md:block hidden"
                alt="Brand Logo"
              />
              <img
                onClick={() => router.push("/")}
                src={router.pathname === "/" ? scrolled ? "/logo/saii.png" : "/jewel/s-white.png": "/logo/saii.png"}
                className="cursor-pointer w-8 h-8 object-contain md:hidden block"
                alt="Brand Logo"
              />
            </div>

            {/* Middle Section - Categories (hidden on mobile) */}
            {router?.pathname !== "/search" && (
              <div className="hidden lg:flex items-center justify-center flex-1 gap-6 ml-56">
                {/* Dropdown for All Categories */}
                <div className="relative group cursor-pointer px-4">
                  {/* <h3
                    className={`
          ${(scrolled || router.asPath !== '/') ? 'text-black' : 'text-white'}
          text-[14px] whitespace-nowrap tracking-widest font-sans
          ${(scrolled || router.asPath !== '/') ? 'group-hover:text-[#ff6b01]' : 'group-hover:text-[#ff6b01]'}
          leading-loose p-2 flex items-center gap-2
        `}
                  >
                    All Categories
                    <span className="transition-transform duration-300 group-hover:rotate-180">
                      ▼
                    </span>
                  </h3> */}

                  {/* Dropdown Menu */}
                  {/* <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md p-2 w-48 z-50">
                    {data[0]?.children?.map((category, index) => (
                      <div
                        key={index}
                        onClick={() => handleCategoryClick(category?._id, category.name)}
                        className={`
                          ${(scrolled || router.asPath !== '/') ? 'text-black' : 'text-white'}
                          text-[14px] whitespace-nowrap tracking-widest font-sans
                          ${(scrolled || router.asPath !== '/') ? 'group-hover:text-[#ff6b01]' : 'group-hover:text-[#ff6b01]'}
                          leading-loose p-2 flex items-center gap-2
                        `}
                      >
                        {showingTranslateValue(category?.name)}
                      </div>
                    ))}
                  </div> */}
                </div>

                {/* Individual Categories */}
                {data[0]?.children?.map((category, index) => (
                  <div key={index} className="relative group px-2">
                    <h3
                      className={`text-[14px] whitespace-nowrap tracking-widest font-sans 
              ${scrolled ? "text-black" : "text-white"} 
              group-hover:text-[#ff6b01] leading-loose p-2 flex items-center gap-2`}
                    >
                      {showingTranslateValue(category?.name).toUpperCase()}
                      {category?.children?.length > 0 && (
                        <span className="transition-transform duration-300 group-hover:rotate-180">
                          <IoIosArrowDown size={20} />
                        </span>
                      )}
                    </h3>

                    {/* Dropdown Menu */}
                    {category?.children?.length > 0 && (
                      <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md p-2 w-48 z-50">
                        {category.children.map((subCategory) => (
                          <div key={subCategory._id} className="relative group">
                            <div className="flex items-center justify-between p-2 hover:bg-orange-50 hover:text-[#ff6b01] rounded-lg cursor-pointer">
                              <span
                                onClick={() => handleCategoryClick(subCategory._id, subCategory.name)}
                                className="text-sm font-semibold tracking-wide uppercase"
                              >
                                {showingTranslateValue(subCategory?.name)}
                              </span>

                              {/* Show chevron only if subCategory has children */}
                              {subCategory?.children?.length > 0 && (
                                <span
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleSubMenu(subCategory._id);
                                  }}
                                  className="cursor-pointer transition-transform duration-300"
                                >
                                  <FaChevronRight size={18} />
                                </span>
                              )}
                            </div>

                            {/* Nested Dropdown (for sets -> chain sets) */}
                            {subCategory?.children?.length > 0 && activeSubMenu === subCategory._id && (
                              <div className="absolute left-full top-0 mt-0 bg-[#ff6b01]  shadow-xl rounded-xl mx-4 px-4 py-2 w-48 z-50">
                                {subCategory.children.map((nestedSub) => (
                                  <h5
                                    key={nestedSub._id}
                                    onClick={() => handleCategoryClick(nestedSub._id, nestedSub.name)}
                                    className="text-base  cursor-pointer text-white uppercase tracking-wide "
                                  >
                                    {showingTranslateValue(nestedSub?.name)}
                                  </h5>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}


            {/* Right Section - Icons */}
            <div className="flex items-center space-x-6">
              {/* Burger Menu (mobile only) */}
              <div className="lg:hidden">
                <FiMenu
                  className={`h-6 w-6 cursor-pointer ${(scrolled || router.asPath !== '/') ? 'text-black' : 'text-white'
                    } hover:text-[#ff6b01] transition-colors duration-200`}
                  onClick={toggleCategoryDrawer}
                  aria-label="Menu"
                />
              </div>

              {/* Search Icon */}
              <FiSearch
                className={`h-6 w-6 cursor-pointer ${(scrolled || router.asPath !== '/') ? 'text-black' : 'text-white'
                  } hover:text-[#ff6b01] transition-colors duration-200`}
                onClick={() => setShowSearch(true)}
                aria-label="Search"
              />

              {/* Cart Icon */}
              <div className="relative">
                <BsCart4
                  className={`h-6 w-6 cursor-pointer ${(scrolled || router.asPath !== '/') ? 'text-black' : 'text-white'
                    } hover:text-[#ff6b01] transition-colors duration-200`}
                  onClick={toggleCartDrawer}
                  aria-label="Cart"
                />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 inline-flex items-center justify-center p-1 h-4 w-4 text-xs font-medium leading-none text-white bg-[#ff6b01] rounded-full">
                    {totalItems}
                  </span>
                )}
              </div>

              {/* User Profile */}
              <div className="relative" ref={dropdownRef}>
                <button
                  className={`${(scrolled || router.asPath !== '/') ? 'text-black' : 'text-white'
                    } hover:text-[#ff6b01] text-2xl font-bold transition-colors duration-200`}
                  aria-label="Login"
                  onClick={toggleDropdown}
                >
                  {userInfo?.image ? (
                    <Image
                      width={29}
                      height={29}
                      src={userInfo.image}
                      alt="user"
                      className="ring ring-[#ff6b01] rounded-full px-2 py-2 hover:ring-white transition-all duration-200"
                    />
                  ) : userInfo?.name ? (
                    <span className={`leading-none font-bold font-baskerville block mt-0 uppercase ring-2 ${(scrolled || router.asPath !== '/') ? 'ring-black' : 'ring-white'
                      } hover:ring-[#ff6b01] rounded-full px-2 py-1 transition-all duration-200`}>
                      {userInfo.name[0]}
                    </span>
                  ) : (
                    <ImUser className={`h-6 w-6 mt-2 cursor-pointer ${(scrolled || router.asPath !== '/') ? 'text-black' : 'text-white'
                      } hover:text-[#ff6b01] transition-colors duration-200`} />
                  )}
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-black shadow-[#ff6b01] rounded-md shadow-lg py-1">
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
            </div>
          </div>
        </div>
      </nav>

      {/* Search and Sidebar Components */}
      {showSidebar && (
        <Sidebar
          setShowSidebar={setShowSidebar}
          categories={data[0]?.children?.slice(1, 5)}
          handleCategoryClick={handleCategoryClick}
        />
      )}

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

export default React.memo(Navbar);