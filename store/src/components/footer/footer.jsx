import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#e5e7eb] text-gray-800 p-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Need Help Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4 tracking-widest">NEED HELP? WE'RE ALWAYS THERE</h3>
          <p className="text-base mb-2 tracking-widest leading-5 font-sans text-justify">
            Everyone who shops from us is one of us, we will never ghost you.
            Reach out to us & we promise to help you out in the best way possible.
          </p>
          <p className="text-base mb-2">
            Email - <a href="mailto:help@saiSilver.com" className="underline">help@saiSilver.com</a>
          </p>
          <p className="text-base font-semibold">Mon - Sat (10 AM - 7 PM)</p>
        </div>

        {/* About Us Section */}
        <div>
          <h3 className="text-lg tracking-widest font-semibold mb-4">ABOUT US</h3>
          <p className="text-base tracking-wider font-sans leading-6 text-justify">
            Each of your pieces are handcrafted by more than 200 karigars working tirelessly for you. 
            We started this brand in 2020 with an aim of providing jobs to more than 1000 karigars who lost livelihood in Covid.
          </p>
        </div>

        {/* Care Section */}
        <div>
          <h3 className="text-lg font-semibold tracking-widest mb-4">CARE</h3>
          <ul className="text-base space-y-2 trackinng-widest">
            <li>RETURNS AND REFUNDS</li>
            <li>SHIPPING POLICY</li>
            <li>JEWELLERY CARE</li>
            <li>WARRANTY</li>
            <li>CONTACT US</li>
            <li>TERMS & CONDITIONS</li>
          </ul>
        </div>

        {/* Shop Section */}
        <div>
          <h3 className="text-lg font-semibold tracking-widest mb-4">SHOP</h3>
          <ul className="text-base space-y-2 trcaking-widest">
            <li>JUST LAUNCHED</li>
            <li>ALL PERSONALIZED</li>
            <li>BESTSELLERS</li>
            <li>BRACELETS</li>
            <li>RINGS</li>
            <li>NECKLACES</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
