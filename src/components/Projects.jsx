import React from "react";
import Connection from "./Connection";
import "remixicon/fonts/remixicon.css";

const Projects = () => {
  return (
    <div className="projects min-h-screen w-full bg-[#171717]">
      <Connection
        title={`projects`}
        description={`
        Everyone of us loves something different. So, explore the world
          through the lens of our visual capabilities and find what you love. 
        `}
      />

      <section className="project-videos">
        <section className="main-video min-h-screen w-full bg-[#171717] px-14 py-8 ">
          <video
            src="https://wizmediainfo.com/wp-content/uploads/2023/12/humaan_showreel_2023-1080p.mp4#t=5,49"
            autoPlay
            muted
            loop
            className="rounded-[50px] w-full"
          ></video>
        </section>

        <section className="video-grid flex justify-between px-14 pt-4 pb-8 gap-8">
          <div className="video1">
            <video
              src="https://wizmediainfo.com/wp-content/uploads/2023/12/Showreel-2022-—-Repin-Agency.mp4#t=4,40"
              autoPlay
              muted
              loop
              className="rounded-[50px] w-[60vw]"
            ></video>
          </div>
          <div className="video2">
            <video
              src="https://wizmediainfo.com/wp-content/uploads/2023/12/UI_UX-Design-Showreel-2020-_-Shakib-_-4K.mp4#t=3,30"
              autoPlay
              muted
              loop
              className="rounded-[50px] w-[60vw]"
            ></video>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Projects;
