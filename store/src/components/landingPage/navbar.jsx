// src/components/Navbar.jsx
import React, { useState, useEffect, useContext, useRef } from "react";
import useAsync from "@hooks/useAsync";
import { SidebarContext } from "@context/SidebarContext";
import CategoryServices from "@services/CategoryServices";
import useUtilsFunction from "@hooks/useUtilsFunction";
import { useRouter } from "next/router";
import { ShoppingCartIcon, UserIcon } from "@heroicons/react/outline"; // Import icons
import { FiShoppingCart, FiUser, FiSearch, FiMenu } from "react-icons/fi"; // Import FiMenuimport { useCart } from "react-use-cart";
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
      console.log("handle scroll bhggg raha hai ");
      // Check the scroll position and update the navbar background if not on the search page
      if (
        window.scrollY > window.innerHeight
        //  &&
        // !router.pathname.includes("/search")
      ) {
        console.log("setnavbg:", setNavBg);
        console.log("setnavbggggggggg:");

        setNavBg("bg-black");
      } else {
        setNavBg("bg-transparent");
      }
    };

    // Check if the current route is the search page
    if (router.pathname.includes("/search") || "/product/[slug]") {
      setNavBg("bg-black"); // Set navbar to black for all category search pages
    } else {
      // Add scroll event listener if not on the search page
    }
    window.addEventListener("scroll", handleScroll);
    // Cleanup the event listener on component unmount or route change
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [router.pathname]);

  return (
    <>
      <CartDrawer />
      <CategoryDrawer className="w-6 h-6 drop-shadow-xl text-white " />

      <div className="bg-pink-200 w-full text-black p-4 ">Navbar</div>

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

export default React.memo(Navbar);
