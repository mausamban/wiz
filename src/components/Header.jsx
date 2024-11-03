import React from "react";
import "remixicon/fonts/remixicon.css";

const header = () => {
  return (
    <>
      <nav className="flex justify-between items-center h-16 px-20 py-14">
        <div className="nav-img">
          <img
            src="https://wizmediainfo.com/wp-content/uploads/2023/12/logoblack-removebg-preview.png"
            alt="Nav logo"
            className="h-12"
          />
        </div>

        <div className="flex items-center justify-center gap-10">
          {["home", "about us", "services", "project", "let's talk"].map(
            (item, index) => {
              return (
                <ul key={index} className="nav-links capitalize">
                  <li>
                    <a
                      href="#"
                      className="font-medium text-lg hover:border-2 px-2 hover:border-white hover:ease-linear hover:duration-100"
                    >
                      {item}
                    </a>
                  </li>
                </ul>
              );
            }
          )}
        </div>
      </nav>

      <section className="hero px-20 mt-8">
        <div className="circles flex justify-start gap-5">
          <div className="circle bg-black h-[15px] w-[15px] rounded-full"></div>
          <div className="circle bg-black h-[15px] w-[15px] rounded-full"></div>
        </div>

        <div className="hero-content flex justify-center gap-[10vw]">
          <div className="hero-left ml-[-15px] w-[50vw]">
            <h1 className="text-[25vh] font-bold leading-[180px] mt-2 uppercase tracking-wide ">
              DIGITIZE <br /> IDEAS
            </h1>
          </div>

          <div className="hero-right w-[50vw] mt-8  relative">
            <div className="stars w-full flex justify-center absolute bottom-20 p-4">
              <img
                src="https://wizmediainfo.com/wp-content/uploads/2023/12/overlaay2.png"
                className="z-[-1]"
              />
            </div>
            <video
              src="https://wizmediainfo.com/wp-content/uploads/2023/12/Recording-1.mp4"
              autoPlay
              muted
              loop
              className=" h-[100px] w-96 border-2 border-white rounded-full object-cover hover:h-[250px] hover:ease-linear hover:w-full ml-10 transition-all duration-300 z-20"
            ></video>

            <p className="text-xl font-medium absolute bottom-1 text-center ">
              The art of visual communication, one good design at a time, design
              like you mean it !
            </p>
          </div>
        </div>
      </section>

      <section className="header-bottom px-20 py-10 flex items-center justify-between">
        <div className="header-bottom-content flex justify-start items-center gap-10">
          <div className="project border-2 border-black rounded-full px-4 py-2 flex items-center h-12 hover:text-[#d5ff3f] hover:ease-linear hover:duration-100 hover:bg-black hover:scale-[1]">
            <p className="font-[400]">
              <i class="ri-vip-diamond-line mr-4 "></i>
              let's start project
            </p>
          </div>

          <div className="agency border-2 border-black rounded-full px-4 py-2 text-[#d5ff3f] bg-black flex items-center h-12 hover:ease-linear hover:duration-100 hover:bg-transparent hover:scale-[1] hover:text-black">
            <p className="font-[400]">
              <i class="ri-global-line mr-4"></i>
              world class agency
            </p>
          </div>
        </div>

        <div className="liners flex justify-center items-center gap-5">
          <div className="liner">
            <i class="ri-focus-2-line text-xl"></i>
          </div>
          <div className="liner w-[40vw] h-[1px] bg-black"></div>
          <i class="ri-vip-diamond-line text-xl"></i>
          <div className="liner"></div>
        </div>
      </section>
    </>
  );
};

export default header;
