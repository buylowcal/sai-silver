import React, { useContext } from "react";
import { useRouter } from "next/router";
import { SidebarContext } from "@context/SidebarContext";

const cardData = [
  {
    id: "67daa7242f25061c15ec8dc1", // Example category ID
    imgSrc:
      "https://dalhae.com/cdn/shop/products/e5earrings-gif.gif?v=1725399799&width=1445",
    description: "for her",
    category: "for-her",
  },
  {
    id: "67daa7242f25061c15ec8dc2",
    imgSrc: "/jewel/icons/kids.png",
    description: "kids",
    category: "kids",
  },
  {
    id: "67daa7242f25061c15ec8dc3",
    imgSrc:
      "https://static.wixstatic.com/media/5d3e9b_e39d04f4354d4efa92646dc3dd1208d9~mv2.gif",
    description: "for him",
    category: "for-him",
  },
];

const HumanCategory = () => {
  const router = useRouter();
  const { isLoading, setIsLoading } = useContext(SidebarContext);

  const handleCategoryClick = (id, description) => {
    router.push(`/search?category=${description}&_id=${id}`);
    setIsLoading(!isLoading);
  };

  return (
    <div className="p-5">
      <div className="max-w-screen-xl mx-auto px-4 pt-4 pb-4">
        <h2 className="text-3xl font-serif text-center tracking-widest mb-8 uppercase">
          <span className="text-lg text-gray-600"> Shop by</span> <br />
          Elegance for Everyone
        </h2>
        <div className="flex justify-center flex-col flex-wrap md:flex-row md:-mx-2">
          {cardData.map((card) => (
            <div key={card.id} className="w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-0">
              <div className="h-72 md:h-96 block group relative mx-2 overflow-hidden shadow-lg">
                {/* Image */}
                <img
                  src={card.imgSrc}
                  alt={card.description}
                  className="absolute z-0 object-cover w-full h-80 md:h-96 transform group-hover:scale-150 transition duration-300"
                />

                {/* Gradient Overlay */}
                <div className="absolute gradient transition duration-300 group-hover:bg-orange-500/50 group-hover:opacity-80 w-full h-72 md:h-96 z-10"></div>

                {/* Content */}
                <div className="absolute left-0 right-0 bottom-0 p-6 z-30 transform translate-y-1/2 transition duration-300 h-full group-hover:translate-y-0 delay-100 flex flex-col justify-center items-center">
                  {/* Description */}
                  <div className="text-white text-lg font-medium italic opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                    ~ {card.description}
                  </div>

                  {/* Button */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                    <button
                      onClick={() => handleCategoryClick(card.id, card.category)}
                      className="bg-[#ff6b01] text-white text-base px-4 py-2 -mb-8 font-semibold focus:outline-none focus:ring-2 focus:ring-white"
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HumanCategory;
