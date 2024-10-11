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
      <Swiper
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        spaceBetween={80}
        navigation={true}
        allowTouchMove={false}
        loop={true}
        breakpoints={{
          // when window width is >= 640px
          375: {
            width: 375,
            slidesPerView: 2,
          },
          // when window width is >= 768px
          414: {
            width: 414,
            slidesPerView: 3,
          },
          // when window width is >= 768px
          660: {
            width: 660,
            slidesPerView: 4,
          },

          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 6,
          },

          // when window width is >= 768px
          991: {
            width: 991,
            slidesPerView: 8,
          },

          // when window width is >= 768px
          1140: {
            width: 1140,
            slidesPerView: 8,
          },
          1680: {
            width: 1680,
            slidesPerView: 10,
          },
          1920: {
            width: 1920,
            slidesPerView: 10,
          },
        }}
        modules={[Navigation]}
        className="mySwiper category-slider my-10"
      >
        {error ? (
          <p className="flex justify-center align-middle items-center m-auto text-xl text-red-500">
            <span> {error}</span>
          </p>
        ) : (
          <div className="max-w-7xl  mt-4 justify-center tracking-widest flex flex-wrap items-center ">
            {data[0]?.children?.slice(1, 8).map((category, i) => 
            {
              
              return   <div className="flex ">
               

                <span
                  className="
  
    relative 
    text-xs 
    sm:text-xs 
    md:text-xs 
    
    mt-2 
    whitespace-nowrap
    tracking-widest 
    font-serif 
    group-hover:text-emerald-500 
    leading-tight      
    px-2               
    mx-2                 
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
    w-full                /* Full width on small screens */
    sm:w-auto             /* Auto width on small screens and above */
    sm:inline-block       /* Inline-block on small screens and above */
    flex-shrink-0         /* Prevents shrinking to avoid overlap */
    max-w-xs              /* Sets a maximum width to prevent overflow */
    text-center           /* Centers text within the element */
              /* Allows long words to break and wrap */
  "
                >
                  {showingTranslateValue(category?.name).toUpperCase()}
                </span>
              </div>
})}
          </div>
        )}
        {/* <button ref={prevRef} className="prev">
          <IoChevronBackOutline className="" />
        </button>
        <button ref={nextRef} className="next">
          <IoChevronForward />
        </button> */}
      </Swiper>
    </>
  );
};

export default React.memo(CategoryCarousel);
