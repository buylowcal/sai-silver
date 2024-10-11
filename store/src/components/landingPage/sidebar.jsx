// src/components/Sidebar.jsx
import React, { useRef, useEffect } from 'react';
import { Transition } from '@headlessui/react';

const Sidebar = ({ setShowSidebar, categories, handleCategoryClick }) => {
  const sidebarRef = useRef(null);

  // Close sidebar on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setShowSidebar(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setShowSidebar]);

  // console.log('categories',categories)

  // return ''

  return (
    <Transition
      show={true}
      as={React.Fragment}
      enter="transition ease-in-out duration-300 transform"
      enterFrom="-translate-x-full"
      enterTo="translate-x-0"
      leave="transition ease-in-out duration-300 transform"
      leaveFrom="translate-x-0"
      leaveTo="-translate-x-full"
    >
      <div className="fixed inset-0 flex z-50">
        {/* Overlay */}
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={() => setShowSidebar(false)}
        ></div>

        {/* Sidebar */}
        <div
          ref={sidebarRef}
          className="relative flex flex-col w-64 bg-white shadow-xl"
        >
          <div className="flex items-center justify-between p-4">
            <h2 className="text-xl font-bold">Menu</h2>
            <button
              onClick={() => setShowSidebar(false)}
              className="text-gray-800 hover:text-emerald-500"
            >
              &times;
            </button>
          </div>
          <nav className="flex-grow px-4 py-2">
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      handleCategoryClick(category?._id, category.name);
                      setShowSidebar(false);
                    }}
                    className="w-full text-left text-gray-800 hover:text-emerald-500"
                  >
                    {category.name?.en}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </Transition>
  );
};

export default Sidebar;
