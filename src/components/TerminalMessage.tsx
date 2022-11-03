import { useEffect, useState } from "react";

interface MessageProps {
  option?: number;
  message: string;
  delay?: number;
}

export const TerminalMessage = (props: MessageProps) => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShown(true);
    }, props.delay || 0);
    return () => clearTimeout(timer);
  }, [props.delay]);

  if (isShown) {
    if (props.option !== undefined) {
      return (
        <p>
          <span className="text-green-500">[{props.option}]</span>{" "}
          {props.message}
        </p>
      );
    } else {
      return <p>{props.message}</p>;
    }
  } else {
    return <div></div>;
  }
};
