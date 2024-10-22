// src/components/FeaturedProducts.jsx
import ProductCard from "@components/product/ProductCard";
import useGetSetting from "@hooks/useGetSetting";
// const popularProducts = [
//   {
//     _id: "1",
//     title: "Diamond Ring",
//     image: ["/images/diamond-ring.jpg"],
//     prices: { price: 2500, originalPrice: 3000 },
//     stock: 10,
//     unit: "piece",
//   },
//   {
//     _id: "2",
//     title: "Gold Necklace",
//     image: ["/images/gold-necklace.jpg"],
//     prices: { price: 1800, originalPrice: 2200 },
//     stock: 5,
//     unit: "piece",
//   },
//   {
//     _id: "3",
//     title: "Silver Earrings",
//     image: ["/images/silver-earrings.jpg"],
//     prices: { price: 350, originalPrice: 500 },
//     stock: 15,
//     unit: "pair",
//   },
//   // Add more products as necessary
// ];

function FeaturedProducts({ popularProducts, attributes }) {
  const { loading, error, storeCustomizationSetting } = useGetSetting();
  console.log("storeCustomizationSetting:", storeCustomizationSetting);
  console.log("Popular Products:", popularProducts);

  return (
    <>
      <section id="featured" className="py-12 bg-white">
        <h2 className="text-3xl sm:text-xl md:text-2xl tracking-widest text-center mb-8 uppercase ">
          Featured Products
        </h2>
        <div className="mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-12 justify-items-center">
          {popularProducts
            // ?.slice(0, storeCustomizationSetting?.home?.popular_product_limit)

            .map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                attributes={attributes}
              />
            ))}
        </div>
      </section>
    </>
  );
}

export default FeaturedProducts;
