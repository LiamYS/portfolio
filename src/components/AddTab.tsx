import { ChevronDownIcon, PlusIcon } from '@heroicons/react/24/outline'

export const AddTab = () => {
  return (
    <div className="flex flex-row space-x-1 text-white h-full items-center">
        <PlusIcon className="w-6 p-1 rounded-l-md hover:bg-slate-300 hover:bg-opacity-20 transition"/>
        <ChevronDownIcon className="w-6 p-1 rounded-r-md hover:bg-slate-300 hover:bg-opacity-20 transition"/>
    </div>
  )
}
