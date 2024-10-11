import React from 'react';

const MainSection = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap"
        rel="stylesheet"
      />
      <main className="relative w-1/2 min-w-[1000px] bg-gradient-to-r from-[#0f503e] to-[#7eca12] rounded-[30px]">
        <h3 className="mt-8 ml-8 text-[28px] text-white font-light">The year earth</h3>
        <h1 className="mb-8 ml-8 text-[55px] text-white">CHANGED</h1>
        <div className="ml-8 mb-8 flex">
          <button
            id="downloadBtn"
            className="relative px-10 py-5 text-[16px] bg-white rounded-r-[100px] border-none cursor-pointer"
          >
            Download
            <span className="absolute top-[100%] left-0 h-[60px] w-[30px] rounded-tl-[-30px] bg-transparent shadow-[0_-30px_0_0_white]"></span>
            <span className="absolute top-[-60px] left-0 h-[60px] w-[30px] rounded-bl-[30px] bg-transparent shadow-[0_30px_0_0_white]"></span>
          </button>
          <button className="px-10 py-5 text-[16px] bg-white rounded-l-[100px] border-none cursor-pointer">
            Play
          </button>
        </div>
        <p className="ml-8 mb-8 text-[#A9C3B1] font-light">
          narrated by <br /> David Attenborough
        </p>
        <div
          id="chameleon"
          className="absolute bottom-0 right-0 h-[390px] w-[600px] bg-no-repeat bg-[url('https://freepngimg.com/thumb/iguana/27315-1-iguana-transparent-background.png')] bg-auto bg-bottom"
        ></div>
      </main>
    </>
  );
};

export default MainSection;
