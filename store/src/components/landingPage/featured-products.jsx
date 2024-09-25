import ProductCard from "@components/product/ProductCard";
import useGetSetting from "@hooks/useGetSetting";

// src/components/FeaturedProducts.jsx
function FeaturedProducts({ popularProducts, attributes }) {
  const products = [
    {
      name: "Diamond Ring",
      image: "/images/diamond-ring.jpg",
      price: "$2,500",
    },
    {
      name: "Gold Necklace",
      image: "/images/gold-necklace.jpg",
      price: "$1,800",
    },
    {
      name: "Silver Earrings",
      image: "/images/silver-earrings.jpg",
      price: "$350",
    },
    // Add more products as needed
  ];

  const { loading, error, storeCustomizationSetting } = useGetSetting();
  console.log(
    "storeCustomizationSetting?.home",
    storeCustomizationSetting?.home
  );

  return (
    <section id="featured" className="py-12 bg-gray-50">
    <h2 className="text-3xl tracking-widest text-center mb-8">Featured Products</h2>
    <div className="mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 gap-x-8 justify-items-center">
      {popularProducts
        ?.slice(
          0,
          storeCustomizationSetting?.home?.popular_product_limit
        ).map((product, index) => (
          <ProductCard
            key={product._id}
            product={product}
            attributes={attributes}
          />
      ))}
    </div>
  </section>
  
  );
}

export default FeaturedProducts;
