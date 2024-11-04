// src/components/SearchBar.jsx
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { handleLogEvent } from "src/lib/analytics";
import useTranslation from "next-translate/useTranslation";
import { IoSearchOutline } from 'react-icons/io5';
import { useRouter } from 'next/router';

 
const SearchBar = ({ showSearch, setShowSearch, lastSearches }) => {
  const { t } = useTranslation();
  const searchRef = useRef(null);
  const inputRef = useRef(null);
  const [searchText, setSearchText] = useState("");
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  // Handle visibility state
  useEffect(() => {
    if (showSearch) {
      setIsVisible(true);
      // Auto focus input when search opens
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [showSearch]);

  // Handle click outside and escape key
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setShowSearch(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [setShowSearch]);

  // Handle search submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchText.trim())}`, null, { scroll: false });
      handleLogEvent("search", `searched ${searchText.trim()}`);
    } else {
      router.push(`/`, null, { scroll: false });
    }
    setSearchText("");
    setShowSearch(false);
  };

  // Handle popular search click
  const handlePopularSearchClick = (search) => {
    setSearchText(search);
    inputRef.current?.focus();
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`
        fixed inset-0 z-[60] 
        transition-all duration-500 ease-in-out
        ${showSearch ? 'opacity-100' : 'opacity-0 pointer-events-none'}
      `}
    >
      {/* Overlay with blur effect */}
      <div 
        className="
          absolute inset-0 
          bg-black/60 backdrop-blur-sm 
          transition-opacity duration-300
        "
        onClick={() => setShowSearch(false)}
      />

      {/* Main search container */}
      <div
        ref={searchRef}
        className={`
          absolute w-full bg-white
          transition-all duration-500 ease-out
          ${showSearch ? 'translate-y-0' : '-translate-y-full'}
          shadow-[0_8px_30px_rgb(0,0,0,0.12)]
        `}
      >
        <div className="max-w-7xl mx-auto p-4 md:p-6">
          {/* Logo and search section */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            {/* Logo */}
            <img
              onClick={() => setShowSearch(false)}
              src="/logo/logo-color.png"
              className="cursor-pointer w-48 md:w-72 h-auto object-contain transition-transform hover:scale-95"
              alt="Brand Logo"
            />

            {/* Search form */}
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-3xl relative group"
            >
              <label className="block w-full">
                <input
                  ref={inputRef}
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  className="
                    w-full py-3 px-5 md:py-4 md:px-6
                    text-base md:text-lg
                    border border-gray-200 rounded-xl
                    focus:ring-2 focus:ring-orange-200
                    focus:border-orange-400
                    transition-all duration-200
                    outline-none
                    placeholder:text-gray-400
                    group-hover:border-orange-200
                  "
                  placeholder={t(`pendants, studs and much more.....`)}
                />
              </label>

              <button
                aria-label="Search"
                type="submit"
                className="
                  absolute right-3 top-1/2 -translate-y-1/2
                  w-10 h-10 md:w-12 md:h-12
                  flex items-center justify-center
                  text-gray-400 hover:text-orange-500
                  transition-colors duration-200
                  text-xl md:text-2xl
                "
              >
                <IoSearchOutline className="transition-transform group-hover:scale-110" />
              </button>
            </form>
          </div>

          {/* Popular searches */}
          <div className="
            mt-6 md:mt-8 
            flex flex-wrap items-center justify-center 
            gap-2 text-sm md:text-base
            animate-fadeIn
          ">
            <h4 className="font-medium text-gray-700">Popular Searches:</h4>
            <div className="flex flex-wrap gap-2 items-center">
              {lastSearches.slice(-3).map((search, index) => (
                <button
                  key={index}
                  onClick={() => handlePopularSearchClick(search)}
                  className="
                    px-3 py-1.5 rounded-full
                    bg-gray-100 hover:bg-gray-200
                    text-gray-600 hover:text-gray-800
                    transition-all duration-200
                    hover:scale-105
                  "
                >
                  {search}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom fade effect */}
        <div 
          className="
            absolute -bottom-8 left-0 right-0 h-8 
            bg-gradient-to-b from-white to-transparent
          " 
        />
      </div>
    </div>
  );
};

export default SearchBar;