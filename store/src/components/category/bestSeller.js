import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import useAsync from "@hooks/useAsync";
import { SidebarContext } from "@context/SidebarContext";
import CategoryServices from "@services/CategoryServices";
import useUtilsFunction from "@hooks/useUtilsFunction";

const BestSellingProducts = () => {
  const router = useRouter();
  const { showingTranslateValue } = useUtilsFunction();
  const { isLoading, setIsLoading } = useContext(SidebarContext);
  const { data, error } = useAsync(() => CategoryServices.getShowingCategory());
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [forHerCategories, setForHerCategories] = useState([]);
  const [forHimCategories, setForHimCategories] = useState([]);
  useEffect(() => {
    if (data && data.length > 0) {
      const homeCategory = data.find(cat => cat.name.en === "Home");
      if (homeCategory) {
        const forHerCategory = homeCategory.children.find(child => child.name.en === "FOR HER");
        const forHimCategory = homeCategory.children.find(child => child.name.en === "FOR HIM");

        if (forHerCategory) {
          console.log("FOR HER Categories Loaded:", forHerCategory.children); // Debugging
          setForHerCategories(forHerCategory.children);
        }

        if (forHimCategory) {
          console.log("FOR HIM Categories Loaded:", forHimCategory.children); // Debugging
          setForHimCategories(forHimCategory.children);
        }
      } else {
        console.error("There is no 'Home' category in the data.");
      }
    }
  }, [data]);
  const handleCategoryClick = (category) => {
    console.log("Clicked Category:", category.name.en);
  
    if (category.name.en === "FOR HER") {
      setSelectedCategory({ ...category, children: forHerCategories });
    } else if (category.name.en === "FOR HIM") {
      setSelectedCategory({ ...category, children: forHimCategories });
    } else if (category.children && category.children.length > 0) {
      setSelectedCategory(category);
    } else {
      const categoryName = showingTranslateValue(category.name)
        ?.toLowerCase()
        .replace(/[^A-Z0-9]+/gi, "-");
      router.push(`/search?category=${categoryName}&_id=${category._id}`);
    }
    console.log("Current Selected Category:", selectedCategory);
  };
  

  return (
    <div className="text-center my-10 mt-8">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal tracking-wide mb-5">
        OUR BEST SELLING PRODUCTS
      </h2>

      <div className="flex gap-4 overflow-x-auto whitespace-nowrap px-4 sm:px-6 md:px-8 scrollbar-hide scroll-smooth">
        {error ? (
          <p className="text-red-500">Failed to load categories</p>
        ) : selectedCategory ? (
          selectedCategory.name.en === "FOR HIM" ? (
            forHimCategories.map((category) => (
              <button
                key={category._id}
                onClick={() => handleCategoryClick(category)}
                className="border border-gray-400 px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 text-xs sm:text-sm md:text-base hover:bg-[#ff6b01] hover:text-white hover:border-[#ff6b01] tracking-widest transition duration-200"
              >
                {showingTranslateValue(category?.name).toUpperCase()}
              </button>
            ))
          ) : selectedCategory.name.en === "FOR HER" ? (
            forHerCategories.map((category) => (
              <button
                key={category._id}
                onClick={() => handleCategoryClick(category)}
                className="border border-gray-400 px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 text-xs sm:text-sm md:text-base hover:bg-[#ff6b01] hover:text-white hover:border-[#ff6b01] tracking-widest transition duration-200"
              >
                {showingTranslateValue(category?.name).toUpperCase()}
              </button>
            ))
          ) : (
            selectedCategory.children?.map((category) => (
              <button
                key={category._id}
                onClick={() => handleCategoryClick(category)}
                className="border border-gray-400 px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 text-xs sm:text-sm md:text-base hover:bg-[#ff6b01] hover:text-white hover:border-[#ff6b01] tracking-widest transition duration-200"
              >
                {showingTranslateValue(category?.name).toUpperCase()}
              </button>
            ))
          )
        ) : (
          forHerCategories.map((category) => (
            <button
              key={category._id}
              onClick={() => handleCategoryClick(category)}
              className="border border-gray-400 px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 text-xs sm:text-sm md:text-base hover:bg-[#ff6b01] hover:text-white hover:border-[#ff6b01] tracking-widest transition duration-200"
            >
              {showingTranslateValue(category?.name).toUpperCase()}
            </button>
          ))
        )}


      </div>
    </div>
  );
};

export default BestSellingProducts;
