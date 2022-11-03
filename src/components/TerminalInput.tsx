import React, { useState } from "react";

export const TerminalInput = () => {
  const [terminalCommand, setTerminalCommand] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerminalCommand(event.target.value);
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (terminalCommand === "1") {
        console.log("Personal Information");
      } else if (terminalCommand === "2") {
        console.log("Projects");
      } else if (terminalCommand === "3") {
        console.log("Experience");
      } else {
        console.log("Invalid command");
      }
      setTerminalCommand("");
    }
  }
  return (
    <div className="flex flex-row space-x-1.5">
        <p><span className="text-green-500">guest@liamys.nl</span>:<span className="text-blue-800">~</span>$</p>
        <input type="text" onKeyDown={handleKeyDown} value={terminalCommand} onChange={handleChange} className="bg-slate-50 resize-none bg-opacity-0 w-full focus:outline-none"></input>
    </div>
  )
}
