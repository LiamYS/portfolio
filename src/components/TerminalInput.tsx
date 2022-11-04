import { ChangeEvent, KeyboardEvent } from "react";

interface TerminalInputProps {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
  terminalCommand: string;
}

export const TerminalInput = (props: TerminalInputProps) => {
  return (
    <div className="flex flex-row space-x-1.5">
      <p className="text-emerald-500">guest@liamys.nl~$</p>
      <input
        type="text"
        onKeyDown={props.handleKeyDown}
        value={props.terminalCommand}
        onChange={props.handleChange}
        className="bg-slate-50 resize-none bg-opacity-0 w-full focus:outline-none"
      ></input>
    </div>
  );
};
