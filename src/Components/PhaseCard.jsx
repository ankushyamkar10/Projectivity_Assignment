import { faEllipsis, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const PhaseCard = ({ phase }) => {
  const { id, name, tasks, images } = phase;
  const [openAcc, setOpenAcc] = useState(id === 3 || id === 5 ? true : false);
  return (
    <div className="flex flex-col items-center gap-4 px-4 py-5 rounded-lg bg-white border border-gray-200 sm:w-[48%] lg:w-[20vw] md:w-[48%] w-full">
      <div className="flex items-center justify-between w-full gap-6">
        <div className="flex items-center gap-2">
          <div
            className={`rounded-lg text-white px-[4px] border ${
              openAcc ? " border-gray-700" : "bg-blue-400 border-blue-400"
            } cursor-pointer`}
          >
            <FontAwesomeIcon
              icon={openAcc ? faMinus : faPlus}
              size="xs"
              color={`${openAcc ? "black" : "white"}`}
              onClick={() => setOpenAcc(!openAcc)}
            />
          </div>
          <div className="text-sm font-bold">{name}</div>
        </div>
        <div className="flex items-center justify-between gap-2 w-[35%]">
          <div className="flex rounded-sm px-1 text-white ">
            {images.map((src, index) => {
              return (
                <img
                  key={index}
                  src={src}
                  className={`h-6 w-6 -translate-x-${2 * index} rounded-full`}
                />
              );
            })}
          </div>
          <div>
            <FontAwesomeIcon icon={faEllipsis} />
          </div>
        </div>
      </div>

      {openAcc && (
        <div className="flex flex-start flex-col gap-3 pl-7 w-full font-semibold text-gray-400">
          {tasks.map((task, taskIndex) => (
            <div key={taskIndex} className="text-sm font-bold">
              {task}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PhaseCard;
