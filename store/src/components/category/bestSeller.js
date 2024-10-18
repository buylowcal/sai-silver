import React, { useContext } from "react";
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

  const handleCategoryClick = (id, category) => {
    const categoryName = showingTranslateValue(category)
      ?.toLowerCase()
      .replace(/[^A-Z0-9]+/gi, "-");
    router.push(`/search?category=${categoryName}&_id=${id}`);
    setIsLoading(!isLoading);
  };

  return (
    <div className="text-center my-10">
      <h2 className="text-2xl font-bold mb-5">OUR BEST SELLING PRODUCTS</h2>
      <div className="flex justify-center space-x-4">
        {error ? (
          <p className="text-red-500">Failed to load categories</p>
        ) : (
          data[0]?.children?.map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategoryClick(category?._id, category.name)}
              className="border border-gray-400 px-4 py-2 hover:bg-[#ff6b01] hover:text-white hover:border-[#ff6b01] tracking-widest transition duration-200"
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
