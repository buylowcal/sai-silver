import CMSkeleton from "@components/preloader/CMSkeleton";
import ProductCard from "@components/product/ProductCard";
import useGetSetting from "@hooks/useGetSetting";

// src/components/discountProducts.jsx
function DiscountProducts({discountProducts,attributes}) {
    const products = [
      { name: 'Diamond Ring', image: '/images/diamond-ring.jpg', price: '$2,500' },
      { name: 'Gold Necklace', image: '/images/gold-necklace.jpg', price: '$1,800' },
      { name: 'Silver Earrings', image: '/images/silver-earrings.jpg', price: '$350' },
      // Add more products as needed
    ];

    const { loading, error, storeCustomizationSetting } = useGetSetting();

  
    return (
      <section id="featured" className="py-12 bg-gray-50">
        <h2 className="text-3xl  tracking-widest text-center mb-8">Discount Products</h2>
         <>
                      {loading ? (
                       <>
                        <h2 className="text-xl lg:text-2xl mb-2 font-serif font-semibold">
                        <CMSkeleton
                          count={1}
                          height={30}
                          // error={error}
                          loading={loading}
                          data={
                            storeCustomizationSetting?.home
                              ?.latest_discount_title
                          }
                        />
                      </h2>
                      <p className="text-base font-sans text-gray-600 leading-6">
                        <CMSkeleton
                          count={5}
                          height={20}
                          // error={error}
                          loading={loading}
                          data={
                            storeCustomizationSetting?.home
                              ?.latest_discount_description
                          }
                        />
                      </p>
                       </>
                      ) : (
                        <div className="max-w-8xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                          {/*  */}

                          {discountProducts
                            ?.slice(
                              0,
                              storeCustomizationSetting?.home
                                ?.latest_discount_product_limit
                            )
                            .map((product) => (
                              <ProductCard
                                key={product._id}
                                product={product}
                                attributes={attributes}
                              />
                            ))}
                        </div>
                      )}
                    </>
      
      </section>
    );
  }
  
  export default DiscountProducts;
  