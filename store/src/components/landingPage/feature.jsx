import React from 'react';
// Importing icons from react-icons
import { GiHeartKey, GiSparkles } from 'react-icons/gi'; 
import { BsShieldCheck } from 'react-icons/bs'; 

const features = [
  {
    icon: <GiHeartKey size={58} />,
    text: 'Designed with passion, made with love',
  },
  {
    icon: <BsShieldCheck  size={58}/>,
    text: 'Chosen with care,designed for timeless charms',
  },
  {
    icon: <GiSparkles size={58} />,
    text: 'Sparkling 925 silver Jewellery (with Hallmark)',
  },
];

const FeaturesSection = () => {
  return (
    <div className="bg-[#ff6b01] py-3 flex justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-12 space-x-8 px-4">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center gap-3 text-white">
            {feature.icon}
            <p className="text-center text-white text-[22px] font-thin font-sans tracking-wider leading-9">{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
