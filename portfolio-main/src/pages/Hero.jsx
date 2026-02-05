import { useEffect, useState } from "react";
import TypingText from "../components/TypingText";

export default function Hero({ page }) {
  const [showOutput, setShowOutput] = useState(false);
  const [typingKey, setTypingKey] = useState(0);

  useEffect(() => {
    if (page === "home") {
      setShowOutput(false);
      setTypingKey((k) => k + 1);
    }
  }, [page]);

  return (
    <div className="w-full mt-6 sm:mt-10">
      <div
        className="
          glass
          p-6 sm:p-10 md:p-14 lg:p-16
          font-[JetBrains_Mono]
        "
      >
        {/* Typing command */}
        <TypingText
          text="> whoami"
          trigger={typingKey}
          onDone={() => setShowOutput(true)}
        />

        {/* Output */}
        <div
          className={`transition-all duration-700 ease-out ${
            showOutput
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <h1
            className="
              mt-6
              font-[Inter]
              font-semibold
              text-main
              leading-tight
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            "
          >
            Darvish
          </h1>

          <p
            className="
              mt-6
              text-base sm:text-lg md:text-xl
              text-dim
              font-[Inter]
              leading-relaxed
              max-w-3xl
            "
          >
            A Computer Science student passionate about building practical
            solutions to real-world problems through code and a part-time nerd...
          </p>

          <p
            className="
              mt-6
              text-base sm:text-lg
              text-dim
              font-[Inter]
              leading-relaxed
            "
          >
            Press / to access command mode
          </p>
        </div>
      </div>
    </div>
  );
}
