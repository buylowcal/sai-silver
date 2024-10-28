import React from "react";

//internal import
import Layout from "@layout/Layout";
import useGetSetting from "@hooks/useGetSetting";
import PageHeader from "@components/header/PageHeader";
import Preloader from "@components/preloader/preLoader";
import useUtilsFunction from "@hooks/useUtilsFunction";

const TermAndConditions = () => {
  const { storeCustomizationSetting, loading, error } = useGetSetting();
  const { showingTranslateValue } = useUtilsFunction();

  return (
    <Layout
      title="Terms & Conditions"
      description="This is terms and conditions page"
    >
      <PageHeader
        headerBg={storeCustomizationSetting?.term_and_condition?.header_bg}
        // title={showingTranslateValue(
        //   storeCustomizationSetting?.term_and_condition?.title
        // )}
        title="Terms & Conditions"
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
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
              {/* {t("common:terms-condition-cookies")}
               */}
              Welcome to Sai Silver!
            </h2>
            <div className="font-sans leading-7 text-justify">
              <p>
                {/* {t("common:terms-condition-cookies-docs")} */}
                These terms and conditions outline the rules and regulations for
                the use of saiSilver's Website, located at
                https://thesaiSilver.com/. By accessing this website we assume you
                accept these terms and conditions. Do not continue to use
                saiSilver if you do not agree to take all of the terms and
                conditions stated on this page. The following terminology
                applies to these Terms and Conditions, Privacy Statement and
                Disclaimer Notice and all Agreements: Client, You and Your
                refers to you, the person log on this website and compliant to
                the Company’s terms and conditions. The Company, refers to our
                CompanyPartParties or Us refers to both the Client and
                ourselves. <br/><br/>All terms refer to the offer, acceptance and
                consideration of payment necessary to undertake the process of
                our assistance to the Client in the most appropriate manner for
                the express purpose of meeting the Client’s needs in respect of
                provision of the Company’s stated services, in accordance with
                and subject to, prevailing law of Netherlands. Any use of the
                above terminology or other words in the singular, plural,
                capitalization and/or he/she or they, are taken as
                interchangeable and therefore as referring to same.
              </p>
            </div>
          </div>
          {/* <div className="mb-8 lg:mb-12 last:mb-0">
            <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
              {t("common:terms-condition-license")}
            </h2>
            <div className="font-sans leading-7">
              <p>{t("common:terms-condition-license-docs")}</p>

              <ul>
                <strong className="mb-2">
                  {" "}
                  {t("common:terms-condition-license-docs0")}
                </strong>
                <li>{t("common:terms-condition-license-docs1")}</li>
                <li>{t("common:terms-condition-license-docs2")}</li>
                <li>{t("common:terms-condition-license-docs3")}</li>
                <li>{t("common:terms-condition-license-docs4")}</li>
                <li> {t("common:terms-condition-license-docs5")}</li>
                <li>{t("common:terms-condition-license-docs6")}</li>
                <li>{t("common:terms-condition-license-docs7")}</li>
              </ul>
              <p>{t("common:terms-condition-license-docs8")}</p>
            </div>
            <div className="my-6 lg:my-8 last:mb-0">
              <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
                {t("common:terms-condition-liability")}
              </h2>
              <div className="font-sans leading-7">
                <p>{t("common:terms-condition-liability-docs")}</p>
              </div>
            </div>
            <div className="my-6 lg:my-8 last:mb-0">
              <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
                {t("common:terms-condition-privacy")}
              </h2>
              <div className="font-sans leading-7">
                <p>
                  {t("common:terms-condition-privacy-docs1")}
                  <Link href="/privacy-policy" className="text-emerald-500">
                    {t("common:terms-condition-privacy-docs2")}
                  </Link>{" "}
                </p>
              </div>
            </div>
            <div className="my-6 lg:my-8 last:mb-0">
              <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
                {t("common:terms-condition-rights")}
              </h2>
              <div className="font-sans leading-7">
                <p>{t("common:terms-condition-rights-docs")}</p>
              </div>
            </div>
            <div className="my-6 lg:my-8 last:mb-0">
              <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
                {t("common:terms-condition-website")}
              </h2>
              <div className="font-sans leading-7">
                <p>{t("common:terms-condition-website-docs")}</p>
              </div>
            </div>
            <div className="my-6 lg:my-8 last:mb-0">
              <h2 className="text-xl xl:text-2xl xl:leading-7 font-semibold font-serif mb-2 lg:mb-4">
                {t("common:terms-condition-disclaimer")}
              </h2>
              <div className="font-sans leading-7">
                <p>{t("common:terms-condition-disclaimer-docs")}</p>
                <ul>
                  <li>{t("common:terms-condition-disclaimer-docs1")}</li>
                  <li>{t("common:terms-condition-disclaimer-docs2")}</li>
                  <li>{t("common:terms-condition-disclaimer-docs3")}</li>
                  <li>{t("common:terms-condition-disclaimer-docs4")}</li>
                </ul>
                <p>{t("common:terms-condition-disclaimer-docs5")}</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </Layout>
  );
};

export default TermAndConditions;
