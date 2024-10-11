import React from 'react';

const LovedDesigns = ({ bgColor, imageUrl, category, title, price, priceColor }) => {
  return (
    <div className={`flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-lg transform transition-transform duration-300 hover:scale-105`}>
      {/* <svg
        className="absolute bottom-0 left-0 mb-8"
        viewBox="0 0 375 283"
        fill="none"
        style={{ transform: 'scale(1.5)', opacity: 0.1 }}
      >
        <rect
          x="159.52"
          y="175"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 159.52 175)"
          fill="white"
        />
        <rect
          y="107.48"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 0 107.48)"
          fill="white"
        />
      </svg> */}
      <div className="relative pt-10 px-10 flex items-center justify-center">
        <div
          className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
          style={{
            background: 'radial-gradient(black, transparent 60%)',
            transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)',
            opacity: 0.2,
          }}
        ></div>
        <img className="relative w-48 h-auto" src={imageUrl} alt={title} />
      </div>
      <div className="relative text-white px-6 pb-6 mt-6">
        <span className="block opacity-75 -mb-1">{category}</span>
        <div className="flex justify-between">
          <span className="block font-medium uppercase text-sm tracking-wide mt-2">{title}</span>
          <span className={`block bg-gray-100 rounded-full mt-1 ${priceColor} text-xs font-medium px-3 py-2 leading-none flex items-center`}>
            $ {price}
          </span>
        </div>
      </div>
    </div>
  );
};

const ProductGrid = () => {
  const products = [
    {
      bgColor: 'bg-black',
      imageUrl: 'https://www.giva.co/cdn/shop/products/BR060_model.jpg?v=1694698582&width=1445',
      category: 'Heart Charm Bracelet',
      title: 'Sterling',
      price: '36.00',
      priceColor: 'text-orange-500',
    },
    {
      bgColor: 'bg-black',
      imageUrl: 'https://m.media-amazon.com/images/I/614AhkQRVpL._AC_UY1000_.jpg',
      category: 'Dual Silver Magic Design',
      title: 'Bells',
      price: '45.00',
      priceColor: 'text-teal-500',
    },
    {
      bgColor: 'bg-black',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0527/7669/8040/files/Tennis_Bracelet_480x480.webp?v=1701868084',
      category: 'Silver Diamond Tennis Bracelet',
      title: 'Solitaire',
      price: '68.50',
      priceColor: 'text-purple-500',
    },
    {
      bgColor: 'bg-black',
      imageUrl: 'https://images-static.nykaa.com/media/catalog/product/a/b/abf798cSJNK2167_1.jpg?tr=w-500',
      category: 'Saraf Silver Plated Red CZ',
      title: 'Studded',
      price: '68.50',
      priceColor: 'text-red-600',
    },
  ];

  return (
    <div className="p-24 flex flex-wrap items-center justify-center">
      {products.map((product, index) => (
        <LovedDesigns
          key={index}
          bgColor={product.bgColor}
          imageUrl={product.imageUrl}
          category={product.category}
          title={product.title}
          price={product.price}
          priceColor={product.priceColor}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
