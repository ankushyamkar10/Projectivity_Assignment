import SideBar from "./Components/SideBar";
import Kanban from "./Components/Kanban";
import { useEffect, useState } from "react";

function App() {
  const [showSideBar, setShowSideBar] = useState(false);

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
      <Kanban setShowSideBar={setShowSideBar} showSideBar={showSideBar} />
    </div>
  );
}

export default App;
