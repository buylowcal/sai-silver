import React from "react";

const Stock = ({ stock, card }) => {
  return (
    <>
      {stock <= 0 ? (
        <span className="bg-red-100 dark:bg-gray-600 text-red-500 dark:text-red-400 rounded-full inline-flex items-center justify-center px-2 py-0 text-base font-medium font-serif">
          Stock Out
        </span>
      ) : (
        <span>
          <span
            className={`${
              card
                ? "bg-gray-100 dark:bg-gray-600 text-emerald-500 rounded-full text-base px-2 py-0 font-medium"
                : "bg-emerald-100 dark:bg-gray-600 text-emerald-500 rounded-full inline-flex items-center justify-center px-2 py-0 text-xs font-semibold  font-serif"
            }`}
          >
            Stock :
            <span className="text-green-600  pl-1 font-bold">
              {stock}{" "}
            </span>
          </span>
        </span>
      )}
    </>
  );
};

export default Stock;
