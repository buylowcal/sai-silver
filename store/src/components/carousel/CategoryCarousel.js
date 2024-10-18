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
        spaceBetween={10}
        navigation={true}
        allowTouchMove={true}
        loop={true}
       
        modules={[Navigation]}
        className="mySwiper category-slider my-8"
      >
        {error ? (
          <p className="flex justify-center align-middle items-center m-auto text-xl text-red-500">
            <span> {error}</span>
          </p>
        ) : (
          <div className="max-w-7xl">
            {data[0]?.children?.map((category, i) => (
              <SwiperSlide key={i + 1} className="group">
                <div
                  onClick={() =>
                    handleCategoryClick(category?._id, category.name)
                  }
                  className="text-center cursor-pointer p-3 bg rounded-lg"
                >
                  {/* <div className="bg-white p-2 mx-auto w-10 h-10 rounded-full shadow-md">
                    <div className="relative w-9 h-9">
                      <Image
                        src={
                          category?.icon ||
                          "https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png"
                        }
                        alt="category"
                        width={40}
                        height={40}
                        className="object-fill"
                      />
                    </div>
                  </div> */}

                  <h3
                    className="
  
    relative 
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
    w-full              
    sm:w-auto           
    sm:inline-block      
    flex-shrink-0         
    max-w-xs             
    text-center           
              
  "
                  >
                    {showingTranslateValue(category?.name).toUpperCase()}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
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
