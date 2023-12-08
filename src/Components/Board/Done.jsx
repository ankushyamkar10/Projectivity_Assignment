import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faMessage } from "@fortawesome/free-regular-svg-icons";
import {
  faPaperclip,
  faPlus,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import Ground from "../../assets/Ground.jpg";
import User1 from "../../assets/User1.png";
import User2 from "../../assets/User2.png";
import Avatar from "../../assets/Avatar.png";

const Done = () => {
  return (
    <div className="bg-gray-200 px-6 h-fit w-full md:w-[40vw] mr-4 md:mx-0 rounded-lg lg:w-[20vw]">
      <div className="text-sky-900 font-bold mb-2 md:mt-1 mt-2 text-lg md:text-md">
        Done
      </div>
      <div className="bg-white h-[1px] mb-4 lg:mb-1"></div>

      <div className="flex flex-col lg:flex-col sm:flex-row justify-center  sm:flex-wrap sm:gap-4 gap-4 lg:gap-0">
        {/* Task 1 */}
        <div className="md:my-3 lg:my-1 p-2 bg-white rounded-lg text-gray-800 shadow-lg sm:w-[48%] md:w-full ">
          <div className="my-1 flex items-center justify-between">
            <div className="w-[70%] text-sky-900 font-bold text-sm">
              Select Writer
            </div>
            <div>🥵</div>
          </div>
          <div className="w-[76%] text-[12px]">
            Take Notes. Ask Question After.
          </div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex gap-2 items-center">
              <FontAwesomeIcon icon={faCalendar} size="sm" />
              <span className="text-[10px]">SEP 30, 2019</span>
            </div>
            <div className="flex">
              <img
                src={User2}
                className="h-8 w-8 rounded-full translate-x-2 border-2 border-white"
              />
              <img
                src={Avatar}
                className="h-8 w-8 rounded-full translate-x-0 border-2 border-white"
              />
            </div>
          </div>
          <div className="h-1 flex flex-row-reverse rounded-full bg-gradient-to-r from-yellow-300 to-green-600">
            <div className="w-[0%] bg-white h-1"></div>
          </div>
        </div>

        {/* Task 3 */}
        <div className="md:my-3 lg:my-1 p-2 bg-white rounded-lg text-gray-800 shadow-lg sm:w-[48%] md:w-full">
          <div className="my-1 flex items-center justify-between">
            <div className="w-[70%] text-sky-900 font-bold text-sm">
              Delegates tasks for next week.
            </div>
            <div>😎</div>
          </div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex gap-2 items-center">
              <FontAwesomeIcon icon={faCalendar} size="sm" />
              <span className="text-[10px]">SEP 30, 2019</span>
            </div>
            <div className="flex">
              <img
                src={User1}
                className="h-8 w-8 rounded-full translate-x-2 border-2 border-white"
              />
              <img
                src={Avatar}
                className="h-8 w-8 rounded-full translate-x-0 border-2 border-white"
              />
            </div>
          </div>
          <div className="h-1 flex flex-row-reverse rounded-full bg-gradient-to-r from-yellow-300 to-green-600">
            <div className="w-[0%] bg-white h-1"></div>
          </div>
        </div>
        {/* Task 2 */}
        <div className="md:my-3 lg:my-1 p-2 bg-white rounded-lg text-gray-800 shadow-lg sm:w-[48%] md:w-full">
          <div className="">
            <img src={Ground} className="w-full md:h-24 h-36 rounded" />
          </div>
          <div className=" my-1 flex items-center justify-between">
            <div className=" text-sky-900 font-bold text-sm">
              Update travel mood-board with pics
            </div>
            <div className="ml-8">😎</div>
          </div>
          <div className=" text-[12px]">
            Link{" "}
            <a href="/" className="underline">
              here
            </a>
          </div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex gap-2 items-center">
              <FontAwesomeIcon icon={faCalendar} size="sm" />
              <span className="text-[10px]">SEP 30, 2019</span>
            </div>
            <div>
              <img src={User2} className="h-8 w-8" />
            </div>
          </div>
          <div className="h-1 flex flex-row-reverse rounded-full bg-gradient-to-r from-yellow-300 to-green-600">
            <div className="w-[0%] bg-white h-1"></div>
          </div>
        </div>
      </div>
      <button className="w-full p-2 mb-2 sm:mt-4 lg:mt-2 bg-blue-500/20 text-blue-500 rounded-md text-sm font-bold text-center hover:bg-blue-500 hover:text-white">
        Add Card <FontAwesomeIcon icon={faPlusCircle} className="ml-2" />
      </button>
    </div>
  );
};

export default Done;
