import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faMessage } from "@fortawesome/free-regular-svg-icons";
import {
  faPaperclip,
  faPlus,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import Avatar from "../../assets/Avatar.png";
import User1 from "../../assets/User1.png";
import Shop from "../../assets/Shop.jpg";

const InProgress = () => {
  return (
    <div className="bg-gray-200 px-6 h-fit md:max-w-[40vw] rounded-lg sm:w-[48%] lg:w-[20vw]">
      <div className="text-sky-900 font-bold mb-2 md:mt-1 mt-2 text-lg md:text-md">
        InProgress
      </div>
      <div className="bg-white h-[1px]"></div>
      <div className="md:my-3 my-5 p-2 bg-white rounded-lg text-gray-800 shadow-lg">
        <div className="">
          <img src={Shop} className="w-full md:h-24 h-36 rounded" />
        </div>
        <div className="my-1 flex items-center justify-between">
          <div className="text-sky-900 font-bold">Screenplay</div>
        </div>
        <div className="text-[12px] mr-14">
          Add a short description or{" "}
          <a href="/" className="underline">
            link
          </a>{" "}
          a web page
        </div>
        <div className="flex gap-2 items-center my-2">
          <FontAwesomeIcon icon={faMessage} size="sm" />{" "}
          <span className="text-sm">8</span>
          <FontAwesomeIcon icon={faPaperclip} size="sm" />{" "}
          <span className="text-sm">1</span>
        </div>
        <div className="flex items-center justify-between my-2">
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faCalendar} size="sm" />
            <span className="text-[10px]">SEP 30, 2019 - JAN 20,2020</span>
          </div>
          <div className="flex">
            <img
              src={Avatar}
              className="h-8 w-8 rounded-full translate-x-2 border-2 border-white"
            />
            <img
              src={User1}
              className="h-8 w-8 rounded-full translate-x-0 border-2 border-white"
            />
          </div>
        </div>
        <div className="h-1 flex flex-row-reverse rounded-full bg-gradient-to-r from-yellow-300 to-green-600">
          <div className="w-[0%] bg-white h-1"></div>
        </div>
      </div>
      <button className="w-full p-2 mb-2 bg-blue-500/20 text-blue-500 rounded-md text-sm font-bold text-center hover:bg-blue-500 hover:text-white">
        Add Card <FontAwesomeIcon icon={faPlusCircle} className="ml-2" />
      </button>
    </div>
  );
};

export default InProgress;
