import { ReactElement, useRef, useState } from "react";
import Draggable from "react-draggable";
import { Header } from "./components/Header";
import { TerminalCommand } from "./components/TerminalCommand";
import { TerminalHeader } from "./components/TerminalHeader";
import { TerminalInput } from "./components/TerminalInput";

function App() {
  const nodeRef = useRef(null);
  const [terminalCommand, setTerminalCommand] = useState<string>("");
  const [terminalCommandsList, setTerminalCommandsList] = useState<
    ReactElement[]
  >([]);

  const help = [
    "1    About me",
    "2    Projects",
    "3    Socials",
    "4    Experiences and Skills",
  ];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerminalCommand(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setTerminalCommandsList(
        terminalCommandsList.concat(<TerminalCommand input={terminalCommand} />)
      );
      setTerminalCommand("");
      switch (terminalCommand) {
        case "help":
          console.log(help);
          break;
        case "1":
          console.log("About Me");
          break;
        case "2":
          console.log("Projects");
          break;
        case "3":
          console.log("Socials");
          break;
        case "4":
          console.log("Experiences and Skills");
          break;
        case "clear":
          setTerminalCommandsList([]);
      }
    }
  };
  return (
    <div className="App font-TerminalFont bg-gradient-to-r from-sky-900 via-blue-500 to-sky-900 h-screen overflow-hidden">
      <Header />
      <div className="px-16 py-20 h-full">
        <Draggable handle=".handle" nodeRef={nodeRef}>
          <div
            className="-mt-4 h-full bg-slate-700 bg-opacity-80 overflow-x-hidden overflow-y-auto rounded-lg shadow-xl font-semibold"
            ref={nodeRef}
          >
            <TerminalHeader />
            <div className="flex flex-col text-white px-2 py-1">
              <p>
                Liam 'LiamYS' Vlaskamp (LYV) Portfolio Page. All rights
                reserved.
              </p>
              <p>
                Welcome to my portfolio page. For a list of available command,
                type 'help'.
              </p>
              {terminalCommandsList.map((row, i) => {
                return <div key={i}>{row}</div>;
              })}
              <TerminalInput
                handleChange={handleChange}
                handleKeyDown={handleKeyDown}
                terminalCommand={terminalCommand}
              />
            </div>
          </div>
        </Draggable>
      </div>
    </div>
  );
}

export default App;
