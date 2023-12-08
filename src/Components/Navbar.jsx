import {
  faBars,
  faChevronDown,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import User from "../assets/User.png";
import {
  faBell,
  faCommentDots,
  faEnvelope,
} from "@fortawesome/free-regular-svg-icons";

const Navbar = ({ setShowSideBar, showSideBar }) => {
  return (
    <div className="h-[9vh] md:h-[5vh] w-screen lg:w-full md:w-[90vw] flex md:justify-end justify-between items-center  md:gap-8 gap-4 fixed lg:relative z-[9] md:py-8 py-6 bg-white shadow-sm">
      <div
        className="md:hidden ml-4 px-3 py-2 border border-gray-100 shadow-lg rounded-full"
        onClick={() => {
          setShowSideBar(!showSideBar);
        }}
      >
        <FontAwesomeIcon icon={faBars} className="text-lg cursor-pointer" />
      </div>
      <div className="flex items-center justify-end gap-4">
        <div className=" px-3 py-2 border border-gray-100 shadow-lg rounded-full ">
          <FontAwesomeIcon icon={faSearch} className="text-lg cursor-pointer" />
        </div>
        <div className=" px-3 py-2 border border-gray-100 shadow-lg  rounded-full">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-lg cursor-pointer"
          />
        </div>
        <div className="px-3 py-2 border border-gray-100 shadow-lg rounded-full">
          <FontAwesomeIcon
            icon={faCommentDots}
            className="text-lg cursor-pointer"
          />
        </div>
        <div className="px-3 py-2 border border-gray-100 shadow-lg rounded-full">
          <FontAwesomeIcon icon={faBell} className="text-lg cursor-pointer" />
        </div>
        <div className="flex items-center justify-center md:gap-4 gap-2  mr-3 px-3 py-2 rounded-full border border-gray-100 shadow-lg">
          <img src={User} className="md:h-8 md:w-8 h-6 w-6 rounded-full" />
          <div className="sm:flex sm:flex-col hidden md:mr-6 mr-2">
            <div className="md:text-sm text-xs font-semibold">John Doe</div>
            <div className="md:text-xs text-[10px]">Designer</div>
          </div>

          <FontAwesomeIcon icon={faChevronDown} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
