// src/components/Navbar.jsx
import  React, { useState, useEffect,useContext, useRef  } from 'react';
import useAsync from "@hooks/useAsync";
import { SidebarContext } from "@context/SidebarContext";
import CategoryServices from "@services/CategoryServices";
import useUtilsFunction from "@hooks/useUtilsFunction";
import { useRouter } from "next/router";
import { ShoppingCartIcon, UserIcon } from '@heroicons/react/outline'; // Import icons
import { FiShoppingCart, FiUser, FiSearch, FiMenu } from 'react-icons/fi'; // Import FiMenuimport { useCart } from "react-use-cart";
import { getUserSession } from "@lib/auth";
import Link from 'next/link'
import Image from 'next/image';
import SearchBar from './search-bar';
import CartDrawer from '@components/drawer/CartDrawer';
import Sidebar from './sidebar';
import { useCart } from 'react-use-cart';
import CategoryDrawer from '@components/drawer/CategoryDrawer';



function Navbar() {
    const [navBg, setNavBg] = useState('bg-transparent');
    const [showSearch, setShowSearch] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false); // State for sidebar
    const router = useRouter();
    const userInfo = getUserSession();
  
    const { showingTranslateValue } = useUtilsFunction();
    const { isLoading, setIsLoading, toggleCartDrawer , toggleCategoryDrawer } = useContext(SidebarContext);
    const { data, error } = useAsync(() => CategoryServices.getShowingCategory());
    const { totalItems } = useCart();
  
    // For demonstration, store last searches
    const [lastSearches, setLastSearches] = useState(['Diamond Ring', 'Gold Necklace']);
  
    const handleCategoryClick = (id, category) => {
      const category_name = showingTranslateValue(category)
        ?.toLowerCase()
        .replace(/[^A-Z0-9]+/gi, '-');
  
      router.push(`/search?category=${category_name}&_id=${id}`);
      setIsLoading(!isLoading);
    };
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setNavBg('bg-white shadow-md');
        } else {
          setNavBg('bg-transparent');
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
      <>
        <CartDrawer />
        <CategoryDrawer className="w-6 h-6 drop-shadow-xl" />

        <nav className={`fixed w-full z-40 transition-all duration-300 p-4 ${navBg}`}>
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
            {/* Left Side: Logo */}
            <img
              onClick={() => router.push('/')}
              src="/logo/logo-color.png"
              className="cursor-pointer w-20 h-20 object-contain"
              alt="Brand Logo"
            />
  
            {/* Center: Categories (hidden on small screens) */}
            <div className="hidden md:flex items-center space-x-2">
              {data[0]?.children?.slice(1, 5).map((category, index) => (
                <div key={index} className="cursor-pointer group">
                  <h3
                    className="
                      relative 
                      text-xs 
                      mt-2 
                      whitespace-nowrap
                      tracking-widest 
                      font-serif 
                      leading-tight      
                      px-2               
                      mx-2                 
                      after:content-['']  
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
                      hover:text-emerald-500 
                      hover:after:scale-x-100
                      w-full                
                      sm:w-auto             
                      sm:inline-block       
                      flex-shrink-0         
                      max-w-xs              
                      text-center     
                      cursor-pointer      
                    "
                    onClick={() => handleCategoryClick(category?._id, category.name)}
                  >
                    {showingTranslateValue(category?.name).toUpperCase()}
                  </h3>
                </div>
              ))}
            </div>
  
            {/* Right Side: Icons */}
            <div className="flex items-center space-x-4">
              {/* Search Icon */}
              <FiSearch
                className="h-6 w-6 cursor-pointer text-gray-800 hover:text-emerald-500"
                onClick={() => setShowSearch(true)}
                aria-label="Search"
              />
  
              {/* Cart Icon */}
              <div className="relative">
                <FiShoppingCart
                  className="h-6 w-6 cursor-pointer text-gray-800 hover:text-emerald-500"
                  onClick={toggleCartDrawer}
                  aria-label="Cart"
                />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 inline-flex items-center justify-center p-1 h-5 w-5 text-xs font-medium leading-none text-white bg-red-500 rounded-full">
                    {totalItems}
                  </span>
                )}
              </div>
  
              {/* Profile Icon */}
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
                ) : userInfo?.name ? (
                  <Link href="/user/dashboard" className="leading-none font-bold font-serif block">
                    {userInfo?.name[0]}
                  </Link>
                ) : (
                  <Link href="/auth/login">
                    <FiUser className="h-6 w-6 cursor-pointer text-gray-800 hover:text-emerald-500" />
                  </Link>
                )}
              </button>
  
              {/* Burger Menu Icon (visible on small screens) */}
              <div className="md:hidden">
                <FiMenu
                  className="h-6 w-6 cursor-pointer text-gray-800 hover:text-emerald-500"
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
  
  export default React.memo(Navbar);