import React from "react";
import wallpaper from "../assets/wallpaper.jpg";
import "../index.css";

const Hero = () => {
  return (
    <div className="relative w-full bg-[#eaeded] mx-auto">
      <div className="mx-auto  w-full lg:w-[90vw] xl:w-[70vw]">
        <div className="absolute  grad w-full lg:w-[90vw] flex   h-[15rem] sm:h-[21rem] md:h-[25rem] z-10 xl:w-[70vw]"></div>
        <div className=" w-full  lg:w-[90vw] flex relative  h-[15rem]  sm:h-[21rem] md:h-[25rem] xl:w-[70vw]">
          <img
            src={wallpaper}
            alt=""
            className="absolute object-cover w-full  lg:w-[90vw] z-0 h-[15rem] sm:h-[21rem] md:h-[25rem] xl:w-[70vw]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
