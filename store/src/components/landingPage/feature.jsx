import React from 'react';
// Importing icons from react-icons
import { GiHeartKey, GiSparkles } from 'react-icons/gi'; 
import { BsShieldCheck } from 'react-icons/bs'; 

const features = [
  {
    icon: <GiHeartKey className="h-10 w-10 mb-4 text-white" />,
    text: 'Handmade with love in India',
  },
  {
    icon: <BsShieldCheck className="h-10 w-10 mb-4 text-white" />,
    text: '365 day warranty',
  },
  {
    icon: <GiSparkles className="h-10 w-10 mb-4 text-white" />,
    text: '18KT real gold on 92.5 sterling silver',
  },
];

const FeaturesSection = () => {
  return (
    <div className="bg-[#ff6b01] py-6 flex justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-18 space-x-8 px-4">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            {feature.icon}
            <p className="text-center text-white text-[22px] font-thin font-sans tracking-wider leading-9">{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
