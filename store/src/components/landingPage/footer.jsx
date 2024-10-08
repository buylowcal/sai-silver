// src/components/Footer.jsx
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SocialIcons from "@components/socials/icon";

const Footer = () => {
  const footerLinks = [
    {
      src: "/logo/request-catalog.jpg",
      alt: "Request a Catalog",
      text: "Request a Catalog",
    },
    {
      src: "/logo/visit-showroom.jpg",
      alt: "Visit Our Showroom",
      text: "Visit Our Showroom",
    },
    {
      src: "/logo/limited-time-offer.jpg",
      alt: "View Limited-Time Offer",
      text: "View Limited-Time Offer",
    },
  ];

  const links = [
    { label: "About Us", link: "/about" },
    { label: "Contact Us", link: "/contact" },
    { label: "Store Locator", link: "/store-locator" },
    { label: "Careers", link: "/careers" },
    { label: "My Account", link: "/my-account" },
    { label: "Wishlist", link: "/wishlist" },
    { label: "Gift Cards", link: "/gift-cards" },
    { label: "Product Care", link: "/product-care" },
    { label: "Return Policy", link: "/return-policy" },
    { label: "Shipping Information", link: "/shipping-info" },
    { label: "FAQs", link: "/faqs" },
    { label: "Promotions", link: "/promotions" },
  ];

  return (
    <footer className="bg-orange-50">
      {/* Join the Community Section */}
   
      {/* Top Section with Images and Links */}
      <div className="py-10 px-4 flex flex-col md:flex-row justify-between">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {footerLinks.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <Link
                href="#"
                className="text-gray-800 font-thin text-sm tracking-wider font-sans m-2"
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

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <ul className="space-y-2 text-gray-800">
            {links.slice(0, Math.ceil(links.length / 2)).map((linkItem, index) => (
              <li key={index}>
                <Link
                  href={linkItem.link}
                  className="hover:text-gray-600 tracking-wider text-base uppercase"
                >
                  {linkItem.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="space-y-2 text-gray-800">
            {links.slice(Math.ceil(links.length / 2)).map((linkItem, index) => (
              <li key={index}>
                <Link
                  href={linkItem.link}
                  className="hover:text-gray-600 tracking-wider text-base uppercase"
                >
                  {linkItem.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Section with Social Icons and Legal Links */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 p-4">
        {/* Social Media Icons */}
        <div className="flex justify-start space-x-4">
          <SocialIcons />
        </div>

        {/* Legal Links */}
        <div className="flex flex-wrap justify-end items-end md:justify-center space-x-4 text-gray-800 text-sm tracking-wider">
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
          <Link href="#">Return Policy</Link>
          <Link href="#">Contact Us</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
