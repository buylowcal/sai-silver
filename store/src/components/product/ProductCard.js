import dynamic from 'next/dynamic';
import React, {useState} from 'react';
import { useCart } from "react-use-cart";
import Price from "@components/common/Price";
import Stock from "@components/common/Stock";
import { notifyError } from "@utils/toast";
import useAddToCart from "@hooks/useAddToCart";
import useGetSetting from "@hooks/useGetSetting";
import Discount from "@components/common/Discount";
import useUtilsFunction from "@hooks/useUtilsFunction";
import ProductModal from "@components/modal/ProductModal";
import ImageWithFallback from "@components/common/ImageWithFallBack";
import { handleLogEvent } from "src/lib/analytics";
import { IoAdd, IoBagAddSharp, IoRemove } from "react-icons/io5";
const ProductCard = ({ product, attributes }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const { items, addItem, updateItemQuantity, inCart } = useCart();
  const { handleIncreaseQuantity } = useAddToCart();
  const { globalSetting } = useGetSetting();
  const { showingTranslateValue } = useUtilsFunction();

  const currency = globalSetting?.default_currency || "$";

  const handleAddItem = (p) => {
    if (p.stock < 1) return notifyError("Insufficient stock!");

    if (p?.variants?.length > 0) {
      setModalOpen(!modalOpen);
      return;
    }
    const { slug, variants, categories, description, ...updatedProduct } = product;
    const newItem = {
      ...updatedProduct,
      title: showingTranslateValue(p?.title),
      id: p._id,
      variant: p.prices,
      price: p.prices.price,
      originalPrice: product.prices?.originalPrice,
    };
    addItem(newItem);
  };

  return (
    <>
      {modalOpen && (
        <ProductModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          product={product}
          currency={currency}
          attributes={attributes}
        />
      )}

      <div className="group box-border overflow-hidden flex rounded-lg shadow-md flex-col items-center bg-white relative w-full h-full max-w-sm">
        {/* Image Section */}
        <div
          onClick={() => setModalOpen(!modalOpen)}
          className="relative flex justify-center cursor-pointer w-full h-60 sm:h-72 md:h-80"
        >
          <div className="relative w-full h-full p-4">
            {product.image?.[0] ? (
              <ImageWithFallback
                src={product.image[0]}
                alt={product.title}
                layout="fill"
                objectFit="contain"
                className="object-contain transition duration-150 ease-linear transform group-hover:scale-105"
              />
            ) : (
              <Image
                src="https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png"
                layout="fill"
                objectFit="contain"
                alt="product"
                className="object-contain transition duration-150 ease-linear transform group-hover:scale-105"
              />
            )}
          </div>
        </div>

        {/* Details Section */}
        <div className="w-full px-5 pb-6 overflow-hidden">
          <h2 className="text-sm truncate mb-1 block font-light text-gray-700">
            {showingTranslateValue(product?.title).charAt(0).toUpperCase() + showingTranslateValue(product?.title).slice(1)}
          </h2>

          <div className="flex justify-between items-center text-heading text-lg sm:text-xl md:text-2xl">
            <Price
              card
              product={product}
              currency={currency}
              price={product?.prices?.price}
              originalPrice={product?.prices?.originalPrice}
            />

            {inCart(product._id) ? (
              <div>
                {items.map((item) =>
                  item.id === product._id ? (
                    <div key={item.id} className="h-12 w-auto flex items-center">
                      {/* Handle cart quantity and actions */}
                    </div>
                  ) : null
                )}
              </div>
            ) : (
              <button
                onClick={() => handleAddItem(product)}
                className="h-12 w-12 flex items-center justify-center border border-gray-300 rounded-md text-emerald-600 hover:bg-emerald-600 hover:text-white"
              >
                <IoBagAddSharp />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(ProductCard), { ssr: false });
