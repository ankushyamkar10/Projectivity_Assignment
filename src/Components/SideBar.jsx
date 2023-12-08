import {
  faAddressCard,
  faFolderBlank,
} from "@fortawesome/free-regular-svg-icons";
import {
  faChartPie,
  faChevronDown,
  faGear,
  faListCheck,
  faPaperPlane,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SideBar = ({ showSideBar, setShowSideBar }) => {
  return (
    <div
      className={`${
        showSideBar
          ? "flex flex-col justify-start gap-10 sm:gap-12 px-4 md:px-0  transition delay-75 translate-x-0  md:transition-none"
          : "hidden -translate-x-48"
      } h-[100vh] w-42 lg:w-[5%] md:w-[10vw] sm:w-[12vw] fixed z-10 md:z-0 top-0 md:relative md:pt-8 pt-2 bg-white shadow-lg `}
    >
      {showSideBar && (
        <FontAwesomeIcon
          icon={faXmark}
          // size="lg"
          onClick={() => {
            setShowSideBar(!showSideBar);
          }}
          className="md:hidden w-fit mx-auto px-4 py-3 border border-gray-100 bg-white shadow-lg rounded-full cursor-pointer"
        />
      )}
      <FontAwesomeIcon icon={faPaperPlane} className="cursor-pointer" />
      <div className="flex flex-col justify-between gap-8">
        <FontAwesomeIcon icon={faChartPie} className="cursor-pointer" />
        <FontAwesomeIcon icon={faAddressCard} className="cursor-pointer" />
        <FontAwesomeIcon icon={faAddressCard} className="cursor-pointer" />
        <FontAwesomeIcon icon={faAddressCard} className="cursor-pointer" />
        <div className={`flex flex-col justify-between gap-8 pl-4`}>
          <FontAwesomeIcon icon={faAddressCard} className="cursor-pointer" />
          <FontAwesomeIcon icon={faPaperPlane} className="cursor-pointer" />
          <FontAwesomeIcon icon={faFolderBlank} className="cursor-pointer" />
          <FontAwesomeIcon icon={faFolderBlank} className="cursor-pointer" />
        </div>
        <FontAwesomeIcon icon={faListCheck} className="cursor-pointer" />
      </div>

      <div className="absolute bottom-4 md:right-6 right-4">
        <FontAwesomeIcon icon={faGear} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default SideBar;
