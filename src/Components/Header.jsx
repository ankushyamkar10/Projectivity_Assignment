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
    <div className="flex flex-col sm:flex-row gap-6 sm:gap-0 md:gap-6 items-center justify-between px-4 md:pb-10 py-6 mt-[10vh] lg:mt-0 bg-gray-100">
      <div className=" flex items-center justify-start gap-8 sm:gap-4 w-full md:w-fit ">
        <div className="text-sky-900 font-bold text-2xl sm:text-xl tracking-wider">
          Tasks Manager
        </div>
        <div className="flex items-center justify-center text-gray-500 font-semibold md:text-lg text-md ">
          <FontAwesomeIcon
            icon={faTableCells}
            className="mr-2 cursor-pointer"
          />
          <div>Kanban View</div>
        </div>
      </div>
      <div className="flex items-center justify-end gap-4 w-full md:w-fit ">
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
