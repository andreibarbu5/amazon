import React from "react";
import logo from "../assets/logo.png";
import usa from "../assets/usa.png";
import { BsCart2 } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { GoSettings } from "react-icons/go";
import { BiWorld } from "react-icons/bi";
import { TiArrowRepeat } from "react-icons/ti";

const Navbar = () => {
  return (
    <div className="bg-[#131921] p-4 flex  items-center justify-between md:px-8 ">
      {/* Left */}
      <div className="flex items-center shrink-0">
        <div className="h-10 flex">
          <img src={logo} className="object-cover" />
        </div>
        <div className="hidden text-white/70  pl-6 sm:flex items-center hover:scale-110">
          <BiWorld className="text-[20px] mr-1" />
          <p className="">Location</p>
        </div>
      </div>

      {/* Middle */}
      <div className="flex items-center w-full">
        {/* INPUT */}
        <div className="hidden sm:flex relative w-full mx-4">
          <input
            type="search"
            placeholder="Search..."
            className=" py-2 rounded-full pl-12 placeholder:text-[#131921] outline-0 w-full"
          />
          <button className="absolute bg-orange-400 h-full w-12 right-0 flex items-center justify-center rounded-r-full text-white">
            <FiSearch className="text-[25px] mr-1" />
          </button>
          <button className="absolute text-[#131921]  h-full w-12 left-0 flex items-center justify-center rounded-r-full  ">
            <GoSettings />
          </button>
        </div>
        {/* FLAG */}
        <div className="hidden  text-white md:flex items-center font-bold cursor-pointer mr-4 shrink-0">
          <img src={usa} alt="" className="w-10 mr-1" />
          <p>US</p>
          <TiArrowRepeat className="text-[15px] mt-3" />
        </div>
      </div>

      {/* Right */}
      <div className="relative flex items-center justify-center text-white text-[28px]">
        <BsCart2 />
        <div className="absolute text-[16px] h-full -top-3.5 right-2.1 text-orange-400">
          <p>0</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
