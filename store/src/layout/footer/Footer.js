import React from 'react';
import FooterBottom from './FooterBottom';

const Footer = () => {
  // Array for the Care section
  const careLinks = [
    { name: 'RETURNS AND REFUNDS', url: '/returns-and-refunds' },
    { name: 'SHIPPING POLICY', url: '/shipping-policy' },
    { name: 'JEWELLERY CARE', url: '/jewellery-care' },
    { name: 'WARRANTY', url: '/warranty' },
    { name: 'CONTACT US', url: '/contact-us' },
    { name: 'TERMS & CONDITIONS', url: '/terms-and-conditions' },
  ];

  // Array for the Shop section
  const shopLinks = [
    { name: 'JUST LAUNCHED', url: '/just-launched' },
    { name: 'ALL PERSONALIZED', url: '/all-personalized' },
    { name: 'BESTSELLERS', url: '/bestsellers' },
    { name: 'BRACELETS', url: '/bracelets' },
    { name: 'RINGS', url: '/rings' },
    { name: 'NECKLACES', url: '/necklaces' },
  ];

  return (
    <>
      <footer className="bg-[#e5e7eb] text-gray-800 p-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Need Help Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 tracking-widest">NEED HELP? WE'RE ALWAYS THERE</h3>
            <p className="text-base mb-2 tracking-wide leading-2  text-justify">
              Everyone who shops from us is one of us, we will never ghost you.
              Reach out to us & we promise to help you out in the best way possible.
            </p>
            <p className="text-base mb-2 hover:text-gray-500">
              Email - <a href="mailto:help@saiSilver.com" className="hover:underline">help@saiSilver.com</a>
            </p>
            {/* <p className="text-base font-semibold">Mon - Sat (10 AM - 7 PM)</p> */}
          </div>

          {/* About Us Section */}
          <div>
            <h3 className="text-lg tracking-widest font-semibold mb-4">ABOUT US</h3>
            <p className="text-base tracking-wide leading-2 text-justify">
              Each of your pieces are handcrafted by more than 200 karigars working tirelessly for you. 
              We started this brand in 2020 with an aim of providing jobs to more than 1000 karigars who lost livelihood in Covid.
            </p>
          </div>

          {/* Care Section */}
          <div>
            <h3 className="text-lg font-semibold tracking-widest mb-4">CARE</h3>
            <ul className="text-base space-y-2 tracking-widest">
              {careLinks.map((item, index) => (
                <li key={index}>
                  <a href={item.url} className="hover:underline underline-offset-4 hover:text-gray-500">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Shop Section */}
          <div>
            <h3 className="text-lg font-semibold tracking-widest mb-4">SHOP</h3>
            <ul className="text-base space-y-2 tracking-widest">
              {shopLinks.map((item, index) => (
                <li key={index}>
                  <a href={item.url} className="hover:underline underline-offset-4  hover:text-gray-500">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
      <FooterBottom />
    </>
  );
};

export default Footer;
