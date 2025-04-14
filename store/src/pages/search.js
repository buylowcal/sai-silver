import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

//internal import
import Layout from "@layout/Layout";
import useFilter from "@hooks/useFilter";
import Card from "@components/cta-card/Card";
import ProductServices from "@services/ProductServices";
import ProductCard from "@components/product/ProductCard";
import CategoryCarousel from "@components/carousel/CategoryCarousel";
import { SidebarContext } from "@context/SidebarContext";
import Loading from "@components/preloader/Loading";
import AttributeServices from "@services/AttributeServices";
import BestSellingProducts from "@components/category/bestSeller";

const Search = ({ products, attributes }) => {
  const { t } = useTranslation();
  const { isLoading, setIsLoading } = useContext(SidebarContext);
  const [visibleProduct, setVisibleProduct] = useState(18);
  const [selectedCategory, setSelectedCategory] = useState(null);
  useEffect(() => {
    setIsLoading(false);
  }, [products]);

  const { setSortedField, productData } = useFilter(products);

  return (
    <Layout title="Search" description="This is search page">
      <div className="mx-auto max-w-screen-2xl px-3 sm:px-10 ">
        <div className="flex py-10 lg:py-12">
          <div className="flex w-full">
            <div className="w-full">
              {/* <div className="w-full grid grid-col gap-4 grid-cols-1 2xl:gap-6 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2">
                <Card />
              </div> */}
              <div className="relative">
                <CategoryCarousel
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />

                <BestSellingProducts
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />

              </div>
              {productData?.length === 0 ? (
                <div className="mx-auto mt-8 p-5 my-5 ">
                  <Image
                    className="my-4 mx-auto"
                    src="/no-result.svg"
                    alt="no-result"
                    width={400}
                    height={380}
                  />
                  <h2 className="text-lg md:text-xl lg:text-2xl xl:text-2xl text-center mt-2 font-medium font-serif text-gray-600">
                    {t("common:sorryText")} 😞
                  </h2>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row sm:justify-between my-3 mt-20 text-gray-700 font-medium">
                  <h6 className="text-[14px] font-sans tracking-widest uppercase">
                    <span className="font-medium ml-1">
                      {productData?.length} {" "}
                    </span>
                    {t("common:itemsFound")}
                  </h6>
                  <span className="relative inline-block text-[14px] font-sans tracking-widest mt-3 sm:mt-0">
                    <select
                      onChange={(e) => setSortedField(e.target.value)}
                      className="block py-1 px-4 w-full text-[14px] text-gray-700 bg-transparent tracking-widest border-0 border-b-2 border-gray-700 appearance-none peer"
                    >
                      <option selected defaultValue>
                        Sort Product
                      </option>
                      <option value="Low">
                        {t("common:lowToHigh")}
                      </option>
                      <option value="High">
                        {t("common:highToLow")}
                      </option>
                      <option value="AlphabeticalAZ">
                        {t("Alphabetically, A-Z")}
                      </option>
                      <option value="AlphabeticalZA">
                        {t("Alphabetically, Z-A")}
                      </option>
                    </select>
                  </span>
                </div>

              )}

              {isLoading ? (
                <Loading loading={isLoading} />
              ) : (
                <>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-2 md:gap-4 lg:gap-3">
                    {productData?.slice(0, visibleProduct).map((product, i) => (
                      <ProductCard
                        key={i + 1}
                        product={product}
                        attributes={attributes}
                      />
                    ))}
                  </div>

                  {productData?.length > visibleProduct && (
                    <button
                      onClick={() => setVisibleProduct((pre) => pre + 10)}
                      className="w-auto mx-auto md:text-base leading-5 flex items-center transition ease-in-out duration-300 font-medium text-center 
                                 justify-center border-0 border-transparent  focus-visible:outline-none focus:outline-none bg-orange-500 
                                 px-5 md:px-6 lg:px-6 py-2 md:py-3 lg:py-2 text-white hover:bg-black h-12 mt-6 text-sm lg:text-sm"
                    >
                      {t("common:loadMoreBtn")}
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;

export const getServerSideProps = async (context) => {
  try {
    const { query, _id } = context.query;

    const [data, attributes] = await Promise.all([
      ProductServices.getShowingStoreProducts({
        category: _id ? _id : "",
        title: query ? encodeURIComponent(query) : "",
      }),
      AttributeServices.getShowingAttributes({}),
    ]);

    return {
      props: {
        products: data?.products || [],
        attributes: attributes || [],
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        products: [],
        attributes: [],
      },
    };
  }
};

// export const getServerSideProps = async (context) => {
//   const { query } = context.query;
//   const { Category } = context.query;
//   const { category } = context.query;
//   const data = await ProductServices.getShowingProducts();

//   let products = [];
//   //service filter with parent category
//   if (Category) {
//     products = data.filter(
//       (product) => product.parent.toLowerCase().replace("&", "").split(" ").join("-") === Category
//     );
//   }
//   //service filter with child category
//   if (category) {
//     products = data.filter(
//       (product) => product.children.toLowerCase().replace("&", "").split(" ").join("-") === category
//     );
//   }

//   //search result
//   if (query) {
//     products = data.filter((product) => product.title.toLowerCase().includes(query.toLowerCase()));
//   }

//   return {
//     props: {
//       products,
//     },
//   };
// };
