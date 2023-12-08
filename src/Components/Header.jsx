import {
  faArrowDownShortWide,
  faBars,
  faBarsStaggered,
  faCalendarMinus,
  faCodeFork,
  faTableCells,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Header = () => {
  return (
    <div className="px-4 md:mb-4 my-2 flex flex-col sm:flex-row gap-6 sm:gap-0 md:gap-6 items-center justify-between py-4 bg-gray-100 mt-[10vh] lg:mt-0">
      <div className=" flex items-center justify-start w-full md:w-fit gap-8 sm:gap-4">
        <div className="text-sky-900 font-bold text-2xl sm:text-xl tracking-wider">
          Tasks Manager
        </div>
        <div className="text-gray-500 font-semibold md:text-lg text-md flex items-center justify-center">
          <FontAwesomeIcon
            icon={faTableCells}
            className="mr-2 cursor-pointer"
          />
          <div>Kanban View</div>
        </div>
      </div>
      <div className="flex items-center  justify-end w-full md:w-fit gap-4 ">
        <div className="text-sm text-gray-500">Sort By (Default)</div>
        <FontAwesomeIcon
          icon={faArrowDownShortWide}
          className="cursor-pointer"
        />
        <FontAwesomeIcon icon={faBarsStaggered} className="cursor-pointer" />
        <FontAwesomeIcon icon={faCodeFork} className="cursor-pointer" />
        <FontAwesomeIcon icon={faCalendarMinus} className="cursor-pointer" />
        <FontAwesomeIcon icon={faBars} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
