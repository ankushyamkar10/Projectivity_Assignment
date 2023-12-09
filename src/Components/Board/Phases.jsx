import React from "react";
import { faEllipsis, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import User from "../../assets/User.png";
import User1 from "../../assets/User1.png";
import User2 from "../../assets/User2.png";
import Avatar from "../../assets/Avatar.png";
import { phases } from "../../constants";
import PhaseCard from "../PhaseCard";

const Phases = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center items-center md:content-start gap-4 mt-8 md:mt-4 lg:mt-0 relative">
      <button className="absolute lg:right-0 md:right-3 -top-8 right-0 py-1 px-2 bg-blue-500 text-white text-sm font-bold rounded-lg hover:bg-blue-600">
        + Phase
      </button>

      {phases.map((phase, index) => {
        return <PhaseCard phase={phase} key={phase.id} />;
      })}
    </div>
  );
};

export default Phases;
