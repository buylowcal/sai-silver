import dynamic from "next/dynamic";
import Image from "next/image";
import { useRef } from "react";
import { IoChevronBackOutline, IoChevronForward } from "react-icons/io5"; // requires a loader
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const ImageCarousel = ({ images, handleChangeImage }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      {/* <Carousel showArrows={false} showThumbs={true}>
      //   {images?.map((img, i) => (
      //     <button key={i + 1} onClick={() => handleChangeImage(img)}>
      //       <Image
      //         className="border inline-flex items-center justify-center px-3 py-1 mt-2"
      //         src={img}
      //         alt="product"
      //         width={85}
      //         height={85}
      //       />
      //     </button>
      //   ))}
      // </Carousel> */}

      <Swiper
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        spaceBetween={40}
        loop={true}
        slidesPerView={4}
        allowTouchMove={true}
        breakpoints={{
          0: {
            slidesPerView: 3,
            navigation: false,
          },
          480: {
            slidesPerView: 3,
            navigation: false,
          },
          768: {
            slidesPerView: 5,
            navigation: {
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            },
          },
        }}
        modules={[Navigation]}
        className="mySwiper image-carousel"
      >
        {images?.map((img, i) => (
          <SwiperSlide key={i + 1} className="group">
            <button onClick={() => handleChangeImage(img)}>
            <div className="border inline-flex items-center justify-center w-[100px] h-[100px] overflow-hidden mt-2">
              <Image
                src={img}
                alt="product"
                width={100}
                height={100}
                className="object-cover "
              />
              </div>
            </button>
          </SwiperSlide>
        ))}
        <button
          ref={prevRef}
          className="prev absolute top-1/2 left-0 transform -translate-y-1/2 z-20 p-2 bg-white rounded-full shadow hidden md:block"
        >
          <IoChevronBackOutline style={{ color: "orange", fontSize: "26px" }} />
        </button>
        <button
          ref={nextRef}
          className="next absolute top-1/2 right-0 transform -translate-y-1/2 z-20 p-2 bg-white rounded-full shadow hidden md:block"
        >
          <IoChevronForward style={{ color: "orange", fontSize: "26px", fontFamily: "bold" }} />
        </button>
      </Swiper>
    </>
  );
};

export default dynamic(() => Promise.resolve(ImageCarousel), { ssr: false });
