import useUtilsFunction from "@hooks/useUtilsFunction";
import React, { useContext} from "react";
import useAsync from "@hooks/useAsync";
import { useRouter } from "next/router";
import CategoryServices from "@services/CategoryServices";

const { showingTranslateValue } = useUtilsFunction();
const { isLoading, setIsLoading } = useContext(SidebarContext);
const { data, error } = useAsync(() => CategoryServices.getShowingCategory());

const BestSellingProducts = () => {
  const router = useRouter();

  const products = [
    "ALL JEWELLERY",
    "COMBO SET",
    "PERSONALIZED JEWELLERY",
    "RINGS",
    "EARRINGS",
    "BRACELETS",
    "ANKLETS",
    "NECKLACE",
  ];
  const handleCategoryClick = (id, category) => {
    const category_name = showingTranslateValue(category)
      ?.toLowerCase()
      .replace(/[^A-Z0-9]+/gi, "-");

    router.push(`/search?category=${category_name}&_id=${id}`);
    setIsLoading(!isLoading);
  };
  return (
    <div className="text-center my-10">
      <h2 className="text-4xl font-light tracking-wider  mb-12">
        OUR BEST SELLING PRODUCTS
      </h2>
      {data[0]?.children?.map((category, i) => (
      <div className="flex justify-center space-x-4">
        {products.map((product, index) => (
          <button
            onClick={() => handleCategoryClick(category?._id, category.name)}
            key={index}
            className="border border-gray-400 px-4 py-2 hover:bg-[#ff6b01] hover:border-[#ff6b01] tracking-widest hover:text-white transition duration-200"
          >
         {showingTranslateValue(category?.name).toUpperCase()}
          </button>
        ))}
      </div>
      ))}
    </div>
  );
};

export default BestSellingProducts;
