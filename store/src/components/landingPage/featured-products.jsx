import ProductCard from "@components/product/ProductCard";
import useGetSetting from "@hooks/useGetSetting";

// src/components/FeaturedProducts.jsx
function FeaturedProducts({popularProducts,attributes}) {
    const products = [
      { name: 'Diamond Ring', image: '/images/diamond-ring.jpg', price: '$2,500' },
      { name: 'Gold Necklace', image: '/images/gold-necklace.jpg', price: '$1,800' },
      { name: 'Silver Earrings', image: '/images/silver-earrings.jpg', price: '$350' },
      // Add more products as needed
    ];

    const { loading, error, storeCustomizationSetting } = useGetSetting();
    console.log('storeCustomizationSetting?.home',storeCustomizationSetting?.home)
  
    return (
      <section id="featured" className="py-12  bg-gray-50">
        <h2 className="text-3xl  tracking-widest text-center mb-8">Featured Products</h2>
        <div className="  mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-20 gap-8  ">
          {popularProducts
                          ?.slice(
                            0,
                            storeCustomizationSetting?.home
                              ?.popular_product_limit
                          ).map((product, index) => (
                            <ProductCard
                              key={product._id}
                              product={product}
                              attributes={attributes}
                            />
            // <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            //   <img
            //     src={product.image}
            //     alt={product.name}
            //     className="w-full h-64 object-cover"
            //   />
            //   <div className="p-4">
            //     <h3 className="text-xl font-semibold">{product.name}</h3>
            //     <p className="mt-2 text-gray-600">{product.price}</p>
            //     <button className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
            //       View Details
            //     </button>
            //   </div>
            // </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default FeaturedProducts;
  