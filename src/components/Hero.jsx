import React from "react";
import "remixicon/fonts/remixicon.css";

const Hero = () => {
  return (
    <div className="hero-section m-h-screen w-screen">
      <div className="hero-img">
        <img
          src="https://wizmediainfo.com/wp-content/uploads/2024/01/Picsart_23-11-05_15-31-00-817-2048x1011.jpg"
          className="mt-14 px-20"
        />
      </div>

      <div className="hero-marque h-40 w-full bg-[#000] text-[#d5ff3f] flex gap-2 items-center">
        <div className="flex whitespace-nowrap gap-3">
          <h1 className="text-[40px] uppercase tracking-[2px] animate-marquee duration-[3s] flex-1">
            <i className="ri-gemini-fill px-2"></i>
            success your ideas
          </h1>
          <h1 className="text-[40px] uppercase tracking-[2px] animate-marquee flex-1">
            <i className="ri-gemini-fill px-2"></i>
            discuss your ideas
          </h1>
        </div>
        <div className="flex whitespace-nowrap gap-3">
          <h1 className="text-[40px] uppercase tracking-[2px] animate-marquee flex-1">
            <i className="ri-gemini-fill px-2"></i>
            success your ideas
          </h1>
          <h1 className="text-[40px] uppercase tracking-[2px] animate-marquee flex-1">
            <i className="ri-gemini-fill px-2"></i>
            discuss your ideas
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
