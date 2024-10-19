import React from "react";

const PreLoader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-14 h-14 border-4 border-t-[#ff6b01] border-black rounded-full animate-spin"></div>
    </div>
  );
};

export default PreLoader;
