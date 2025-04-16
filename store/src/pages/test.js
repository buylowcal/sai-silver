import React from 'react'

const imageUrls = [
  "/jewel/showroom/1.webp",
  "/jewel/showroom/2.webp",
  "/jewel/showroom/3.webp",
  "/jewel/showroom/4.webp",
];

const ImageGallery = () => {
  return (
    <div className="p-5 sm:p-8">

      <div class="relative h-screen">
        {/* <!-- Background Pattern --> */}
        <div class="absolute inset-0">
          <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
        </div>

        {/* <!-- Hero Content --> */}
        <div className="columns-1 gap-2 sm:columns-2 sm:gap-4 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
          {imageUrls.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Gallery ${index + 1}`}
              className={`grayscale hover:grayscale-0 transition duration-300 ease-in-out w-full hover:scale-105  shadow-md ${index % 2 === 0  ? 'translate-y-16' : '-translate-y-5'
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;