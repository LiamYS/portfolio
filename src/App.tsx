import React from "react";
import Draggable from "react-draggable";
import { AddTab } from "./components/AddTab";
import { TerminalInput } from "./components/TerminalInput";
import { TerminalTab } from "./components/TerminalTab";

function App() {
  const nodeRef = React.useRef(null);
  return (
    <div className="App bg-gradient-to-r from-indigo-500 to-indigo-400 py-20 px-16 h-screen w-screen overflow-hidden">
      <Draggable handle=".handle" nodeRef={nodeRef}>
        <div className="overflow-hidden h-full rounded-lg shadow-xl" ref={nodeRef}>
          <div className="flex flex-row handle bg-black space-x-1.5 h-10 pt-2.5 px-2.5">
            <TerminalTab />
            <AddTab />
          </div>
          <div className="flex flex-col bg-slate-500 bg-opacity-80 text-white h-full px-2 py-1">
            <p>Initializing portfolio...</p>
            <p>Welcome to my portfolio, type one of the numbers listed below for more information:</p>
            <p><span className="text-green-500">[1]</span> Personal Information</p>
            <p><span className="text-green-500">[2]</span> Projects</p>
            <p><span className="text-green-500">[3]</span> Experience</p>
            <TerminalInput />
          </div>
        </div>
      </Draggable>
    </div>
  );
}

export default App;
