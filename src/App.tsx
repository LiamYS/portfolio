import { ReactElement, useRef, useState } from "react";
import Draggable from "react-draggable";
import { Header } from "./components/Header";
import { TerminalCommand } from "./components/TerminalCommand";
import { TerminalHeader } from "./components/TerminalHeader";
import { TerminalInput } from "./components/TerminalInput";
import { TerminalMessage } from "./components/TerminalMessage";

function App() {
  const help = [
    ` `,
    `ABOUT              Personal information`,
    `PROJECTS           A display of some of my projects`,
    `SOCIALS            Where to find me on the internet`,
    `EXPERIENCE         My experiences and skills`,
    `CV                 Download my Curriculum Vitae`,
    ` `,
  ];
  const about = [
    ` `,
    `Hey, my name is Liam Yves.`,
    `I'm second year Computer Science and Engineering student at the University of Eindhoven.`,
    `Blabloeblie`,
    ` `,
  ];
  const wip = [` `, `This command is still a work in progress.`, ` `];

  const nodeRef = useRef(null);
  const [terminalCommand, setTerminalCommand] = useState<string>("");
  const [terminalCommandsList, setTerminalCommandsList] = useState<
    ReactElement[]
  >([
    <TerminalMessage
      message={[
        "Liam 'LiamYS' Vlaskamp (LYV) Portfolio Page. All rights reserved.",
      ]}
    />,
    <TerminalMessage
      message={[
        "Welcome to my portfolio page. For a list of available command, type 'help'.",
      ]}
    />,
  ]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerminalCommand(event.target.value);
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setTerminalCommandsList((oldArray) => [
        ...oldArray,
        <TerminalCommand input={terminalCommand} />,
      ]);
      if (terminalCommand.toLowerCase() === "help") {
        setTerminalCommandsList((oldArray) => [
          ...oldArray,
          <TerminalMessage stylingClasses="pl-4" message={help} />,
        ]);
      } else if (
        terminalCommand.toLowerCase() === "clear" ||
        terminalCommand.toLowerCase() === "c"
      ) {
        setTerminalCommandsList([]);
      } else if (terminalCommand.toLowerCase() === "about") {
        setTerminalCommandsList((oldArray) => [
          ...oldArray,
          <TerminalMessage stylingClasses="pl-4" message={about} />,
        ]);
      } else if (terminalCommand.toLowerCase() === "projects") {
        setTerminalCommandsList((oldArray) => [
          ...oldArray,
          <TerminalMessage stylingClasses="pl-4" message={wip} />,
        ]);
      } else if (terminalCommand.toLowerCase() === "socials") {
        setTerminalCommandsList((oldArray) => [
          ...oldArray,
          <TerminalMessage stylingClasses="pl-4" message={wip} />,
        ]);
      } else if (terminalCommand.toLowerCase() === "experience") {
        setTerminalCommandsList((oldArray) => [
          ...oldArray,
          <TerminalMessage stylingClasses="pl-4" message={wip} />,
        ]);
      } else if (terminalCommand.toLowerCase() === "cv") {
        setTerminalCommandsList((oldArray) => [
          ...oldArray,
          <TerminalMessage stylingClasses="pl-4" message={wip} />,
        ]);
      } else {
        setTerminalCommandsList((oldArray) => [
          ...oldArray,
          <TerminalMessage
            stylingClasses="text-red-500"
            message={[
              "Command not recognized. Type 'help' for a list of available commands.",
            ]}
          />,
        ]);
      }
      setTerminalCommand("");
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
