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
  const [searchText, setSearchText] = useState("");
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (showSearch) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [showSearch]);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText) {
      router.push(`/search?query=${searchText}`, null, { scroll: false });
      setSearchText("");
      handleLogEvent("search", `searched ${searchText}`);
    } else {
      router.push(`/`, null, { scroll: false });
      setSearchText("");
    }
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${showSearch ? 'opacity-100' : 'opacity-0'}`}>
      <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300"></div>
      <div
        ref={searchRef}
        className={`absolute top-0 left-0 right-0 bg-white p-4 shadow-md transition-transform duration-300 ease-in-out ${
          showSearch ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="max-w-4xl mx-auto flex items-center">
          <img
            onClick={() => setShowSearch(false)}
            src="/logo/logo-color.png"
            className="cursor-pointer w-72 h-auto object-contain"
            alt="Brand Logo"
         
          />
          <form
            onSubmit={handleSubmit}
            className="relative pr-12 md:pr-14 bg-white overflow-hidden shadow-sm rounded-md w-full"
          >
            <label className="flex items-center py-">
              <input
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
                className="form-input w-full pl-5 appearance-none  transition shadow-2xl ease-in-out border-t text-input text-sm font-sans rounded-md min-h-10 h-10 duration-200 bg-white focus:ring-0 outline-none border-r-none rounded-r-none border-l border-b focus:outline-none placeholder-gray-500 placeholder-opacity-75"
                placeholder={t(`pendants, studs and much more.....`)}
              />
            </label>
            <button
              aria-label="Search"
              type="submit"
              className="outline- rounded-md text-xl border-r border-t rounded-l-none border-b text-gray-400 absolute top-0 right-0 end-0 w-12 md:w-14 h-full bg-white flex items-center justify-center transition duration-200 ease-in-out hover:text-heading focus:outline-none"
            >
              <IoSearchOutline />
            </button>
          </form>
        </div>
        <div className="mx-auto w-full text-center flex justify-center items-center mt-4 px-4">
          <h4 className="text-gray-700 font-semibold">{'Popular Searches: '}</h4>
          <div className="">
            {lastSearches.slice(-2).map((search, index) => (
              <span key={index} className="whitespace-nowrap text-gray-600 ml-2">
                {search}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
