import Image from "next/image";
import React from "react";

const cardData = [
  {
    img: "https://www.subzero-wolf.com/-/media/small-image-with-text/home/owner-resources.png?as=1&h=200&width=300&udi=1&cropregion=0,11,700,479",
    title: "Owner Resources",
    description:
      "Find product information, recipes, and inspiration to make your meals more memorable and your ownership experience more rewarding.",
    subText: "See Resources",
  },
  {
    img: "https://www.subzero-wolf.com/-/media/small-image-with-text/home/trade-resources.png?as=1&h=200&width=300&udi=1&cropregion=15,0,673,438",
    title: "Trade Resources",
    description:
      "Simplify the process of specifying, configuring, and installing our products with a wide array of technical information and assistance.",
    subText: "See Resources",
  },
  {
    img: "https://www.subzero-wolf.com/-/media/small-image-with-text/home/product-support.png?as=1&h=200&width=300&udi=1&cropregion=6,0,644,425",
    title: "Product Support",
    description:
      "Start here to find details on specific products, register your appliances, review warranty information, or watch use and care videos.",
    subText: "Find Support",
  },
];

const ToolsResources = () => {
  return (
    <div className="bg-gray-50 py-8">
      <span className="uppercase tracking-widest text-black font-medium text-[15px] flex justify-center mb-2">
        enhance your experience
      </span>
      <h2 className="text-4xl font-normal tracking-wider font-serif text-center text-black mb-6">
        Helpful tools and resources
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="relative flex w-80 flex-col rounded-xl bg-white text-gray-700 shadow-md"
          >
            <div className="relative h-48 overflow-hidden rounded-t-lg">
              <Image
                src={card.img}
                alt={card.title}
                width={500}
                height={500}
                className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h5 className="mb-2 block text-black font-sans text-xl text-center font-medium uppercase leading-snug tracking-widest antialiased">
                {card.title}
              </h5>
              <p className="block font-sans text-center text-slate-500 text-base tracking-wider font-thin leading-relaxed">
                {card.description}
              </p>
            </div>
            <div className="p-6 pt-0 flex justify-center">
              <button
                data-ripple-light="true"
                type="button"
                className="flex items-center select-none py-3 px-6 text-center align-middle font-sans text-sm font-medium italic text-black group"
              >
                {card.subText}
                <svg
                  className="w-6 h-5 text-black ml-1 transition-transform duration-300 group-hover:translate-x-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m9 5 7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsResources;
