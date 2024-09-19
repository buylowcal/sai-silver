import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel, EffectFade } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

const Brand = () => {
  const slides = [
    {
      img: "https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp",
      code: "26 December 2019",
      title: "Lorem Ipsum Dolor",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?",
    },
    {
      img: "https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/jason-leung-798979-unsplash.webp",
      code: "26 December 2019",
      title: "Lorem Ipsum Dolor2",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?",
    },
    {
      img: "https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/alessandro-capuzzi-799180-unsplash.webp",
      code: "26 December 2019",
      title: "Lorem Ipsum Dolor",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?",
    },
  ];

  return (
    <div className="blog-slider w-full max-w-2xl mx-auto bg-white shadow-lg p-6 rounded-3xl transition-all">
      <Swiper
        modules={[Pagination, Mousewheel, EffectFade]}
        spaceBetween={30}
        effect="fade"
        loop={true}
        mousewheel={{ invert: false }}
        pagination={{ el: '.blog-slider__pagination', clickable: true }}
        className="blog-slider__wrp"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="blog-slider__item flex flex-col md:flex-row items-center">
            <div className="blog-slider__img w-72 h-72 md:w-96 md:h-96 bg-gradient-to-r from-orange-400 to-red-500 shadow-lg rounded-2xl transform -translate-x-20 md:translate-x-0 overflow-hidden">
              <img
                src={slide.img}
                alt="Blog Image"
                className="w-full h-full object-cover transition-opacity duration-300 opacity-0"
              />
            </div>
            <div className="blog-slider__content md:pl-6 flex-1 text-center md:text-left mt-6 md:mt-0">
              <span className="blog-slider__code text-gray-500 mb-4 block font-medium">
                {slide.code}
              </span>
              <div className="blog-slider__title text-2xl font-bold text-gray-900 mb-4">
                {slide.title}
              </div>
              <div className="blog-slider__text text-gray-600 mb-6">
                {slide.text}
              </div>
              <a
                href="#"
                className="blog-slider__button inline-flex bg-gradient-to-r from-orange-400 to-red-500 py-3 px-8 rounded-full text-white shadow-lg hover:shadow-xl font-medium transition-all"
              >
                READ MORE
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute right-5 md:right-8 top-1/2 transform -translate-y-1/2">
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default Brand;
