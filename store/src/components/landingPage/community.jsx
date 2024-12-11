import Link from "next/link";
import React from "react";

const Community = () => {
  return (
    <div>
      <div className="bg-white text-black py-10">
        <div className="flex justify-center mb-6">
          <svg
            className="w-10 h-10 text-black"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            {/* SVG Content */}
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="1"
              d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
            />
          </svg>
        </div>
        <h2 className="text-center text-4xl font-sans font-medium mb-6 tracking-wider">
          Join the Community
        </h2>
        <p className="text-center text-base font-sans font-normal mb-6 tracking-wider">
          Be the first to know about new products and features, explore
          lifestyle articles, and learn how to get the most out of your jewelry.
        </p>
        <div className="flex justify-center">
          <Link
            href="/auth/signup"
            className="text-black border border-black uppercase hover:bg-black hover:text-white font-normal tracking-wider rounded-full text-base px-6 py-2"
          >
          Signup Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Community;
