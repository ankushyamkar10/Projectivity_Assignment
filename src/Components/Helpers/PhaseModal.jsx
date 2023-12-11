import React, { useEffect, useState } from "react";
import { phases } from "../../constants";
import User from "../../assets/User.png";
import User1 from "../../assets/User1.png";
import Avatar from "../../assets/Avatar.png";

const PhaseModal = ({ isOpen, setIsOpen, ModalRef }) => {
  const [name, setData] = useState("");

  // useEffect(() => {
  //   const handleOutsideClick = (event) => {
  //     if (ModalRef.current && !ModalRef.current.contains(event.target)) {
  //       setIsOpen(false);
  //     }
  //   };

  //   if (isOpen) {
  //     document.addEventListener("click", handleOutsideClick);
  //   }

  //   return () => {
  //     document.removeEventListener("click", handleOutsideClick);
  //   };
  // }, [isOpen]);

  const handleChange = (e) => {
    setData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const lastId = phases[phases.length - 1].id;
    const newPhase = {
      id: lastId + 1,
      name: name,
      tasks: ["Editing", "Shoot"],
      images: [User1, Avatar, User],
    };

    phases.push(newPhase);

    setIsOpen(false);
  };

  return (
    <div
      className="border  border-gray-500 bg-white w-fit mx-auto sm:p-8 sm:pb-4 rounded-lg "
      ref={ModalRef}
    >
      <form className="flex flex-col items-center mx-2 gap-4">
        <h3 className="mt-4 text-center text-2xl font-semibold">Add a phase</h3>
        <div>
          <label className="text-lg">Task Name : </label>
          <input
            type="text"
            name="name"
            value={name}
            required
            onChange={handleChange}
            className="px-2 py-2 border-b border-gray-600 outline-none"
          />
        </div>
        <div className="flex items-center justify-between w-full my-4">
          <button
            className="bg-red-500 px-4 py-2 text-white rounded-lg "
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </button>
          <button
            className="bg-blue-400 px-4 py-2 text-white rounded-lg"
            onClick={handleSubmit}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default PhaseModal;
