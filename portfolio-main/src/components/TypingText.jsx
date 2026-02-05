import { useEffect, useState } from "react";

export default function TypingText({
  text,
  speed = 50,
  trigger,
  onDone,
}) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    setDisplay("");
    let i = 0;

    const interval = setInterval(() => {
      setDisplay(text.slice(0, i + 1));
      i++;

      if (i === text.length) {
        clearInterval(interval);
        setTimeout(() => {
          onDone && onDone();
        }, 300);
      }
    }, speed);

    return () => clearInterval(interval);

    // ❗ ONLY trigger here — NOTHING else
  }, [trigger]);

  return (
    <span
      className="
        block
        mb-8
        text-main
        font-[JetBrains_Mono]
        font-bold
        text-2xl md:text-3xl
      "
    >
      <span className="cursor">{display}</span>
    </span>
  );
}
