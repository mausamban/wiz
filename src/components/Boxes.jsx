import React from "react";
import "remixicon/fonts/remixicon.css";

const Boxes = ({ number, title }) => {
  return (
    <>
      <div className="box-content text-[#ccc] h-[20vh] w-[90vw] flex justify-between items-center border-b-2 border-[#ccc] px-10 hover:bg-[#d5ff3f] hover:text-black transition-all duration-300 ease-in-out hover:rounded-xl cursor-pointer">
        <div className="box-right ">
          <div className="content flex gap-2 relative">
            <p className="text-xl font-bold absolute top-[-10px]">{number}</p>
            <h2 className="text-4xl uppercase font-bold pl-11">{title}</h2>
          </div>
        </div>
        <div className="box-left ">
          <i class="ri-arrow-right-up-line text-6xl font-extrabold"></i>
        </div>
      </div>
    </>
  );
};

export default Boxes;
