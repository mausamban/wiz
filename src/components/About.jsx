import React from "react";
import "remixicon/fonts/remixicon.css";

const About = () => {
  return (
    <div className="about-container px-14 py-28  bg-[#171717] text-[#ccc] rounded-b-[150px]">
      <h2 className="text-[110px] font-[600] tracking-[1px] mb-[4rem] leading-[1]">
        Great work for <br />
        great people{" "}
        <span className="bg-[#d5ff3f] rounded-full inline-block h-[20px] w-[20px]"></span>
      </h2>
      <div className="about-partion flex justify-between">
        <div className="about-left w-[40%] ">
          <p className="text-xl opacity-70 mb-[2rem] text-[20px]">
            "We put people first, understanding that a well-crafted product
            significantly impacts the lives of those who use it. By empowering
            users, we were able to solve unique problems, accelerate progress
            and unlock potential for our clients."
          </p>

          <p className="text-xl opacity-70 text-[20px] mb-[2rem]">
            "Our independent spirit drives our creative energy and approach to
            technology, allowing us to ensure quality and consistently deliver
            outstanding outcomes."
          </p>

          <button className="bg-[#d5ff3f] text-black px-10 pt-2 rounded-full capitalize text-xl ">
            about us <i class="ri-arrow-right-line"></i>
          </button>

          <div className="boxes mt-24">
            <div className="box flex justify-between items-center mb-1 border-b-2 border-white p-8">
              <h3 className="text-5xl font-bold ">100%</h3>
              <p className="text-3xl font-bold pr-11">
                In-house & <br /> independent
              </p>
            </div>
            <div className="box flex justify-between items-center mb-1 border-b-2 border-white p-8">
              <h3 className="text-5xl font-bold ">15+</h3>
              <p className="text-3xl font-bold pr-7">
                Years crafting <br /> digital <br /> experiences
              </p>
            </div>
            <div className="box flex justify-between items-center mb-1 border-b-2 border-white p-8">
              <h3 className="text-5xl font-bold ">150+</h3>
              <p className="text-3xl font-bold">
                Trusted Clients <br /> from all over the <br /> world
              </p>
            </div>
          </div>
        </div>

        <div className="about-right">
          <img
            src="https://wizmediainfo.com/wp-content/uploads/2024/01/Screenshot-2024-01-01-231208.png"
            className="rounded-[40px]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
