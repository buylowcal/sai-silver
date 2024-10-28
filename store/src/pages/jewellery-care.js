import React from "react";

//internal import
import Layout from "@layout/Layout";
import useGetSetting from "@hooks/useGetSetting";
import PageHeader from "@components/header/PageHeader";
import Preloader from "@components/preloader/preLoader";
import useUtilsFunction from "@hooks/useUtilsFunction";

const JewelleryCare = () => {
  const { storeCustomizationSetting, loading, error } = useGetSetting();
  const { showingTranslateValue } = useUtilsFunction();
  const careTips = [
    {
      icon: "/jewel/icons/handwash.png",
      alt: "Avoid Water",
      title: "AVOID WATER",
      description: `First things first, I have a secret to tell you. I’m actually
                    allergic to water! Exposure to water can make my polish fade
                    faster, and no one wants that. So, to keep me in tip-top shape,
                    please keep me away from showers, moisture, and swimming pools.`,
    },
    {
      icon: "/jewel/icons/perfumepuff.png",
      alt: "Avoid Scents",
      title: "Avoid Scents",
      description: `Now, I know you love to smell great, but please keep in mind
                    that I don’t like scents. Even perfumes can tarnish my polish
                    and make me lose my shine. So, if you’re planning on spritzing
                    yourself with a little something, please put me away first.`,
    },
    {
      icon: "/jewel/icons/sleepwaer.png",
      alt: "Sleep Separately",
      title: "Sleep Separately",
      description: `I know you love snuggling up to me, but when we get tangled up
                    with clothes or bedsheets, it can cause wear and tear on my
                    precious stones. Instead, I’d like to be put to sleep in the
                    airtight zip lock bag and box that I came in.`,
    },
    {
      icon: "/jewel/icons/outwear.png",
      alt: "First Off, Last On",
      title: "First Off, Last On",
      description: `Last but not least, I want to be the first thing you take off
                    when you get home and the last thing you put on before you head
                    out the door. This ensures I’ll be a long-lasting part of your
                    collection.`,
    },
  ];
  return (
    <Layout
      title="Terms & Conditions"
      description="This is jewellery care page"
    >
      <PageHeader
        headerBg={storeCustomizationSetting?.term_and_condition?.header_bg}
        // title={showingTranslateValue(
        //   storeCustomizationSetting?.term_and_condition?.title
        // )}
        title="Jewellery Care"
      />
      <div className="bg-white py-16 px-4 text-center">
        <h2 className="text-gray-800 text-2xl font-normal  tracking-wide">
          KEEP YOUR SPARKLE ON
        </h2>
        <h3 className="text-lg font-medium lowercase tracking-wider text-gray-500 mt-1">
          JEWELLERY CARE TIPS
        </h3>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          With simple maintenance and attention, you can protect me from wear
          and tear, and preserve my shine and luster for years to come. Read on
          for our expert tips on jewellery care.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-8 p-4">
          <img
            src="https://image.made-in-china.com/2f0j00BmuhsGbWAVrq/Necklace-Earring-Ring-Bracelet-Four-Piece-Bright-Full-Diamond-Zircon-Jewelry-Set-Bridal-Wedding-Jewelry.webp"
            alt="Jewellery Image 1"
            className="w-full md:w-1/4 rounded-xl object-cover"
          />
          <img
            src="https://ae01.alicdn.com/kf/S54e93bb75dc44ffaa231603f32905312q/2024-New-Leaves-Design-4-PCSLuxury-Dubai-Nigeria-Bridal-Jewelry-Set-Full-Zirconia-Necklace-Jewellery-Set.jpg"
            alt="Jewellery Image 2"
            className="w-full md:w-1/4 rounded-xl object-cover"
          />
          <img
            src="https://ae01.alicdn.com/kf/H31b2231b904043be9587585c8ed11e25T/Janekelly-4pcs-Bridal-Zirconia-Full-Jewelry-Sets-For-Women-Party-Luxury-Dubai-Nigeria-CZ-Crystal-Wedding.jpg"
            alt="Jewellery Image 3"
            className="w-full md:w-1/4 rounded-xl object-cover"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
          {careTips.map((tip, index) => (
            <div key={index} className="flex items-start space-x-4">
              <img src={tip.icon} alt={tip.alt} className="w-[80px] h-[80px]" />
              <div>
                <h4 className="font-bold text-left mb-2 uppercase font-baskerville tracking-wide text-gray-800">
                  {tip.title}
                </h4>
                <p className="text-gray-500 text-justify">{tip.description}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-gray-500 mt-8 ">
          That’s it! By following these simple tips, you can make sure I stay in<br/>
          great condition and keep shining for years to come. Thanks for taking<br/>
          such good care of me!
        </p>
      </div>
    </Layout>
  );
};

export default JewelleryCare;
