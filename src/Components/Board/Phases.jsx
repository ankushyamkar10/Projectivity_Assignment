import React from "react";
import { faEllipsis, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import User from "../../assets/User.png";
import User1 from "../../assets/User1.png";
import User2 from "../../assets/User2.png";
import Avatar from "../../assets/Avatar.png";

const Phases = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center items-center md:content-start gap-4 mt-8 md:mt-4 lg:mt-0 relative">
      <button className="bg-blue-500 text-white text-sm font-bold py-1 rounded-lg px-2 absolute  lg:right-0 md:right-3 -top-8 right-0 ">
        + Phase
      </button>

      {/* Phase 1 */}
      <div className="flex items-center justify-between gap-6 px-4 py-5 rounded-lg bg-white border border-gray-200 sm:w-[48%] lg:w-[20vw] md:w-[48%] w-full ">
        <div className="flex items-center gap-2">
          <div className="bg-blue-400 rounded-lg text-white px-[5px]">
            <FontAwesomeIcon
              icon={faPlus}
              size="xs"
              className="cursor-pointer"
            />
          </div>
          <div className="text-sm font-bold">Phase 1</div>
        </div>
        <div className="flex items-center justify-between gap-2 w-[35%]">
          <div className="flex rounded-sm text-white px-1">
            <img src={User} className="h-6 w-6" />
            <img src={User1} className="h-6 w-6 -translate-x-2 rounded-full" />
          </div>
          <div>
            {" "}
            <FontAwesomeIcon icon={faEllipsis} />
          </div>
        </div>
      </div>

      {/* Phase 2 */}
      <div className="flex items-center justify-between gap-6 md:gap-2 px-4 py-5 rounded-lg bg-white border border-gray-200 sm:w-[48%] lg:w-[20vw] md:w-[48%] w-full">
        <div className="flex items-center gap-2">
          <div className="bg-blue-400 rounded-lg text-white px-[5px]">
            <FontAwesomeIcon
              icon={faPlus}
              size="xs"
              className="cursor-pointer"
            />
          </div>
          <div className="text-sm font-bold">Phase 2</div>
        </div>
        <div className="flex items-center justify-between gap-2 w-[35%]">
          <div className="flex rounded-sm text-white px-1">
            <img src={User} className="h-6 w-6" />
            <img src={User1} className="h-6 w-6 -translate-x-2 rounded-full" />
            <img src={User2} className="h-6 w-6 -translate-x-4 rounded-full" />
          </div>
          <div>
            <FontAwesomeIcon icon={faEllipsis} />
          </div>
        </div>
      </div>

      {/* Phase 3 */}
      <div className="flex flex-col gap-4 px-4 py-5 rounded-lg bg-white border border-gray-200 sm:w-[48%] lg:w-[20vw] md:w-[48%] w-full ">
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className=" rounded-lg text-white px-[4px] border border-gray-700">
              <FontAwesomeIcon
                icon={faMinus}
                size="xs"
                className="cursor-pointer"
                color="black"
              />
            </div>
            <div className="text-sm font-bold">Production</div>
          </div>
          <div className="flex items-center justify-between gap-2 w-[35%]">
            <div className="flex rounded-sm text-white px-1">
              <img src={User} className="h-6 w-6" />
              <img
                src={User2}
                className="h-6 w-6 -translate-x-2 rounded-full"
              />
              <img
                src={Avatar}
                className="h-6 w-6 -translate-x-4 rounded-full"
              />
            </div>
            <div>
              <FontAwesomeIcon icon={faEllipsis} />
            </div>
          </div>
        </div>
        <div className="flex flex-start flex-col gap-4 w-full pl-7 font-semibold text-gray-400">
          <div className="text-sm font-bold">Set Design</div>
          <div className="text-sm font-bold">Shoot</div>
        </div>
      </div>

      {/* Phase 4 */}
      <div className="flex items-center justify-between gap-6 px-4 py-5 rounded-lg bg-white border border-gray-200 sm:w-[48%] lg:w-[20vw] md:w-[48%] w-full">
        <div className="flex items-center gap-2">
          <div className="bg-blue-400 rounded-lg text-white px-[5px]">
            <FontAwesomeIcon
              icon={faPlus}
              size="xs"
              className="cursor-pointer"
            />
          </div>
          <div className="text-sm font-bold">Phase 4</div>
        </div>
        <div className="flex items-center justify-between gap-2 w-[35%]">
          <div className="flex rounded-sm text-white px-1">
            <img src={User2} className="h-6 w-6" />
            <img src={User1} className="h-6 w-6 -translate-x-2" />
            <img src={User} className="h-6 w-6 -translate-x-4" />
          </div>
          <div>
            <FontAwesomeIcon icon={faEllipsis} />
          </div>
        </div>
      </div>

      {/* Phase 5 */}
      <div className="flex flex-col items-center gap-4 px-4 py-5 rounded-lg bg-white border border-gray-200 sm:w-[48%] lg:w-[20vw] md:w-[48%] w-full">
        <div className="flex items-center justify-between w-full gap-6">
          <div className="flex items-center gap-2">
            <div className=" rounded-lg text-white px-[4px] border border-gray-700">
              <FontAwesomeIcon
                icon={faMinus}
                size="xs"
                className="cursor-pointer"
                color="black"
              />
            </div>
            <div className="text-sm font-bold">Pre-Production</div>
          </div>
          <div className="flex items-center justify-between gap-2 w-[35%]">
            <div className="flex rounded-sm text-white px-1">
              <img src={Avatar} className="h-6 w-6" />
              <img
                src={User2}
                className="h-6 w-6 -translate-x-2 rounded-full"
              />
              <img src={User} className="h-6 w-6 -translate-x-4" />
            </div>
            <div>
              <FontAwesomeIcon icon={faEllipsis} />
            </div>
          </div>
        </div>
        <div className="flex flex-start flex-col gap-3 w-full pl-7 font-semibold text-gray-400">
          <div className="text-sm font-bold">Editing</div>
          <div className="text-sm font-bold">Composing</div>
        </div>
      </div>
    </div>
  );
};

export default Phases;
