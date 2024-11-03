import React from "react";
import "remixicon/fonts/remixicon.css";

const Connection = ({ title, description }) => {
  return (
    <section className="flex justify-between items-start px-14 pt-24">
      <div className="left">
        <h1 className="text-8xl font-[600] tracking-wide text-[#ccc] mb-[2rem] uppercase">
          {title} <span className="text-[#d5ff3f]">.</span>
        </h1>
        <p className="text-[#ccc] opacity-70">{description}</p>
      </div>
      <div className="right flex flex-col w-[40vw] gap-4 py-[50px]">
        <div className="first flex gap-2 justify-end">
          <button className="border-[1px] text-white capitalize border-white rounded-2xl px-9 py-2 hover:bg-[#d5ff3f] hover:text-black transition-all duration-300 ease-in-out font-[400] flex gap-1">
            <i class="ri-global-line"></i>
            design
          </button>
          <button className="border-[1px] text-white capitalize border-white rounded-2xl px-9 py-2 hover:bg-[#d5ff3f] hover:text-black transition-all duration-300 ease-in-out font-[400] flex gap-1">
            <i class="ri-global-line"></i>
            development
          </button>
        </div>
        <div className="second flex gap-2 justify-end">
          <button className="border-[1px] text-white capitalize border-white rounded-2xl px-9 py-2 hover:bg-[#d5ff3f] hover:text-black transition-all duration-300 ease-in-out font-[400] flex gap-1">
            <i class="ri-global-line"></i>
            digital marketing
          </button>
          <button className="border-[1px] text-white capitalize border-white rounded-2xl px-9 py-2 hover:bg-[#d5ff3f] hover:text-black transition-all duration-300 ease-in-out font-[400] flex gap-1">
            <i class="ri-global-line"></i>
            SEO
          </button>
        </div>
      </div>
    </section>
  );
};

export default Connection;
