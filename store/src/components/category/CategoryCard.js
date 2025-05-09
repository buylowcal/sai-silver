import Image from "next/image";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import {
  IoChevronDownOutline,
  IoChevronForwardOutline,
  IoRemoveSharp,
} from "react-icons/io5";

//internal import
import { SidebarContext } from "@context/SidebarContext";
import useUtilsFunction from "@hooks/useUtilsFunction";

const CategoryCard = ({ title, icon, images = true, nested, id }) => {
  const router = useRouter();
  const { closeCategoryDrawer, isLoading, setIsLoading } =
    useContext(SidebarContext);
  const { showingTranslateValue } = useUtilsFunction();

  // react hook
  const [show, setShow] = useState(false);
  const [showSubCategory, setShowSubCategory] = useState({
    id: "",
    show: false,
  });

  // handle show category
  const showCategory = (id, categoryName) => {
    const name = categoryName.toLowerCase().replace(/[^A-Z0-9]+/gi, "-");

    setShow(!show);
    router.push(`/search?category=${name}&_id=${id}`);
    closeCategoryDrawer;
    setIsLoading(!isLoading);
  };

  // handle sub nested category
  const handleSubNestedCategory = (id, categoryName) => {
    const name = categoryName.toLowerCase().replace(/[^A-Z0-9]+/gi, "-");

    setShowSubCategory({ id: id, show: !showSubCategory.show });
    setIsLoading(true);
    router.push(`/search?category=${name}&_id=${id}`);
    closeCategoryDrawer();
  };

  const handleSubCategory = (id, categoryName) => {
    const name = categoryName.toLowerCase().replace(/[^A-Z0-9]+/gi, "-");

    setIsLoading(true);
    router.push(`/search?category=${name}&_id=${id}`);
    closeCategoryDrawer();
  };

  return (
    <>
      <a
        onClick={() => showCategory(id, title)}
        className="p-2 flex items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600"
        role="button"
      >
        {(icon && images) ? (
          <Image src={icon} width={18} height={18} alt="Category" />
        ) : (
          ''
          // <Image
          //   src="https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png"
          //   width={18}
          //   height={18}
          //   alt="category"
          // />
        )}

        <div className="inline-flex items-center tracking-widest justify-between ml-3 text-sm font-medium w-full hover:text-emerald-400">
          {title}
          {nested?.length > 0 && (
            <span className="transition duration-700 ease-in-out inline-flex loading-none items-end text-gray-400">
              {show ? <IoChevronDownOutline /> : <IoChevronForwardOutline />}
            </span>
          )}
        </div>
      </a>
      {show && nested.length > 0 && (
        <ul className="pl-6 pb-3 pt-1   -mt-1">
          {nested.map((children) => (
            <li className="tracking-widest" key={children._id}>
              {children.children.length > 0 ? (
                <a
                  onClick={() =>
                    handleSubNestedCategory(
                      children._id,
                      showingTranslateValue(children.name)
                    )
                  }
                  className="flex items-center tracking-widest font-serif pr-2 text-sm text-gray-600 hover:text-emerald-600 py-1 cursor-pointer"
                >
                  <span className="text-xs text-gray-500">
                    <IoRemoveSharp />
                  </span>

                  <div className="inline-flex items-center tracking-widest justify-between ml-3 text-sm font-medium w-full hover:text-emerald-600">
                    {showingTranslateValue(children.name)}

                    {children.children.length > 0 ? (
                      <span className="tracking-widest transition duration-700 ease-in-out inline-flex loading-none items-end text-gray-400">
                        {showSubCategory.id === children._id &&
                          showSubCategory.show ? (
                          <IoChevronDownOutline />
                        ) : (
                          <IoChevronForwardOutline />
                        )}
                      </span>
                    ) : null}
                  </div>
                </a>
              ) : (
                <a
                  onClick={() =>
                    handleSubCategory(
                      children._id,
                      showingTranslateValue(children.name)
                    )
                  }
                  className="flex items-center  tracking-widest font-serif py-1 text-sm text-gray-600 hover:text-emerald-600 cursor-pointer"
                >
                  <span className="text-xs text-gray-500 pr-2">
                    <IoRemoveSharp />
                  </span>
                  {showingTranslateValue(children.name)}
                </a>
              )}

              {/* sub children category */}
              {showSubCategory.id === children._id &&
                showSubCategory.show === true ? (
                <ul className="pl-6 tracking-widest pb-3">
                  {children.children.map((subChildren) => (
                    <li key={subChildren._id}>
                      <a
                        onClick={() =>
                          handleSubCategory(
                            subChildren._id,
                            showingTranslateValue(subChildren?.name)
                          )
                        }
                        className="flex tracking-widest items-center font-serif py-1 text-sm text-gray-600 hover:text-emerald-600 cursor-pointer"
                      >
                        <span className="text-xs tracking-widest text-gray-500 pr-2">
                          <IoRemoveSharp />
                        </span>
                        {showingTranslateValue(subChildren?.name)}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default CategoryCard;
