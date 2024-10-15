import { useContext } from "react";
import Link from "next/link";
import { useCart } from "react-use-cart";
import { FiPlus, FiMinus, FiTrash2 } from "react-icons/fi";

//internal import
import useAddToCart from "@hooks/useAddToCart";
import { SidebarContext } from "@context/SidebarContext";

const CartItem = ({ item, currency }) => {
  const { updateItemQuantity, removeItem } = useCart();
  const { closeCartDrawer } = useContext(SidebarContext);
  const { handleIncreaseQuantity } = useAddToCart();

  // console.log("item>>", item);

  return (
    <div className="group w-full h-auto flex justify-start items-center bg-white py-3 px-4 border-b hover:bg-gray-50 transition-all border-gray-100 relative last:border-b-0">
      <div className="relative flex rounded-full border border-gray-50 shadow-md overflow-hidden flex-shrink-0 cursor-pointer mr-4">
        <img
          key={item.id}
          src={item.image}
          width={44}
          height={44}
          alt={item.title}
        />
      </div>
      <div className="flex flex-col w-full overflow-hidden">
        <Link
          href={`/product/${item.slug}`}
          onClick={closeCartDrawer}
          className="truncate text-[19px] tracking-wider capitalize  font-baskerville font-medium text-black text-heading line-clamp-2"
        >
          {item.title}
        </Link>
        <span className="text-base font-sans tracking-wide font-normal text-gray-400 mb-1">
          Item Price ₹ {" "}{item.price}
        </span>
        <div className="flex items-center justify-between">
          <div className="font-bold text-sm md:text-base text-heading leading-5">
            <span>
              {currency}
              {(item.price * item.quantity).toFixed(2)}
            </span>
          </div>
          <div className="h-8 w-22 md:w-24 lg:w-24 flex flex-wrap items-center justify-evenly p-1 border border-gray-100 bg-white text-gray-600 rounded-md">
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
              <span className="text-dark text-base">
                <FiMinus />
              </span>
            </button>
            <p className="text-[19px] font-semibold text-dark px-1">
              {item.quantity}
            </p>
            <button onClick={() => handleIncreaseQuantity(item)}>
              <span className="text-dark text-base">
                <FiPlus />
              </span>
            </button>
          </div>
          <button
            onClick={() => removeItem(item.id)}
            className="hover:text-red-600 text-[#ff6b01] text-[20px] cursor-pointer"
          >
            <FiTrash2 />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
