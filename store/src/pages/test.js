import Link from "next/link";
import React from "react";

const cardData = [
  {
    id: 1,
    imgSrc:
      "https://dalhae.com/cdn/shop/products/e5earrings-gif.gif?v=1725399799&width=1445",
    title: "A woman’s jewelry tells a story of love, celebration, and beauty.",
    description: "her",
    link: "#",
  },
  {
    id: 2,
    imgSrc: "/jewel/icons/kids.png",
    title:
      "Tiny treasures for tiny hands, sparkling like a child's imagination. ",
    description: "kids",
    link: "#",
  },
  {
    id: 3,
    imgSrc:
      "https://static.wixstatic.com/media/5d3e9b_e39d04f4354d4efa92646dc3dd1208d9~mv2.gif",
    title:
      "Bold rings or subtle chains — a man’s jewelry tells his untold tales.",
    description: "him",
    link: "#",
  },
  //   {
  //     id: 4,
  //     imgSrc:
  //       "https://images.unsplash.com/photo-1521542464131-cb30f7398bc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=300&h=384&q=80",
  //     title: "Six million Sky routers had serious security flaw",
  //     description:
  //       "About six million Sky routers had a significant software bug that could have allowed hackers to take over home networks.",
  //     link: "#",
  //   },
];

const Cards = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-screen-xl mx-auto px-4 pt-16 pb-4">
        <div className="flex justify-center flex-col flex-wrap md:flex-row md:-mx-2">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-0"
            >
              <Link
                href={card.link}
                className="h-72 md:h-96 block group relative mx-2 overflow-hidden shadow-lg"
              >
                {/* Image */}
                <img
                  src={card.imgSrc}
                  alt={card.title}
                  className="absolute z-0 object-cover w-full h-72 md:h-96 transform group-hover:scale-150 transition duration-300"
                />

                {/* Gradient Overlay */}
                <div className="absolute gradient transition duration-300 group-hover:bg-black group-hover:opacity-90 w-full h-72 md:h-96 z-10"></div>

                {/* Content */}
                <div className="absolute left-0 right-0 bottom-0 p-6 z-30 transform translate-y-1/2 transition duration-300 h-full group-hover:translate-y-0 delay-100">
                  {/* Title and Description */}
                  <div className="h-1/2 relative opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0">
                      <h2 className="font-semibold font-serif text-white leading-tight text-xl pb-2">
                        {card.title} <span className="text-white text-sm font-medium tracking-widest italic">
                        ~{card.description}
                      </span>
                      </h2>
                     
                    </div>
                  </div>

                  {/* Button */}
                  <div className="h-1/2 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                    <button className="bg-[#ff6b01] text-white text-base px-4 py-2 font-semibold focus:outline-none focus:ring-2 focus:ring-white">
                      Shop Now
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
