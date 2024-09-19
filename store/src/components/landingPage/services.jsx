import Link from "next/link";
import React from "react";

const Services = () => {
  const buttons = [
    { label: "Shop Products", link: "/shop" },
    { label: "Product Support", link: "/support" },
    { label: "Services & Parts", link: "/services" },
    { label: "Trade & Resources", link: "/trade" },
    { label: "Connect With Us", link: "/connect" },
    { label: "Contact Us", link: "/contact" },
    { label: "More Guides", link: "/guides" },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Static text above marquee */}

      {/* Marquee effect */}
      <div
        className="w-full bg-black h-40 inline-flex flex-nowrap overflow-hidden p-6"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 20%, black 95%, transparent 100%)",
        }}
      >
        <ul className="flex items-center justify-center md:justify-start space-x-8 animate-infinite-scroll">
          {buttons.map((button, index) => (
            <li key={index}>
              <Link
                href={button.link}
                className="w-fit text-white whitespace-nowrap bg-transparent hover:bg-red-800 border border-white hover:border-red-800 font-normal tracking-wider rounded-full text-base px-6 py-2 text-center me-2 mb-2"
              >
                {button.label}
              </Link>
            </li>
          ))}
        </ul>
        <ul
          className="flex items-center justify-center md:justify-start space-x-8 animate-infinite-scroll ml-6"
          aria-hidden="true"
        >
          {buttons.map((button, index) => (
            <li key={index}>
              <Link
                href={button.link}
                className="w-fit text-white whitespace-nowrap bg-transparent hover:bg-red-800 border border-white hover:border-red-800 font-normal tracking-wider rounded-full text-base px-6 py-2 text-center me-2 mb-2"
              >
                {button.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Services;
