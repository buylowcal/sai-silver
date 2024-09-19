import Image from "next/image";
import Link from "next/link";
import React from "react";
import SocialIcons from "@components/socials/icon";

const Footer = () => {
  const footerLinks = [
    {
      src: "https://www.subzero-wolf.com/-/media/footer-images/tri-brand_brochure_mockup_web_2022_dark.jpg?width=170&hash=3113CF5D8AADB7832815CF5F596EFB53",
      alt: "Request a Brochure",
      text: "Request a Brochure",
    },
    {
      src: "https://www.subzero-wolf.com/-/media/images/web20/general-block-component/szf20_049045_subzdenvershowroom_kitchen_2_oven_g7c3_280.jpg?width=150&hash=1BFD5896F07E2B9907F4A2900EEC05AA",
      alt: "Discover Our Showroom",
      text: "Discover Our Showroom",
    },
    {
      src: "https://www.subzero-wolf.com/-/media/promotions/fullsuitesavingswebfooter--300x2622x.png?width=600&hash=D1F162F9DECC3210F4CF7EFAEA0C964F",
      alt: "View Limited-Time Offer",
      text: "View Limited-Time Offer",
    },
  ];

  const links = [
    { label: "Owner Resources", link: "/owner-resources" },
    { label: "Product Resources", link: "/product-resources" },
    { label: "Product Support", link: "/product-support" },
    { label: "Locator", link: "/Locator" },
    { label: "About Us", link: "/about" },
    { label: "Contact Us", link: "/contact" },
    { label: "Careers", link: "/careers" },
    { label: "My Account", link: "/my-account" },
    { label: "My Favorites", link: "/my-favorites" },
    { label: "Buy Accessories", link: "/buy-accessories" },
    { label: "Product Registration", link: "/product-registration" },
    { label: "Promotions", link: "/promotions" },
  ];

  return (
    <footer className="bg-gray-100">
      {/* Join the community section */}
      <div className="bg-black text-white py-10">
        <div className="flex justify-center mb-6">
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
              strokeLinecap="round"
              strokeWidth="1"
              d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
            />
          </svg>
        </div>
        <h2 className="text-center text-4xl font-serif font-medium mb-6">
          Join the community
        </h2>
        <p className="text-center text-base font-sans font-normal mb-6">
          Be the first to know about new products and features, explore
          lifestyle
          <br />
          articles and recipes, and learn how to get the most out of your
          appliances.
        </p>
        <div className="flex justify-center">
          <Link
            href="#"
            className="text-white border border-white hover:bg-white hover:text-black font-normal tracking-wider rounded-full text-base px-6 py-2"
          >
            Sign up now
          </Link>
        </div>
      </div>

      {/* Top Section with images and links */}
      <div className="py-10 px-4 flex justify-between">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-2 mb-10  justify-start items-start">
          {footerLinks.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <Link
                href="#"
                className="text-gray-500 font-thin text-sm tracking-wide font-sans m-2"
              >
                {item.text}
              </Link>
              <Image
                src={item.src}
                alt={item.alt}
                className="object-cover mb-2"
                width={140}
                height={140}
              />
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 justify-end">
          <ul className="space-y-2 text-gray-700">
            {links.map((links, index) => (
              <li key={index}>
                <Link
                  href={links.link}
                  className="hover:text-gray-400 tracking-wider text-base uppercase"
                >
                  {links.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 p-2">
        {/* Social Media Icons */}
        <div className="flex justify-start space-x-4">
          <SocialIcons />
        </div>

        {/* Legal Links */}
        <div className="flex flex-wrap justify-end itesm-end md:justify-center space-x-4 text-gray-500 text-sm">
          <Link href="#">Warranty</Link>
          <Link href="#">Contact Us</Link>
          <Link href="#">Notice at Collection</Link>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Use</Link>
        </div>

        {/* Additional Legal Links */}
       
      </div>
      {/* <div className="flex flex-wrap justify-end itesm-end md:justify-end space-x-4 text-gray-500 text-sm">
          <Link href="#">Accessibility Statement</Link>
          <Link href="#">Do Not Sell/Share My Personal Information © 2024</Link>
        </div> */}
    </footer>
  );
};

export default Footer;
