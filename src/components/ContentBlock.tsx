import { ReactNode } from "react";

interface ContentBlockProps {
  content: ReactNode;
  isShown: boolean;
}

export const ContentBlock = (props: ContentBlockProps) => {
  if (props.isShown) {
    return <div>{props.content}</div>;
  } else {
    return <div></div>;
  }
};
