import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import useAsync from "@hooks/useAsync";
import { SidebarContext } from "@context/SidebarContext";
import CategoryServices from "@services/CategoryServices";
import useUtilsFunction from "@hooks/useUtilsFunction";

const BestSellingProducts = ({ selectedCategory, setSelectedCategory }) => {
  const router = useRouter();
  const { showingTranslateValue } = useUtilsFunction();
  const { isLoading, setIsLoading } = useContext(SidebarContext);
  const { data, error } = useAsync(() => CategoryServices.getShowingCategory());
  // const [selectedCategory, setSelectedCategory] = useState(null);
  const [forHerCategories, setForHerCategories] = useState([]);
  const [forHimCategories, setForHimCategories] = useState([]);
  const [forKidsCategories, setForKidsCategories] = useState([]);
  // console.log("selectedcategory846798: ", selectedCategory)
  const handleCategoryClick = (category) => {
    console.log("Clicked Category:", category.name.en);

    if (category.name.en.toUpperCase() === "FOR HER") {
      setSelectedCategory({ ...category, children: forHerCategories });
    } else if (category.name.en.toUpperCase() === "FOR HIM") {
      setSelectedCategory({ ...category, children: forHimCategories });
    } else if (category.children && category.children.length > 0) {
      setSelectedCategory(category);
    } else {
      const categoryName = showingTranslateValue(category.name)
        ?.toLowerCase()
        .replace(/[^A-Z0-9]+/gi, "-");
      router.push(`/search?category=${categoryName}&_id=${category._id}`);
    }
    // console.log("Current Selected Category:", selectedCategory);
  };

  useEffect(() => {
    if (data && data.length > 0) {
      const homeCategory = data.find((cat) => cat.name.en.toLowerCase() === "home");
      if (homeCategory) {
        homeCategory.children.forEach((child) => {
          const childName = child.name.en.toLowerCase().trim();
          console.log("@@@", childName)
          if (childName === "for her" && child.children?.length > 0) {
            console.log("Her categories: ", child.children)
            console.log("Her categories24436549: ", forHerCategories)
            setForHerCategories(child.children);
          } else if (childName === "for him" && child.children?.length > 0) {
            console.log("him categories: ", child.children)
            console.log("him categories24436549: ", forHimCategories)
            setForHimCategories(child.children);
            console.log("him categories24436549: ", forHimCategories)

          } else if (childName === "kids" && child.children?.length > 0) {
            console.log("kids categories: ", child.children)
            console.log("kids categories24436549: ", forKidsCategories)
            setForKidsCategories(child.children);

          }
        });

        // Set default selected category (priority: for her > for him > kids)
        // const defaultCat =
        //   homeCategory.children.find(
        //     (child) => child.name.en.toLowerCase() === "for her" && child.children?.length > 0
        //   ) ||
        //   homeCategory.children.find(
        //     (child) => child.name.en.toLowerCase() === "for him" && child.children?.length > 0
        //   ) ||
        //   homeCategory.children.find(
        //     (child) => child.name.en.toLowerCase() === "kids" && child.children?.length > 0
        //   );

        // if (defaultCat) {
        //   setSelectedCategory({ ...defaultCat });
        // }
      }
    }
  }, [data]);

  const getButtons = () => {
    if (selectedCategory?.children?.length > 0) {
      // Show subcategories of the selected main category
      return selectedCategory.children.map((category) => (
        <button
          key={category._id}
          onClick={() => handleCategoryClick(category)}
          className="border border-gray-400 px-3 py-2 text-sm hover:bg-[#ff6b01] hover:text-white hover:border-[#ff6b01] tracking-widest transition duration-200"
        >
          {showingTranslateValue(category.name).toUpperCase()}
        </button>
      ));
    } else if (!selectedCategory) {
      // Initial state - show all subcategories for all main categories
      const allSubcategories = [
        ...forHerCategories,
        ...forHimCategories,
        ...forKidsCategories,
      ];
      return allSubcategories.map((category) => (
        <button
          key={category._id}
          onClick={() => handleCategoryClick(category)}
          className="border border-gray-400 px-3 py-2 text-sm hover:bg-[#ff6b01] hover:text-white hover:border-[#ff6b01] tracking-widest transition duration-200"
        >
          {showingTranslateValue(category.name).toUpperCase()}
        </button>
      ));
    }

    return []; // No subcategories to show
  };

  return (
    <div className="text-center my-10 mt-8">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal tracking-wide mb-5">
        OUR BEST SELLING PRODUCTS
      </h2>

      <div className="flex justify-center mt-8 gap-2 overflow-x-auto whitespace-nowrap px-4 sm:px-6 md:px-8 scrollbar-hide scroll-smooth">
        {error ? (
          <p className="text-red-500">Failed to load categories</p>
        ) : getButtons().length > 0 ? (
          getButtons()
        ) : (
          <p className="text-gray-500">No subcategories to show</p>
        )}

      </div>
    </div>
  );
};

export default BestSellingProducts;
