import useTranslation from "next-translate/useTranslation";

const Stock = ({ stock, card }) => {
  const { t } = useTranslation();

  return (
    <>
      {stock <= 0 ? (
        <span className="bg-red-100 absolute z-10 text-red-700 rounded-full inline-flex items-center justify-center px-2 py-0 text-xs font-medium font-serif">
          {t("common:stockOut")}
        </span>
      ) : (
        <>
          <span
            className={`${
              card
                ? "bg-gray-100 absolute z-10 text-green-500 rounded-full text-base tracking-wider px-2 py-0 font-semibold"
                : "bg-lime-50 text-green-500 rounded-full inline-flex items-center justify-center px-2.5 py-0.5 text-base font-semibold font-sans"
            }`}
          >
            {t("common:stock")}:
            <span className="text-green-500 pl-1 font-semibold">{stock} </span>
          </span>
        </>
      )}
    </>
  );
};

export default Stock;
