import Image from "next/image";
import React from "react";

const cardData = [
  {
    img: "https://www.subzero-wolf.com/-/media/small-image-with-text/home/visit-a-showroom.png?as=1&h=200&width=300&udi=1&cropregion=0,40,700,509",
    title: "VISIT A SHOWROOM",
    description:
      "Discover an immersive experience that's well worth your time.",
    subText: "Find showroom",
  },
  {
    img: "https://www.subzero-wolf.com/-/media/small-image-with-text/home/give-us-a-call.png?as=1&h=200&width=300&udi=1&cropregion=0,61,700,528",
    title: "GIVE US A CALL",
    description:
      "Sub-Zero, Wolf, and Cove are here to answer questions.",
    subText: "Get in touch",
  },
  {
    img: "https://www.subzero-wolf.com/-/media/small-image-with-text/home/request-a-brochure.png?as=1&h=200&width=300&udi=1&cropregion=0,20,700,486",
    title: "REQUEST A BROCHURE",
    description:
      "Browse the latest products and find design inspiration.",
    subText: "Get my brochure",
  },
];

const Journey = () => {
  return (
    <div className="bg-gray-50 py-8">
      <span className="uppercase tracking-widest text-black font-medium text-[15px] flex justify-center mb-2">
      WHAT'S NEXT
      </span>
      <h2 className="text-4xl font-normal tracking-wider font-serif text-center text-black mb-6">
      Ready to embark on your kitchen journey?
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

export default Journey;
