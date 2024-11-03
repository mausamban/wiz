import React from "react";
import Boxes from "./Boxes";
import Connection from "./Connection";
import "remixicon/fonts/remixicon.css";

const Services = () => {
  return (
    <>
      <div className="services min-h-screen w-full bg-[#171717]">
        <div className="services-content w-full bg-[#171717] ">
          <Connection
            description={`Everyone of us loves something different. So, explore the world
          through the lens of our visual capabilities and find what you love.`}
            title={` our services`}
          />
        </div>
        <section className="boxes flex flex-col items-center justify-center gap-2 py-20">
          <Boxes number="01" title="ui/ux design" />
          <Boxes number="02" title="web design" />
          <Boxes number="03" title="development" />
        </section>
      </div>
    </>
  );
};

export default Services;
