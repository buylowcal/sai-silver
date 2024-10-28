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
        title="Shipping Policy"
      />
      <div className="bg-white">
        <div className="max-w-screen-2xl mx-auto lg:py-20 py-10 px-3 sm:px-10">
          {/* <Preloader
            html
            count={1}
            height={15}
            error={error}
            loading={loading}
            data={storeCustomizationSetting?.term_and_condition?.description}
          /> */}
          {/* <p className="tracking-wide text-base ">Welcome to Sai Silver!</p> */}

          {/* <br />
          <Preloader count={1} height={15} loading={loading} />
          <br />
          <Preloader count={1} height={15} loading={loading} /> */}
          <div className="mb-6 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold tracking-wide font-baskerville mb-2 lg:mb-4">
              {/* {t("common:terms-condition-cookies")}
               */}
              Shipping & Handling Time
            </h2>
            <div className="font-sans text-gray-500 leading-7 text-justify">
              <p>
                {/* {t("common:terms-condition-cookies-docs")} */}
                Orders are usually processed within{" "}
                <span className="text-[#FFB580]">
                  12 to 15 business days (i.e., Monday – Saturday)
                </span>
                . Some orders, such as pre-order items, may take longer. We're
                continuously striving to get your purchase to you sooner,
                however, in some unforeseen circumstances it may take a bit
                longer. In this case, we'll notify you of this delay
                immediately. <br />
                <br />
              </p>
              <p className="text-center">
                <span className="text-[#ff6b01]">
                  **Note: Customised Jewellery takes 12-15 working days.
                </span>
                <br />
                It’s 100% handcrafted and completely customised with finest
                finish
              </p>
            </div>
          </div>
          <div className="mb-8 lg:mb-12 last:mb-0">
            <div className="font-sans leading-7">
              <p>
                {/* {t("common:terms-condition-license-docs")} */}
                <span className="font-semibold tracking-wide"> Shipping Charges:{" "}</span>
                <span className="text-gray-500">
                  Shipping is FREE OF COST across all over India.
                </span>
              </p>
              <p>
                {/* {t("common:terms-condition-license-docs")} */}
                <span className="font-semibold tracking-wide"> Shippment Tracking:{" "}</span>
                <span className="text-gray-500">
                  You will be notified when your order ships from our warehouse
                  with the shipment tracking number.
                </span>
              </p>
              <p>
                {/* {t("common:terms-condition-license-docs")} */}
               <span className="font-semibold tracking-wide"> Delivery Location:{" "}</span>
                <span className="text-gray-500">
                  Orders can be delivered only to Consignee/Recipient’s
                  Residential or Work Location. The delivery of the orders
                  cannot be done at any public places like Mall, Hotel,
                  Restaurant, Hostel, on street etc.
                </span>
              </p>
            </div>
            <div className="my-6 lg:my-8 last:mb-0">
              <h2 className="text-lg xl:text-2xl xl:leading-7 font-semibold tracking-wide font-baskerville mb-2 lg:mb-4">
                {/* {t("common:terms-condition-liability")} */}
                Change in Shipping Address
              </h2>
              <div className="font-sans leading-7">
                {/* <p>{t("common:terms-condition-liability-docs")}</p> */}
                <p className="text-gray-500 font-sans text-justify">
                  Customer can check the status & track their orders by logging
                  in. Shipping details cannot be changed at customer’s end once
                  the order is created. If customer wants to change shipping
                  address, they should send an email to
                  www.whitehaathidesigns.com Guarantee of the delivery of the
                  product is subject to the terms and conditions of Courier
                  Partner. Any kind of discrepancy in the details of the
                  receiver will result in non-delivery of product.
                  www.whitehaathi.com holds the right to change this policy at
                  any time without prior notice. In the event that any changes
                  are made, the revised policy shall be posted on this website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ShippingPolicy;
