import SideBar from "./Components/SideBar";
import Kanban from "./Components/Kanban";
import { useEffect, useRef, useState } from "react";
import PhaseModal from "./Components/Helpers/PhaseModal";

function App() {
  const [showSideBar, setShowSideBar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const ModalRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowSideBar(true);
      } else {
        setShowSideBar(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative flex flex-col-reverse md:flex-row h-[100vh]">
      <SideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      <Kanban
        setShowSideBar={setShowSideBar}
        showSideBar={showSideBar}
        setIsOpen={setIsOpen}
      />
      {isOpen && (
        <div className="absolute h-screen w-screen pt-[40vh] bg-black/30">
          <PhaseModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            ModalRef={ModalRef}
          />
        </div>
      )}
    </div>
  );
}

export default App;
