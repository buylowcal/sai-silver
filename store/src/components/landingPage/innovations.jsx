import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Innovations = () => {
  // Dummy blog data
  const blogs = [
    {
      title: "How to Build your Customer Journey",
      image:
        "https://media.croma.com/image/upload/v1697625685/Croma%20Assets/Small%20Appliances/Microwave%20or%20OTG/Images/218408_uonmfe.png",
    },
    {
      title:
        "What Social Media Platforms Should Your Small Business Prioritize?",
      image:
        "https://media.croma.com/image/upload/v1697625685/Croma%20Assets/Small%20Appliances/Microwave%20or%20OTG/Images/218408_uonmfe.png",
    },
    {
      title: "How to Rank on TikTok Search Results: Guide to TikTok SEO",
      image:
        "https://media.croma.com/image/upload/v1697625685/Croma%20Assets/Small%20Appliances/Microwave%20or%20OTG/Images/218408_uonmfe.png",
    },
    {
      title: "Maximizing Your Small Business Budget: Marketing Tips",
      image:
        "https://media.croma.com/image/upload/v1697625685/Croma%20Assets/Small%20Appliances/Microwave%20or%20OTG/Images/218408_uonmfe.png",
    },
    {
      title: "Top Social Media Trends for 2024",
      image:
        "https://media.croma.com/image/upload/v1697625685/Croma%20Assets/Small%20Appliances/Microwave%20or%20OTG/Images/218408_uonmfe.png",
    },
    {
      title: "Using AI in Your Marketing Strategy",
      image:
        "https://media.croma.com/image/upload/v1697625685/Croma%20Assets/Small%20Appliances/Microwave%20or%20OTG/Images/218408_uonmfe.png",
    },
    // Add more blogs as needed
  ];

  // State to keep track of the current page of blog posts
  const [currentPage, setCurrentPage] = useState(0);
  const blogsPerPage = 3;

  // Logic to get the current set of blogs to display
  const startIndex = currentPage * blogsPerPage;
  const currentBlogs = blogs.slice(startIndex, startIndex + blogsPerPage);

  // Handler for Next and Prev buttons
  const handleNext = () => {
    if (startIndex + blogsPerPage < blogs.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Animation variants for Framer Motion
  const animationVariants = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 200 },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-left">
        <span className="uppercase tracking-widest text-black font-medium text-[15px] flex justify-start ml-12 ">
          OUR LATEST INNOVATIONS
        </span>
        <h2 className="text-5xl font-serif mt-4 mb-12 ml-12 mr-12">
          Discover what’s new
        </h2>
        <div className="relative flex justify-end items-center">
          <button className="px-6 py-2 border border-black rounded-full hover:bg-black hover:text-white transition-colors">
            CHECK ALL
          </button>
        </div>
        <div className="flex justify-end items-end mt-1">
          <button
            onClick={handlePrev}
            disabled={currentPage === 0}
            className={`p-2 ${
              currentPage === 0
                ? "opacity-50 cursor-not-allowed"
                : " hover:text-customGray transition-colors"
            }`}
          >
            <svg
              className="w-6 h-6 fill-current text-black"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M14.71 16.29a1 1 0 0 1-1.42 0L8.3 12.3a1 1 0 0 1 0-1.42l4.99-4.99a1 1 0 0 1 1.42 1.42L10.41 11l4.3 4.29a1 1 0 0 1 0 1.42z" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            disabled={startIndex + blogsPerPage >= blogs.length}
            className={`p-2 ${
              startIndex + blogsPerPage >= blogs.length
                ? "opacity-50 cursor-not-allowed"
                : " hover:text-customGray transition-colors"
            }`}
          >
            <svg
              className="w-6 h-6 fill-current text-black"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M9.29 16.29a1 1 0 0 0 1.42 0l4.99-4.99a1 1 0 0 0 0-1.42l-4.99-4.99a1 1 0 0 0-1.42 1.42L12.3 11l-4.29 4.29a1 1 0 0 0 0 1.42z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6  ml-12">
        <AnimatePresence mode="wait">
          {currentBlogs.map((blog) => (
            <motion.div
              key={blog.title}
              className="rounded-lg overflow-hidden"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={animationVariants}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-full h-[450px] shadow-lg border">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className=" text-justify">
                <h3 className="text-base font-normal tracking-wide">
                  {blog.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Pagination Controls */}
    </div>
  );
};

export default Innovations;
