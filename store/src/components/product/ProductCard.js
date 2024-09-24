import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import { IoAdd, IoBagAddSharp, IoRemove } from "react-icons/io5";
import { useCart } from "react-use-cart";

//internal import

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

  const handleModalOpen = (event, id) => {
    setModalOpen(event);
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
        {/* Header Section */}
        <div className="w-full flex justify-between px-4 py-2">
          {/* <Stock product={product} stock={product.stock} card /> */}
          <Discount product={product} />
        </div>

        {/* Image Section */}
        <div
          onClick={() => {
            handleModalOpen(!modalOpen, product._id);
            handleLogEvent(
              "product",
              `opened ${showingTranslateValue(product?.title)} product modal`
            );
          }}
          className="relative flex justify-center cursor-pointer w-full h-60 sm:h-72 md:h-80"
        >
          <div className="relative w-full h-full p-4">
            {product.image[0] ? (
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
                sizes="100%"
                alt="product"
                className="object-contain transition duration-150 ease-linear transform group-hover:scale-105"
              />
            )}
          </div>
        </div>

        {/* Details Section */}
        <div className="w-full px-5 pb-6 overflow-hidden">
          <div className="relative mb-2">
            <span className="text-gray-500 font-medium text-sm block mb-1">
              {product.unit}
            </span>
            <h2 className="text-sm truncate mb-1 block  font-light text-gray-700">
              <span className="line-clamp-2 tracking-widest">
                {showingTranslateValue(product?.title).charAt(0).toUpperCase()+ showingTranslateValue(product?.title).slice(1)}
              </span>
            </h2>
          </div>

          <div className="flex justify-between items-center text-heading text-lg sm:text-xl space-x-3 md:text-2xl">
            <Price
              card
              product={product}
              currency={currency}
              price={
                product?.isCombination
                  ? product?.variants[0]?.price
                  : product?.prices?.price
              }
              originalPrice={
                product?.isCombination
                  ? product?.variants[0]?.originalPrice
                  : product?.prices?.originalPrice
              }
            />

            {inCart(product._id) ? (
              <div>
                {items.map(
                  (item) =>
                    item.id === product._id && (
                      <div
                        key={item.id}
                        className="h-12 w-auto flex items-center justify-evenly py-2 px-3 bg-emerald-600 text-white rounded-md"
                      >
                        <button
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                          className="text-white text-lg focus:outline-none"
                        >
                          <IoRemove />
                        </button>
                        <p className="text-lg text-white px-2 font-serif font-semibold">
                          {item.quantity}
                        </p>
                        <button
                          onClick={() =>
                            item?.variants?.length > 0
                              ? handleAddItem(item)
                              : handleIncreaseQuantity(item)
                          }
                          className="text-white text-lg focus:outline-none"
                        >
                          <IoAdd />
                        </button>
                      </div>
                    )
                )}
              </div>
            ) : (
              <button
                onClick={() => handleAddItem(product)}
                aria-label="Add to cart"
                className="h-12 w-12 flex items-center justify-center border border-gray-300 rounded-md text-emerald-600 hover:border-emerald-600 hover:bg-emerald-600 hover:text-white transition-all"
              >
                <span className="text-2xl">
                  <IoBagAddSharp />
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(ProductCard), { ssr: false });