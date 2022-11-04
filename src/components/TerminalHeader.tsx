import { AddTab } from "./AddTab";
import { TerminalTab } from "./TerminalTab";

export const TerminalHeader = () => {
  return (
    <div className="sticky flex flex-row handle bg-gray-700 space-x-1.5 h-10 pt-2.5 px-2.5 top-0">
      <TerminalTab />
      <AddTab />
    </div>
  );
};
