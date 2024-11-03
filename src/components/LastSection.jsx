import React from "react";
import "remixicon/fonts/remixicon.css";

const LastSection = () => {
  return (
    <div className="last-section px-14 mt-44 border-b-2 border-white pb-24">
      <h1 className="text-7xl font-bold mb-5">
        Let's make{" "}
        <span>
          <i class="ri-arrow-right-line"></i>
        </span>{" "}
        <br />
        something beautiful
      </h1>

      <section className="speak-to-us flex justify-between items-center mt-28 border-b-2 border-black pb-16">
        <div className="speak-right">
          <h3 className="text-xl font-bold mb-1">speak to us</h3>
          <p className="mb-5">mausamban07@gmail.com</p>
        </div>

        <div className="contact-info">
          <h4 className="text-xl font-bold mb-1">Join our news lettter</h4>
          <p className="mb-5">
            Sign up for our newsletter to receive the <br /> latest news and
            updates.
          </p>

          <input
            type="text"
            placeholder="E-mail Address"
            className="p-3 border-b-2 border-black bg-transparent text-black placeholder:text-black "
          />
          <button className="bg-transparent border-2 border-black px-4 py-[10px] ml-5 rounded-3xl hover:bg-black hover:text-[#d5ff3f] transition-all duration-300 font-normal outline-none">
            Sign Me Up
          </button>
        </div>
      </section>
      <section className="copyright mt-3">
        <p className="text-sm">&copy; 2024 Wizmedia. All Rights Reserved.</p>
      </section>
    </div>
  );
};

export default LastSection;
