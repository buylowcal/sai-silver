import React from "react";

//internal import
import Layout from "@layout/Layout";
import useGetSetting from "@hooks/useGetSetting";
import PageHeader from "@components/header/PageHeader";
import Preloader from "@components/preloader/preLoader";
import useUtilsFunction from "@hooks/useUtilsFunction";

const ShippingPolicy = () => {
  const { storeCustomizationSetting, loading, error } = useGetSetting();
  const { showingTranslateValue } = useUtilsFunction();
  const instructionsOne = [
    "Take a photo & video of the tarnished item and email us at sai.silver.jewells@gmail.com with your order number, photo & video evidence & the claim.",
    "Customer will have to self-ship the product to our official address and email us the details of courier with AWB number. ",
    "Once we receive the product, our team of experts will do the thorough quality check & lab test of the product, and if the issue is resolved satisfactorily at our end, then we will ship the repaired product back to you with no additional repair cost. Sai Silver Designs will have a complete discretion in this matter.",
  ];
  const notWarrantyPoints = [
    "Any damage, or breakage while the jewelry is not in possession of the company.",
    "Any jewelry re-sized or altered in any way by a 3rd party.",
    "Misused the product in any way that caused the problem.",
    "Knew of or were made aware of any faults before you bought the product.",
    "Any damage with zirconia crystals. If crystals get detached because of mis-handling.",
    "Does not cover loss, reasonable general wear and tear, or incorrect storage of jewelry.",
    "Warranty is not applicable on all the products included in Sea of Foliage collection sets as those are purely handcrafted & made of pure silver without any rhodium coating.",
  ];
  const careTips = [
    "Wipe your jewelry carefully to keep it clean from time to time.",
    "To care for your new plated piece please refrain from polishing any plated items.",
    "Do not store jewelry next to heating vents, windowsills, or in the car.",
    "When you are not wearing your pieces safely place each piece individually in cloth pouches, boxes or wrap in tissue to avoid scratching. Always let the chain dangle out of the bag to avoid tangle, knots & scratches.",
    "Our plated jewelry is made by covering a base metal of sterling silver with coating of 18k Gold so, lightly wipe your plated jewelry with a cotton cleaning cloth.",
    "In order to limit tarnishing please avoid contact with substances like perfumes, deodorant, detergent, oil, nail polish, nail polish remover & chlorine as they may react.",
  ];
  return (
    <Layout
      title="Terms & Conditions"
      description="This is shipping policy page"
    >
      <PageHeader
        headerBg={storeCustomizationSetting?.term_and_condition?.header_bg}
        // title={showingTranslateValue(
        //   storeCustomizationSetting?.term_and_condition?.title
        // )}
        title="Warranty"
      />
      <div className="bg-white">
        <div className="max-w-screen-2xl mx-auto lg:py-20 py-10 px-3 sm:px-10">
          <div className="mb-6 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold tracking-wide font-baskerville mb-2 lg:mb-4">
              {/* {t("common:terms-condition-cookies")}
               */}
              Warranty Policies
            </h2>
            <div className="font-sans text-gray-500 leading-7 text-justify">
              <p>
                Sai Silver Designs offers a free 1-year Warranty from the date
                of invoice against any tarnish on all jewelry. It is 100% Safe
                to wear in Water. <br />
                <br />
              </p>

              <ol className="list-decimal space-y-4 ml-5 text-justify">
                {instructionsOne.map((instruction, index) => (
                  <li key={index} className="text-justify">
                    {instruction}
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div className="mb-8 lg:mb-12 last:mb-0">
            <div className="font-sans leading-7">
              <p>
                {/* {t("common:terms-condition-license-docs")} */}
                <span className="font-semibold tracking-wide">
                  {" "}
                  What is NOT covered in our warranty policies?
                </span>
                <ul className="list-disc list-inside text-gray-500">
                  {notWarrantyPoints.map((point, index) => (
                    <li key={index} className="mb-2">
                      {point}
                    </li>
                  ))}
                </ul>
              </p>
              <p>
                {/* {t("common:terms-condition-license-docs")} */}
                <span className="font-semibold tracking-wide">
                  {" "}
                  TIPS FOR GENERAL JEWELLERY CARE: -
                </span>
                <ul className="list-disc list-inside text-gray-500">
                  {careTips.map((point, index) => (
                    <li key={index} className="mb-2">
                      {point}
                    </li>
                  ))}
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ShippingPolicy;
