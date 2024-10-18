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

const CategoryCarousel = () => {
  const router = useRouter();

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const { showingTranslateValue } = useUtilsFunction();
  const { isLoading, setIsLoading } = useContext(SidebarContext);
  const { data, error } = useAsync(() => CategoryServices.getShowingCategory());

  const handleCategoryClick = (id, category) => {
    const category_name = showingTranslateValue(category)
      ?.toLowerCase()
      .replace(/[^A-Z0-9]+/gi, "-");

    router.push(`/search?category=${category_name}&_id=${id}`);
    setIsLoading(!isLoading);
  };

  return (
    <>
      <div className="flex overflow-x-auto whitespace-nowrap hidden sm:flex">
        {error ? (
          <p className="flex justify-center align-middle items-center m-auto text-xl text-red-500">
            <span> {error}</span>
          </p>
        ) : (
          data[0]?.children?.map((category, i) => (
            <div key={i + 1} className="group flex-shrink-0">
              <div
                onClick={() =>
                  handleCategoryClick(category?._id, category.name)
                }
                className="text-center cursor-pointer p-3 mt-8 mx-auto"
              >
                <h3
                  className="
                  text-black
                  text-[14px]
                  sm:text-[14px]
                  md:text-[14px]
                  mt-2
                  whitespace-nowrap
                  tracking-widest
                  font-sans
                  group-hover:text-[#ff6b01]
                  leading-loose
                  p-2
                  px-2
                  mx-2
                  relative
                  after:content-[' ']
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
                  hover:after:scale-x-100
                "
                >
                  {showingTranslateValue(category?.name).toUpperCase()}
                </h3>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default React.memo(CategoryCarousel);
