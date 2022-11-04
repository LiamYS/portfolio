import { CubeIcon, XMarkIcon } from "@heroicons/react/24/outline";

export const TerminalTab = () => {
  return (
    <div className="flex flex-row justify-between bg-neutral-800 text-white text-xs px-2 rounded-t-md w-48 h-full md:w-64">
      <div className="flex flex-row space-x-1.5 items-center">
        <CubeIcon className="w-5" />
        <p>My Portfolio</p>
      </div>
      <div className="flex items-center">
        <XMarkIcon className="w-5 hover:text-slate-400 transition" />
      </div>
    </div>
  );
};
