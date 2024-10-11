import React, { useState } from "react";
import dynamic from "next/dynamic";
import { CardElement } from "@stripe/react-stripe-js";
import Link from "next/link";
import {
  IoReturnUpBackOutline,
  IoArrowForward,
  IoBagHandle,
  IoWalletSharp,
} from "react-icons/io5";
import { ImCreditCard } from "react-icons/im";
import useTranslation from "next-translate/useTranslation";

//internal import

import Layout from "@layout/Layout";
import useAsync from "@hooks/useAsync";
import Label from "@components/form/Label";
import Error from "@components/form/Error";
import CartItem from "@components/cart/CartItem";
import InputArea from "@components/form/InputArea";
import useGetSetting from "@hooks/useGetSetting";
import InputShipping from "@components/form/InputShipping";
import InputPayment from "@components/form/InputPayment";
import useCheckoutSubmit from "@hooks/useCheckoutSubmit";
import useUtilsFunction from "@hooks/useUtilsFunction";
import SettingServices from "@services/SettingServices";
import SwitchToggle from "@components/form/SwitchToggle";

const Checkout = () => {
  const { t } = useTranslation();
  const { storeCustomizationSetting } = useGetSetting();
  const { showingTranslateValue } = useUtilsFunction();
  const { data: storeSetting } = useAsync(SettingServices.getStoreSetting);
  const [isHovered, setIsHovered] = useState(false);
  const {
    error,
    stripe,
    couponInfo,
    couponRef,
    total,
    isEmpty,
    items,
    cartTotal,
    currency,
    register,
    errors,
    showCard,
    setShowCard,
    handleSubmit,
    submitHandler,
    handleShippingCost,
    handleCouponCode,
    discountAmount,
    shippingCost,
    isCheckoutSubmit,
    useExistingAddress,
    hasShippingAddress,
    isCouponAvailable,
    handleDefaultShippingAddress,
  } = useCheckoutSubmit();

  // console.log(
  //   "shippingCost",
  //   shippingCost,
  //   "  storeCustomizationSetting?.checkout",
  //   storeCustomizationSetting?.checkout
  // );

  // console.log("storeCustomizationSetting", storeCustomizationSetting);
  
console.log("@@",showingTranslateValue(
  storeCustomizationSetting?.checkout?.first_name
))
  // storeCustomizationSetting?.checkout?.first_name
  console.log("sss",  storeCustomizationSetting)
  return (
    <>
      <Layout title="Checkout" description="this is checkout page">
        <div className="mx-auto max-w-screen-2xl px-3 sm:px-10 overflow-x-hidden">
          <div className="py-10 lg:py-12 px-0 2xl:max-w-screen-2xl w-full xl:max-w-screen-xl flex flex-col md:flex-row lg:flex-row">
            <div className="md:w-full lg:w-3/5 flex h-full flex-col order-2 sm:order-1 lg:order-1">
              <div className="mt-5 md:mt-0 md:col-span-2">
                <form onSubmit={handleSubmit(submitHandler)} className="mt-14">
                  {hasShippingAddress && (
                    <div className="flex justify-end my-2">
                      <SwitchToggle
                        id="shipping-address"
                        title="Use Default Shipping Address"
                        processOption={useExistingAddress}
                        handleProcess={handleDefaultShippingAddress}
                      />
                    </div>
                  )}
                  <div className="form-group">
                    <h2 className="font-medium tracking-wider font-serif text-base text-gray-700 pb-3">
                      Personal Details
                      {showingTranslateValue(
                        storeCustomizationSetting?.checkout?.personal_details
                      )}
                    </h2>

                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <InputArea
                          register={register}
                          // label={showingTranslateValue(
                          //   storeCustomizationSetting?.checkout?.first_name
                          // )}
                          label="First Name"
                          name="firstName"
                          type="text"
                          placeholder="John"
                        />
                        <Error errorName={errors.firstName} />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <InputArea
                          register={register}
                          // label={showingTranslateValue(
                          //   storeCustomizationSetting?.checkout?.last_name
                          // )}
                          label="Last Name"

                          name="lastName"
                          type="text"
                          placeholder="Doe"
                          required={false}
                        />
                        <Error errorName={errors.lastName} />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <InputArea
                          register={register}
                          // label={showingTranslateValue(
                          //   storeCustomizationSetting?.checkout?.email_address
                          // )}
                          label="Email"
                          name="email"
                          type="email"
                          readOnly={true}
                          placeholder="youremail@gmail.com"
                        />
                        <Error errorName={errors.email} />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <InputArea
                          register={register}
                          // label={showingTranslateValue(
                          //   storeCustomizationSetting?.checkout?.checkout_phone
                          // )}
                          label="Contact"

                          name="contact"
                          type="tel"
                          placeholder="+062-6532956"
                        />

                        <Error errorName={errors.contact} />
                      </div>
                    </div>
                  </div>

                  <div className="form-group mt-12">
                    <h2 className="font-medium tracking-wider font-serif text-base text-gray-700 pb-3">
                      Shipping Details
                      {showingTranslateValue(
                        storeCustomizationSetting?.checkout?.shipping_details
                      )}
                    </h2>

                    <div className="grid grid-cols-6 gap-6 mb-8">
                      <div className="col-span-6">
                        <InputArea
                          register={register}
                          // label={showingTranslateValue(
                          //   storeCustomizationSetting?.checkout?.street_address
                          // )}
                          label="Address"

                          name="address"
                          type="text"
                          placeholder="123 Boulevard Rd, Beverley Hills"
                        />
                        <Error errorName={errors.address} />
                      </div>

                      <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                        <InputArea
                          register={register}
                          // label={showingTranslateValue(
                          //   storeCustomizationSetting?.checkout?.city
                          // )}
                          label="City"

                          name="city"
                          type="text"
                          placeholder="Los Angeles"
                        />
                        <Error errorName={errors.city} />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <InputArea
                          register={register}
                          // label={showingTranslateValue(
                          //   storeCustomizationSetting?.checkout?.country
                          // )}
                          label="Country"
                          name="country"
                          type="text"
                          placeholder="United States"
                        />
                        <Error errorName={errors.country} />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <InputArea
                          register={register}
                          // label={showingTranslateValue(
                          //   storeCustomizationSetting?.checkout?.zip_code
                          // )}
                          label="ZipCode"
                          name="zipCode"
                          type="text"
                          placeholder="2345"
                        />
                        <Error errorName={errors.zipCode} />
                      </div>
                    </div>

                    <Label
                      label={showingTranslateValue(
                        storeCustomizationSetting?.checkout?.shipping_cost
                      )}
                    />
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <InputShipping
                          currency={currency}
                          handleShippingCost={handleShippingCost}
                          register={register}
                          // value="FedEx"
                          value={showingTranslateValue(
                            storeCustomizationSetting?.checkout
                              ?.shipping_name_two
                          )}
                          description={showingTranslateValue(
                            storeCustomizationSetting?.checkout
                              ?.shipping_one_desc
                          )}
                          // time="Today"
                          cost={
                            Number(
                              storeCustomizationSetting?.checkout
                                ?.shipping_one_cost
                            ) || 60
                          }
                        />
                        <Error errorName={errors.shippingOption} />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <InputShipping
                          currency={currency}
                          handleShippingCost={handleShippingCost}
                          register={register}
                          value={showingTranslateValue(
                            storeCustomizationSetting?.checkout
                              ?.shipping_name_two
                          )}
                          description={showingTranslateValue(
                            storeCustomizationSetting?.checkout
                              ?.shipping_two_desc
                          )}
                          // time="7 Days"
                          cost={
                            Number(
                              storeCustomizationSetting?.checkout
                                ?.shipping_two_cost
                            ) || 20
                          }
                        />
                        <Error errorName={errors.shippingOption} />
                      </div>
                    </div>
                  </div>
                  <div className="form-group mt-12">
                    <h2 className="font-medium tracking-wider  text-base text-gray-700 pb-3">
                      Payment Method
                      {showingTranslateValue(
                        storeCustomizationSetting?.checkout?.payment_method
                      )}
                    </h2>
                    {showCard && (
                      <div className="mb-3">
                        <CardElement />{" "}
                        <p className="text-red-400 text-sm mt-1">{error}</p>
                      </div>
                    )}
                    <div className="grid sm:grid-cols-3 grid-cols-1 gap-4">
                      {storeSetting?.cod_status && (
                        <div className="">
                          <InputPayment
                            setShowCard={setShowCard}
                            register={register}
                            name={t("common:cashOnDelivery")}
                            value="Cash"
                            Icon={IoWalletSharp}
                          />
                          <Error errorMessage={errors.paymentMethod} />
                        </div>
                      )}

                      {storeSetting?.stripe_status && (
                        <div className="">
                          <InputPayment
                            setShowCard={setShowCard}
                            register={register}
                            name={t("common:creditCard")}
                            value="Card"
                            Icon={ImCreditCard}
                          />
                          <Error errorMessage={errors.paymentMethod} />
                        </div>
                      )}

                      {storeSetting?.razorpay_status && (
                        <div className="">
                          <InputPayment
                            setShowCard={setShowCard}
                            register={register}
                            name="RazorPay"
                            value="RazorPay"
                            Icon={ImCreditCard}
                          />
                          <Error errorMessage={errors.paymentMethod} />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-6 gap-4 lg:gap-6 mt-10">
                    <div className="col-span-6 sm:col-span-3">
                      <Link
                        href="/"
                        className="bg-indigo-50 border border-indigo-100 rounded py-3 text-center text-sm font-medium text-gray-700 hover:text-gray-800 hover:border-gray-300 transition-all flex justify-center font-serif w-full"
                      >
                        <span className="text-xl mr-2">
                          <IoReturnUpBackOutline />
                        </span>
                        {showingTranslateValue(
                          storeCustomizationSetting?.checkout?.continue_button
                        )}
                      </Link>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <button
                        type="submit"
                        disabled={isEmpty || isCheckoutSubmit}
                        className="bg-emerald-500 hover:bg-emerald-600 border border-emerald-500 transition-all rounded py-3 text-center text-sm font-serif font-medium text-white flex justify-center w-full"
                      >
                        {isCheckoutSubmit ? (
                          <span className="flex justify-center text-center">
                            {" "}
                            <img
                              src="/loader/spinner.gif"
                              alt="Loading"
                              width={20}
                              height={10}
                            />{" "}
                            <span className="ml-2">
                              {t("common:processing")}
                            </span>
                          </span>
                        ) : (
                          <span className="flex justify-center text-center">
                            {showingTranslateValue(
                              storeCustomizationSetting?.checkout
                                ?.confirm_button
                            )}
                            <span className="text-xl ml-2">
                              {" "}
                              <IoArrowForward />
                            </span>
                          </span>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="md:w-full mt-14 lg:w-2/5 lg:ml-10 xl:ml-14 md:ml-6 flex flex-col h-full md:sticky lg:sticky top-28 md:order-2 lg:order-2">
              <div className="border p-5 lg:px-8 lg:py-8 rounded-xl bg-white order-1 sm:order-2 mt-10">
                <h2 className="font-semibold tracking-widest uppercase font-serif text-lg pb-4">
                  Order Summary
                  {showingTranslateValue(
                    storeCustomizationSetting?.checkout?.order_summary
                  )}
                </h2>

                <div className="overflow-y-scroll flex-grow scrollbar-hide w-full max-h-64 bg-gray-50 block">
                  {items.map((item) => (
                    <CartItem key={item.id} item={item} currency={currency} />
                  ))}

                  {isEmpty && (
                    <div className="text-center py-10">
                      <span className="flex justify-center my-auto text-gray-500 font-semibold text-4xl">
                        <IoBagHandle />
                      </span>
                      <h2 className="font-medium uppercase font-serif text-sm pt-2 text-gray-300 tracking-widest">
                        No Item Added Yet!
                      </h2>
                    </div>
                  )}
                </div>

                <div className="flex items-center mt-4 py-4 lg:py-4 text-sm w-full font-semibold text-heading last:border-b-0 last:text-base last:pb-0">
                  <form className="w-full">
                    {couponInfo.couponCode ? (
                      <span className="bg-emerald-50 px-4 py-3 leading-tight w-full rounded-md flex justify-between">
                        {" "}
                        <p className="text-emerald-600">Coupon Applied </p>{" "}
                        <span className="text-red-500 text-right">
                          {couponInfo.couponCode}
                        </span>
                      </span>
                    ) : (
                      <div className="flex flex-col sm:flex-row items-start justify-end">
                        <input
                          ref={couponRef}
                          type="text"
                          placeholder={t("common:couponCode")}
                          className="form-input py-2 px-3 md:px-4 w-full appearance-none transition ease-in-out border text-input text-sm rounded-md h-12 duration-200 bg-white border-gray-200 focus:ring-0 focus:outline-none focus:border-emerald-500 placeholder-gray-500 placeholder-opacity-25 tracking-wider font-serif"
                        />
                        {isCouponAvailable ? (
                          <button
                            disabled={isCouponAvailable}
                            type="submit"
                            className="md:text-sm leading-4 text-gray-900 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold text-center justify-center border border-gray-200 rounded-md placeholder-white focus-visible:outline-none focus:outline-none px-5 md:px-6 lg:px-8 py-3 md:py-3.5 lg:py-3 mt-3 sm:mt-0 sm:ml-3 md:mt-0 md:ml-3 lg:mt-0 lg:ml-3 hover:text-white hover:bg-emerald-500 h-12 text-sm lg:text-base w-full sm:w-auto"
                          >
                            <img
                              src="/loader/spinner.gif"
                              alt="Loading"
                              width={20}
                              height={10}
                            />
                            <span className=" ml-2 font-light">Processing</span>
                          </button>
                        ) : (
                          <button
                            disabled={isCouponAvailable}
                            onClick={handleCouponCode}
                            className="md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold text-center justify-center border border-gray-200 rounded-md placeholder-white focus-visible:outline-none focus:outline-none px-5 md:px-6 lg:px-8 py-3 md:py-3.5 lg:py-3 mt-3 sm:mt-0 sm:ml-3 md:mt-0 md:ml-3 lg:mt-0 lg:ml-3 overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md font-bold cursor-pointer relative z-10 group flex justify-center items-center lg:text-base  sm:w-auto"
                          >
                            <svg
                              className="w-10 h-10 text-white"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="m7 16 4-4-4-4m6 8 4-4-4-4"
                              />
                            </svg>

                            <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
                            <span
                              className="absolute w-36 h-32 -top-8 -left-2 bg-orange-400
    rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
                            ></span>
                            <span className="absolute w-36 h-32 -top-8 -left-2 bg-[#ff6b01]  rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>

                            {showingTranslateValue(
                              storeCustomizationSetting?.checkout?.apply_button
                            )}
                            <span className="w-fit group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-10 uppercase tracking-wide absolute top-2.5 z-10">
                              
                              applied!
                            </span>
                          </button>
                        )}
                      </div>
                    )}
                  </form>
                </div>
                <div className="flex items-center py-2 text-sm w-full font-semibold text-gray-500 last:border-b-0 last:text-base last:pb-0">
                  {showingTranslateValue(
                    storeCustomizationSetting?.checkout?.sub_total
                  )}
                  <span className="ml-auto flex-shrink-0 text-gray-800 font-bold">
                    {currency}
                    {cartTotal?.toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center py-2 text-sm w-full font-semibold text-gray-500 last:border-b-0 last:text-base last:pb-0">
                  {showingTranslateValue(
                    storeCustomizationSetting?.checkout?.shipping_cost
                  )}
                  <span className="ml-auto flex-shrink-0 text-gray-800 font-bold">
                    {currency}
                    {shippingCost?.toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center py-2 text-sm w-full font-semibold text-gray-500 last:border-b-0 last:text-base last:pb-0">
                  {showingTranslateValue(
                    storeCustomizationSetting?.checkout?.discount
                  )}
                  <span className="ml-auto flex-shrink-0 font-bold text-orange-400">
                    {currency}
                    {discountAmount.toFixed(2)}
                  </span>
                </div>
                <div className="border-t mt-4">
                  <div className="flex items-center font-bold font-serif justify-between pt-5 text-sm uppercase">
                    {showingTranslateValue(
                      storeCustomizationSetting?.checkout?.total_cost
                    )}
                    <span className="font-serif  font-extrabold text-lg">
                      {currency}
                      {parseFloat(total).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default dynamic(() => Promise.resolve(Checkout), { ssr: false });
