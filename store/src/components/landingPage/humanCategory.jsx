import React, { useContext } from "react";
import { useRouter } from "next/router";
import { SidebarContext } from "@context/SidebarContext";
import useUtilsFunction from "@hooks/useUtilsFunction";
import useAsync from "@hooks/useAsync";
import CategoryServices from "@services/CategoryServices";

const cardData = [
  {
    imgSrc:
      "/jewel/for her.gif",
    imgStatic: "/jewel/herstatic.webp",
    description: "for her",
  },
  {
    imgSrc: "/jewel/icons/kids.png",
    description: "kids",
    imgStatic: "/jewel/icons/kids.png",

  },
  {
    imgSrc:
      "/jewel/for him.gif",
    imgStatic: "/jewel/himstatic.webp",

    description: "for him",
  },
];

const HumanCategory = () => {
  const router = useRouter();
  const { isLoading, setIsLoading } = useContext(SidebarContext);
  const { showingTranslateValue } = useUtilsFunction();
  const { data, error } = useAsync(() => CategoryServices.getShowingCategory());
  console.log("Fetched Categories:", data);

  const handleCategoryClick = (id, description) => {
    if (!id || !description) return; // Prevents errors

    const category_name = showingTranslateValue(description)
      ?.toLowerCase()
      .replace(/[^A-Z0-9]+/gi, "-");

    router.push(`/search?category=${category_name}&_id=${id}`);
    setIsLoading(!isLoading);
  };
  console.log("Fetched Categories:", data[0]?.children);
  if (!data || data.length === 0 || !data[0]?.children) {
    return null; // Prevents rendering when there's no data
  }

  const sortedData = [
    ...data[0]?.children?.filter(category => category.type === 'her'),
    ...data[0]?.children?.filter(category => category.type === 'him'),
    ...data[0]?.children?.filter(category => category.type === 'kids')
  ];
  return (
    <div className="p-5">
      <div className="max-w-screen-xl mx-auto px-4 pt-4 pb-4">
        <h2 className="text-3xl font-serif text-center tracking-widest mb-8 uppercase">
          <span className="text-lg text-gray-600"> Shop by</span> <br />
          Elegance for Everyone
        </h2>
        {router?.pathname !== "/search" && (
          <div className="flex flex-wrap justify-center items-center gap-6 px-4 md:px-8">

            {data[0]?.children?.slice(0, 6).map((category, index) => {
              // Find the matching card
              const matchingCard = cardData.find(
                (sub) =>
                  sub.description.toLowerCase().trim() ===
                  (category.name?.en?.toLowerCase().trim() || category.name?.toLowerCase().trim())
              );

              // If no matching card is found, do not render
              if (!matchingCard) return null;

              return (
                <div
                  key={index}
                  onClick={() => handleCategoryClick(category?._id, category.name)}
                  className="cursor-pointer group px-6 "
                >
                  <h3 className="text-black text-[14px] font-sans tracking-widest group-hover:text-[#ff6b01] p-2 hidden">
                    {showingTranslateValue(category?.name)}
                  </h3>
                  <div
                  // className="flex justify-center flex-col flex-wrap md:flex-row md:-mx-2"
                  >
                    <div className="w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-0">
                      <div className="relative w-72 h-96 md:w-96 md:h-[32rem] block group mx-2 overflow-hidden shadow-lg rounded-lg">

                        {/* Image */}
                        <img
                          src={matchingCard.imgSrc}
                          alt={showingTranslateValue(category?.name).toUpperCase()}
                          className="absolute top-0 left-0 w-full h-full object-cover transition duration-300 group-hover:hidden"
                        />
                        <img
                          src={matchingCard.imgStatic}
                          alt="Static"
                          className="absolute top-0 left-0 w-full h-full object-cover transition duration-300 hidden group-hover:block"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 to-transparent transition duration-300 group-hover:bg-orange-500/70 group-hover:opacity-80"></div>

                        {/* Category Name - always visible */}
                        <div className="absolute top-0 left-0 w-full text-center p-3 z-30">
                          <div className="text-white text-5xl md:text-7xl font-italiano italic tracking-wide">
                            ~ {matchingCard.description}
                          </div>
                        </div>

                        {/* Shop Now Button - only on hover */}
                        <div className="absolute bottom-0 left-0 w-full flex justify-center p-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-150 z-30">
                          <button
                            onClick={() => handleCategoryClick(category?._id, category.name)}
                            className="bg-[#ff6b01] text-white text-base px-6 py-2 font-semibold focus:outline-none focus:ring-2 focus:ring-white"
                          >
                            Shop Now
                          </button>
                        </div>


                      </div>

                    </div>
                  </div>
                </div>
              );
            })}


          </div>
        )}

      </div>
    </div>
  );
};

export default HumanCategory;
