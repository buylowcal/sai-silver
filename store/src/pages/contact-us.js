import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import useTranslation from "next-translate/useTranslation";
import { FiMail, FiMapPin, FiBell } from "react-icons/fi";
import Link from "next/link";
//internal import
import Layout from "@layout/Layout";
import Label from "@components/form/Label";
import Error from "@components/form/Error";
import { notifySuccess } from "@utils/toast";
import InputArea from "@components/form/InputArea";
import PageHeader from "@components/header/PageHeader";
import useGetSetting from "@hooks/useGetSetting";
import PreLoader from "@components/preloader/preLoader";
import useUtilsFunction from "@hooks/useUtilsFunction";

const ContactUs = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { showingTranslateValue } = useUtilsFunction();
  const { storeCustomizationSetting, loading, error } = useGetSetting();
  console.log("storeCustomizationSetting", storeCustomizationSetting);
  const submitHandler = () => {
    notifySuccess(
      "your message sent successfully. We will contact you shortly."
    );
  };

  return (
    <Layout title="Contact Us" description="This is contact us page">
      <PageHeader
        // headerBg={storeCustomizationSetting?.contact_us?.header_bg}
        // title={showingTranslateValue(
        //   storeCustomizationSetting?.contact_us?.title
        // )}
   
        title="Contact Us"
      />

      <div className="bg-white">
        <div className="max-w-screen-2xl mx-auto lg:py-20 py-10 px-4 sm:px-10">
          {/* contact promo */}
          <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-3 xl:gap-8 font-sans">
            {loading ? (
              <PreLoader
                count={1}
                height={20}
                error={error}
                loading={loading}
              />
            ) : (
              <div className="border p-10 rounded-lg text-center  shadow-xl">
                <span className="flex justify-center text-4xl text-[#ff6b01] mb-4">
                  <FiMail />
                </span>
                <h5 className="text-xl mb-2 font-bold">
                  {/* {showingTranslateValue(
                    storeCustomizationSetting?.contact_us?.email_box_title
                  )} */}
                  Email Us
                </h5>
                <p className="mb-0 text-base opacity-90 leading-7">
                  <Link
                    // href={`mailto:${storeCustomizationSetting?.contact_us?.email_box_email}`}
                    href="mailto:sai.silver.jewells@gmail.com"
                    className="text-[#ff6b01]"
                  >
                    sai.silver.jewells@gmail.com
                  </Link>{" "}
                  {/* {showingTranslateValue(
                    storeCustomizationSetting?.contact_us?.email_box_text
                  )} */}
                  Interactively grow empowered for process-centric total
                  linkage.
                </p>
              </div>
            )}

            {loading ? (
              // <PreLoader
              //   // count={1}
              //   // height={20}
              //   // error={error}
              //   // loading={loading}
              // />
              <></>
            ) : (
              <div className="border p-10 rounded-lg text-center shadow-xl">
                <span className="flex justify-center text-4xl text-[#ff6b01] mb-4">
                  <FiBell />
                </span>
                <h5 className="text-xl mb-2 font-bold">
                  {/* {showingTranslateValue(
                    storeCustomizationSetting?.contact_us?.call_box_title
                  )} */}
                  Call Us
                </h5>
                <p className="mb-0 text-base opacity-90 leading-7">
                  <Link
                    // href={`mailto:${storeCustomizationSetting?.contact_us?.call_box_phone}`}
                    href="tel:+917700000760"
                    className="text-[#ff6b01]"
                  >
                    {/* {showingTranslateValue(
                      storeCustomizationSetting?.contact_us?.call_box_phone
                    )} */}{" "}
                    +91 7700 000 760
                  </Link>{" "}
                  {/* {showingTranslateValue(
                    storeCustomizationSetting?.contact_us?.call_box_text
                  )} */}
                  Distinctively disseminate focused solutions clicks-and-mortar
                  ministate.
                </p>
              </div>
            )}
            {loading ? (
              // <PreLoader
              //   count={1}
              //   height={20}
              //   error={error}
              //   loading={loading}
              // />
              <></>
            ) : (
              <div className="border p-10 rounded-lg text-center shadow-xl">
                <span className="flex justify-center text-4xl text-[#ff6b01] mb-4">
                  <FiMapPin />
                </span>
                <h5 className="text-xl mb-2 font-bold">
                  {/* {showingTranslateValue(
                    storeCustomizationSetting?.contact_us?.address_box_title
                  )} */}
                  Location
                </h5>
                <p className="mb-0 text-base opacity-90 leading-7">
                  <span>
                    {/* {showingTranslateValue(
                      storeCustomizationSetting?.contact_us
                        ?.address_box_address_one
                    )} */}
                    Sohan Nagar, Kalka
                  </span>{" "}
                  <br />
                  {/* {showingTranslateValue(
                    storeCustomizationSetting?.contact_us
                      ?.address_box_address_two
                  )}{" "} */}
                  Haryana region - North India,
                  <br />
                  {/* {showingTranslateValue(
                    storeCustomizationSetting?.contact_us
                      ?.address_box_address_three
                  )} */}
                  District - Panchkula(133302)
                </p>
              </div>
            )}
          </div>

          {/* contact form */}
          <div className="px-0  mx-auto items-center flex flex-col md:flex-row w-full justify-between">
            <div className="hidden md:w-full lg:w-5/12 lg:flex flex-col h-full">
              <Image
                width={874}
                height={874}
                src={
                  storeCustomizationSetting?.contact_us?.midLeft_col_img ||
                  "https://www.hapell.com/assets/images/contactus_1.png"
                }
                alt="logo"
                className="block w-auto"
              />
            </div>
            <div className="px-0 pt-24 pb-2 lg:w-5/12 flex flex-col md:flex-row">
              <form
                onSubmit={handleSubmit(submitHandler)}
                className="w-full mx-auto flex flex-col justify-center"
              >
                <div className="mb-12">
                  <h3 className="text-lg md:text-2xl lg:text-2xl text-justify font-semibold font-sans mb-3">
                    {/* <PreLoader
                      count={1}
                      height={50}
                      // error={error}
                      loading={loading}
                      data={storeCustomizationSetting?.contact_us?.form_title}
                    /> */}
                    For any support just send your query
                  </h3>
                  <p className="text-base opacity-90 leading-6 text-gray-400 lg:text-justify">
                    Collaboratively promote client-focused convergence vis-a-vis
                    customer-directed alignments via plagiarized strategic users
                    and standardized infrastructures.
                    {/* <PreLoader
                      count={1}
                      height={20}
                      // error={error}
                      loading={loading}
                      // data={
                      //   storeCustomizationSetting?.contact_us?.form_description
                      // }
                      data="Collaboratively promote client-focused convergence vis-a-vis customer-directed alignments via plagiarized strategic users and standardized infrastructures."
                    /> */}
                  </p>
                </div>

                <div className="flex flex-col space-y-5">
                  <div className="flex flex-col md:flex-row space-y-5 md:space-y-0">
                    <div className="w-full md:w-1/2 ">
                      <InputArea
                        register={register}
                        label={t("common:contact-page-form-input-name")}
                        name="name"
                        type="text"
                        placeholder={t(
                          "common:contact-page-form-plaholder-name"
                        )}
                      />
                      <Error errorName={errors.name} />
                    </div>
                    <div className="w-full md:w-1/2 md:ml-2.5 lg:ml-5 mt-2 md:mt-0">
                      <InputArea
                        register={register}
                        label={t("common:contact-page-form-input-email")}
                        name="email"
                        type="email"
                        placeholder={t(
                          "common:contact-page-form-plaholder-email"
                        )}
                      />
                      <Error errorName={errors.email} />
                    </div>
                  </div>
                  <div className="relative">
                    <InputArea
                      register={register}
                      label={t("common:contact-page-form-input-subject")}
                      name="subject"
                      type="text"
                      placeholder={t(
                        "common:contact-page-form-plaholder-subject"
                      )}
                    />
                    <Error errorName={errors.subject} />
                  </div>
                  <div className="relative mb-4">
                    <Label
                      label={t("common:contact-page-form-input-message")}
                    />
                    <textarea
                      {...register("message", {
                        required: `Message is required!`,
                      })}
                      name="message"
                      className="px-4 py-3 flex items-center w-full rounded appearance-none opacity-75 transition duration-300 ease-in-out text-base focus:ring-0 bg-white border border-gray-300 focus:shadow-none focus:outline-none focus:border-gray-500 placeholder-body"
                      autoComplete="off"
                      spellCheck="false"
                      rows="4"
                      placeholder={t(
                        "common:contact-page-form-plaholder-message"
                      )}
                    ></textarea>
                    <Error errorName={errors.message} />
                  </div>
                  <div className="relative">
                    <button
                      data-variant="flat"
                      className="md:text-base leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none bg-black text-white px-5 md:px-6 lg:px-8 py-3 md:py-3.5 lg:py-3 hover:text-white hover:bg-[#ff6b01] h-12 mt-1 text-base lg:text-base w-full sm:w-auto"
                    >
                      {t("common:contact-page-form-send-btn")}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
