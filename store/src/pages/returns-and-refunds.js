import React from "react";

//internal import
import Layout from "@layout/Layout";
import useGetSetting from "@hooks/useGetSetting";
import PageHeader from "@components/header/PageHeader";
import Preloader from "@components/preloader/preLoader";
import useUtilsFunction from "@hooks/useUtilsFunction";

const ReturnsAndRefunds = () => {
  const { storeCustomizationSetting, loading, error } = useGetSetting();
  const { showingTranslateValue } = useUtilsFunction();
  const policyList = [
    "In case of receiving a damaged product, we’ll be only able to facilitate return/exchange ONLY IF photo & video both of unboxing is sent to us via E-mail (sai.silver.jewells@gmail.com) within 24-48 Hours of receiving the product. No other form of communication other than e-mail will be entertained.",
    "Since Personalised jewellery is a customised piece made exclusively for you, it is not eligible for return/exchange unless damaged.",
    "Personalised products don’t fall under BIS Hallmark category unless requested by a customer within 24 hours of placing an order. The delivery time will be extended by at least a week as we need to specially send the customised product for Hallmark.",
    "As all the jewellery is completely handcrafted, it is very rare to create identical items.",
    "For items with defect/damage, the return/exchange request must be placed within 24-48 hours of receiving the product. We will gladly issue store credit for your purchase amount. However, customers have to bear shipping charges for returning their product which is Rs 250. The product must be in unused condition, in its original packaging along with its original tags and invoice, failing which the return will not be possible. Any return requests after 24 Hours will not be entertained.",
    "A mandatory 5% of the total amount will be deducted in every condition while processing the refunds as the card fees.",
    "If you’re qualified for exchange & want to exchange the current product with any product at a higher price on our store, you will only need to pay the additional amount for that product. In case of the exchange with Product of a lower cost, the difference will be given to you via store credit which you can avail for future purchases.",
    "No discount will be given on exchanged jewellery pieces.",
    "If for any reason you need to cancel an order, please let us know within 24 hours of placing it so we can fully refund the order price, which will show up in your account within 7 business days of cancellation. The production for your personalised piece starts within 24 Hours, so no cancellation requests will be entertained after that.",
    "All the communications related to return & exchange needs to happen via e-mail (sai.silver.jewells@gmail.com). No other form of communications will be entertained.",
    "In case of COD orders, if there’s a delay in confirmation from your end, the delivery time of at least 1 week will be extended accordingly from the date of confirmation.",
    "In case all the terms and conditions are abide by the brand, we’ll be forced to take legal actions against you in case you try to defame the brand on any social platform.",
  ];

  const returnExchangeConditions = [
    "The item was delivered less than 24 hours ago for return & 7 days ago for exchange.",
    "The item is unused.",
    "You have a receipt of the product and the package of the product is intact.",
    "We can only accept two exchanges or returns for any jewellery item.",
    "The item does not have any error/tarnish/damage.",
    "When sending back the product, please collect a physical or digital receipt confirming your return. This little receipt is your guarantee that we'll issue you store credit, even if the product gets lost in transit.",
  ];
  return (
    <Layout
      title="Terms & Conditions"
      description="This is Returns and Refunds page"
    >
      <PageHeader
        headerBg={storeCustomizationSetting?.term_and_condition?.header_bg}
        // title={showingTranslateValue(
        //   storeCustomizationSetting?.term_and_condition?.title
        // )}
        title="Returns & Refunds"
      />
      <div className="bg-white">
        <div className="max-w-screen-2xl mx-auto lg:py-20 py-10 px-3 sm:px-10">
          <div className="mb-6 lg:mb-12 last:mb-0">
            <div className="font-sans text-gray-500 leading-7 text-justify">
              <p className="text-justify text-[19px] tracking-wide  leading-7">
                We have a hassle free 1 Day Return & 7 Days Exchange Policy.
                Shop with confidence! If you think, you have received the
                product in a bad condition or if the packaging is tampered with
                or damaged before delivery, please refuse to accept the package.
                You must take a video and take at least 2 photos of the package
                and submit it via e-mail (sai.silver.jewells@gmail.com) within
                24 hours of the delivery received time. We will ship a brand-new
                replacement with no additional cost. <br />
                <br />
                In case the product piece has an error/damage, please record a
                video of unpacking/unboxing the product & write to us via e-mail
                (sai.silver.jewells@gmail.com) with Photos & videos shot by you
                within 24 hours of product delivered. If the product was
                delivered in a compromised state, and it is clearly evident in
                the video shot, we will happily facilitate the pick up of the
                defected item & send you a brand new one or shall give store
                credit as per your preference. <br />
                <br />
                Upon receiving the product, we will conduct a lab test to ensure
                no perfume was used on the jewellery. Clearing the test, we will
                send a new product or grant store credits as per your
                preference. In case Jewellery was exposed to conditions to be
                prevented from mentioned in your Jewellery Care Kit, we won’t be
                able to issue any store credit or facilitate replacement for
                that.
              </p>
              <h2 className="text-xl xl:text-2xl xl:leading-7 mt-6 text-black font-semibold tracking-wide font-sans lg:mb-4">
                {/* {t("common:terms-condition-cookies")}
                 */}
                Please Note:
              </h2>
              <ol className="list-decimal pl-5 space-y-3  pt-6 text-[19px]  text-gray-500">
                {policyList.map((point, index) => (
                  <li key={index} className="text-justify">
                    {point}
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div className="mb-8 lg:mb-12 last:mb-0">
            <div className="font-sans leading-7">
              <h2 className="text-xl xl:text-2xl xl:leading-7 mt-6 text-black font-semibold tracking-wide font-sans lg:mb-4">
                {/* {t("common:terms-condition-cookies")}
                 */}
                Guidelines for checking if your product qualifies for
                returns/exchange
              </h2>
              <ul className="list-disc text-[19px] list-inside text-gray-500 space-y-2">
                {returnExchangeConditions.map((condition, index) => (
                  <li key={index}>{condition}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ReturnsAndRefunds;
