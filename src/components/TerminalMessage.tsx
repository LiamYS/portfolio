interface TerminalMessageProps {
  message: string[];
  stylingClasses?: string;
}

export const TerminalMessage = (props: TerminalMessageProps) => {
  return (
    <>
      {props.message.map((row, i) => (
        <p className={props.stylingClasses + " whitespace-pre-wrap"} key={i}>
          {row}
        </p>
      ))}
    </>
  );
};
