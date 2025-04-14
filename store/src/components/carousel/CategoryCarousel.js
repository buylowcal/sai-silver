import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext, useRef } from "react";
import { IoChevronBackOutline, IoChevronForward } from "react-icons/io5";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

//internal import
import useAsync from "@hooks/useAsync";
import { SidebarContext } from "@context/SidebarContext";
import CategoryServices from "@services/CategoryServices";
import useUtilsFunction from "@hooks/useUtilsFunction";

const CategoryCarousel = ({ setSelectedCategory }) => {
  const { data, error } = useAsync(() => CategoryServices.getShowingCategory());
  const { showingTranslateValue } = useUtilsFunction();
  const router = useRouter();
  const { isLoading, setIsLoading } = useContext(SidebarContext);

  const handleCategoryClick = (id, category) => {
    const category_name = showingTranslateValue(category)
      ?.toLowerCase()
      .replace(/[^A-Z0-9]+/gi, "-");

    // Push to search and set selectedCategory
    router.push(`/search?category=${category_name}&_id=${id}`);
    setIsLoading(!isLoading);

    // Find the full category object by id
    const clickedCategory = data[0]?.children?.find((cat) => cat._id === id);
    if (clickedCategory) {
      setSelectedCategory(clickedCategory);
    }
  };

  return (
    <div className="hidden justify-center sm:flex overflow-x-hidden whitespace-nowrap">
      {error ? (
        <p className="text-xl text-red-500">{error}</p>
      ) : (
        data[0]?.children?.map((category, i) => (
          <div key={i} className="group flex-shrink-0">
            <div
              onClick={() =>
                handleCategoryClick(category?._id, category.name)
              }
              className="text-center cursor-pointer p-3 mt-8"
            >
              <h3 className="text-black text-[14px] tracking-widest font-sans group-hover:text-[#ff6b01] p-2 relative hover:underline">
                {showingTranslateValue(category?.name).toUpperCase()}
              </h3>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CategoryCarousel;

