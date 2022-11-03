import { CubeIcon, XMarkIcon } from '@heroicons/react/24/outline'

function App() {
  return (
    <div className="App bg-gradient-to-r from-indigo-500 to-indigo-400 py-20 px-16 h-screen w-screen">
      <div className="overflow-hidden h-full rounded-lg shadow-xl">
        <div className="bg-black h-10 pt-2.5 px-2.5">
          <div className="flex flex-row justify-between bg-zinc-700 text-white text-xs px-2 rounded-t-md w-48 h-full md:w-64">
            <div className="flex flex-row space-x-1.5 items-center">
              <CubeIcon className="w-5"/>
              <p>My Portfolio</p>
            </div>
            <div className="flex items-center">
              <XMarkIcon className="w-5 hover:text-slate-400 transition"/>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-slate-500 bg-opacity-80 text-white h-full px-2 py-1">
          <div className="flex flex-row flex-grow space-x-1.5">
            <p><span className="text-green-500 flex-grow-0">guest@liamys.nl</span>:<span className="text-blue-800">~</span>$</p>
            <textarea className="bg-slate-50 resize-none bg-opacity-0 w-full focus:outline-none"></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
