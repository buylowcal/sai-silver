import React from 'react';

const Card = ({ title, Icon, quantity, className }) => {
  return (
    <div className="flex h-full">
      <div className="flex items-center border border-gray-200 w-full rounded-lg p-4">
        <div
          className={`flex items-center justify-center p-3 rounded-full h-12 w-12 text-xl text-center mr-4 ${className}`}
        >
          <Icon />
        </div>
        <div>
          <h5 className="leading-none mb-2 text-sm font-medium tracking-widest font-sans text-gray-800">
            {title}
          </h5>
          <p className="text-[18px] font-bold font-sans leading-none text-gray-500">
            {quantity}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
