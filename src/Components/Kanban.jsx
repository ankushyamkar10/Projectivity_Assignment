import React from "react";
import Board from "./Board/Board";
import Header from "./Header";
import Navbar from "./Navbar";

const Kanban = ({ setShowSideBar, showSideBar }) => {
  return (
    <div className="flex flex-col -100 lg:w-[95vw] md:w-[90vw] w-screen h-[100vh] bg-gray overflow-y-scroll ">
      <Navbar setShowSideBar={setShowSideBar} showSideBar={showSideBar} />
      <Header />
      <Board />
    </div>
  );
};

export default Kanban;
