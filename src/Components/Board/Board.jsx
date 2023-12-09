import React from "react";
import Phases from "./Phases";
import Todo from "./Todo";
import InProgress from "./InProgress";
import Done from "./Done";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const Board = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-3 lg:gap-0 content-center relative px-4 pt-2 bg-gray-100">
      <Phases />
      <div className="sm:flex flex-wrap lg:flex-nowrap lg:flex-row gap-4 items-center lg:items-start justify-between sm:mt-4 lg:mt-0 md:mx-4">
        <Todo />
        <InProgress />
        <Done />
      </div>
      <button className="px-8 py-4 lg:py-0 h-fit mb-2 lg:mb-0 md:mx-4 lg:w-fit bg-blue-500/20 text-blue-500 rounded-md text-sm  font-bold text-center lg:translate-y-[30px] lg:-translate-x-[45px]  lg:-rotate-90 hover:bg-blue-500 hover:text-white">
        More Column <FontAwesomeIcon icon={faPlusCircle} className="ml-2" />
      </button>
    </div>
  );
};

export default Board;
