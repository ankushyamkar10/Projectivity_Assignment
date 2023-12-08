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
          ? " transition delay-75 translate-x-0  md:transition-none flex flex-col justify-start gap-10 sm:gap-12 px-4 md:px-0 "
          : "-translate-x-48 hidden"
      } bg-white h-[100vh] w-42 lg:w-[5%] md:w-[10vw] sm:w-[12vw] fixed z-10 md:z-0 top-0 md:relative shadow-lg md:pt-8 pt-2 `}
    >
      {showSideBar && (
        <FontAwesomeIcon
          icon={faXmark}
          // size="lg"
          onClick={() => {
            setShowSideBar(!showSideBar);
          }}
          className="md:hidden bg-white rounded-full px-4 py-3 border border-gray-100 shadow-lg w-fit mx-auto cursor-pointer"
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
