import { useRef, useState } from "react";
import Draggable from "react-draggable";
import { AddTab } from "./components/AddTab";
import { ContentBlock } from "./components/ContentBlock";
import { Experience } from "./components/Experience";
import { Header } from "./components/Header";
import { PersonalInformation } from "./components/PersonalInformation";
import { Projects } from "./components/Projects";
import { TerminalInput } from "./components/TerminalInput";
import { TerminalMessage } from "./components/TerminalMessage";
import { TerminalTab } from "./components/TerminalTab";

function App() {
  const nodeRef = useRef(null);
  const [terminalCommand, setTerminalCommand] = useState("");
  const [showPersonalInformation, setShowPersonalInformation] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showExperience, setShowExperience] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerminalCommand(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (terminalCommand === "1") {
        setShowPersonalInformation(true);
        setShowProjects(false);
        setShowExperience(false);
      } else if (terminalCommand === "2") {
        setShowPersonalInformation(false);
        setShowProjects(true);
        setShowExperience(false);
      } else if (terminalCommand === "3") {
        setShowPersonalInformation(false);
        setShowProjects(false);
        setShowExperience(true);
      } else {
      }
      setTerminalCommand("");
    }
  };
  return (
    <div className="App bg-gradient-to-r from-indigo-500 to-indigo-400 h-screen w-screen overflow-hidden">
      <Header />
      <div className="px-16 py-20 h-full w-full">
        <Draggable handle=".handle" nodeRef={nodeRef}>
          <div
            className="-mt-4 overflow-hidden h-full rounded-lg shadow-xl"
            ref={nodeRef}
          >
            <div className="flex flex-row handle bg-black space-x-1.5 h-10 pt-2.5 px-2.5">
              <TerminalTab />
              <AddTab />
            </div>
            <div className="flex flex-col bg-slate-700 bg-opacity-80 text-white h-full px-2 py-1">
              <TerminalMessage
                delay={250}
                message="Initializing portfolio..."
              />
              <TerminalMessage
                delay={2000}
                message="Welcome to my portfolio, type one of the numbers listed below for more information:"
              />
              <TerminalMessage
                option={1}
                delay={2100}
                message="Personal Information"
              />
              <TerminalMessage option={2} delay={2200} message="Projects" />
              <TerminalMessage option={3} delay={2300} message="Experience" />
              <ContentBlock
                isShown={showPersonalInformation}
                content={<PersonalInformation />}
              />
              <ContentBlock isShown={showProjects} content={<Projects />} />
              <ContentBlock isShown={showExperience} content={<Experience />} />
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
