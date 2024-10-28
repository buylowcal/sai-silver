import React from "react";

const PageHeader = ({ title, headerBg }) => {
  return (
    <div
      style={{ backgroundImage: `url(${headerBg || "/jewel/footerBanner.png"})` }}
      className={`flex justify-center py-10 lg:py-20 bg-indigo-100 w-full bg-cover bg-no-repeat bg-bottom`}
    >
      <div className="flex mx-auto w-full max-w-screen-2xl px-3 sm:px-10">
        <div className="w-full flex justify-center flex-col relative">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-white tracking-wider uppercase font-sans mt-6 p-6 text-center">
            {/* {t(`common:${title}`)} */}
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
