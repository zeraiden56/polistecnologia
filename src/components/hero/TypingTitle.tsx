import { useEffect, useState } from "react";

interface TypingTitleProps {
  text: string;
  speed?: number;
}

export function TypingTitle({ text, speed = 35 }: TypingTitleProps) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className="relative">
      {displayed}
      <span className="typing-cursor" />
    </span>
  );
}
