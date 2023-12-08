import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faMessage } from "@fortawesome/free-regular-svg-icons";
import {
  faPaperclip,
  faPlus,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import Mountain from "../../assets/Mountain.jpg";
import User from "../../assets/User.png";

const Todo = () => {
  return (
    <div className="h-fit md:max-w-[40vw] sm:w-[48%] lg:w-[20vw] px-6 rounded-lg bg-gray-200 ">
      <div className="mb-2 md:mt-1 mt-2 text-lg md:text-md text-sky-900 font-bold ">
        To Do
      </div>
      <div className=" h-[1px] bg-white"></div>
      <div className="md:my-3 my-5 p-2 bg-white rounded-lg text-gray-800 shadow-lg">
        <div className="">
          <img src={Mountain} className="w-full md:h-24 h-36 rounded" />
        </div>
        <div className="flex items-center justify-between my-1">
          <div className="text-sky-900 font-bold">Storyboard</div>
          <div>😎</div>
        </div>
        <div className=" text-[12px] mr-14">
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
          <span className="text-sm">6</span>
        </div>
        <div className="flex items-center justify-between my-2">
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faCalendar} size="sm" />
            <span className="text-[10px]">SEP 30, 2019</span>
          </div>
          <div>
            <img src={User} className="h-8 w-8 md:h-6 md:w-6 lg:h-8 lg:w-8" />
          </div>
        </div>
        <div className="h-1 flex flex-row-reverse rounded-full bg-gradient-to-r from-yellow-300 to-green-600">
          <div className="w-[70%] bg-white h-1"></div>
        </div>
      </div>
      <button className="w-full p-2 mb-2 text-sm font-bold text-center bg-blue-500/20 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white">
        Add Card <FontAwesomeIcon icon={faPlusCircle} className="ml-2" />
      </button>
    </div>
  );
};

export default Todo;
