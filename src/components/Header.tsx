import { useEffect, useState } from "react";

export const Header = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [date, setDate] = useState(new Date().toLocaleDateString());

  useEffect(() => {
    let secTimer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      setDate(new Date().toLocaleDateString());
    }, 1000);
    return () => {
      clearInterval(secTimer);
    };
  }, []);
  return (
    <div className="flex bg-gray-700 text-xs h-6 justify-between items-center px-8 text-white select-none hover:cursor-default">
      <span>Desktop</span>
      <span>{time}</span>
      <span>{date}</span>
    </div>
  );
};
