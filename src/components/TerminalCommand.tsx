interface TerminalCommandProps {
  input: string;
}

export const TerminalCommand = (props: TerminalCommandProps) => {
  return (
    <div className="flex flex-row space-x-1.5">
      <p className="text-emerald-500">guest@liamys.nl~$</p>
      <p className="text-white">{props.input}</p>
    </div>
  );
};
