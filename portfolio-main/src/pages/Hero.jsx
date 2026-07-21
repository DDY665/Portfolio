import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";
import TypingText from "../components/TypingText";

export default function Hero({ page, setPage, openTerminal }) {
  return (
    <div key={page} className="w-full mt-6 sm:mt-10 flex justify-center">
      <HeroContent
        setPage={setPage}
        openTerminal={openTerminal}
      />
    </div>
  );
}

function HeroContent({ openTerminal, setPage }) {
  const [showOutput, setShowOutput] = useState(false);

  return (
    <div
      className="
        w-fit
        max-w-3xl
        font-[JetBrains_Mono]
        flex flex-col items-center
      "
    >
      {/* Left-aligned group: whoami + name */}
      <div className="self-start text-left w-full">
        <TypingText
          text="> whoami"
          onDone={() => setShowOutput(true)}
        />

        <h1
          className={`
            mt-6
            font-[JetBrains_Mono]
            font-bold
            text-main
            leading-tight
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl
            tracking-wide
            whitespace-nowrap
            transition-all duration-700 ease-out
            ${showOutput ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          DARVISH YADAV
        </h1>
      </div>

      {/* Centered group: everything else */}
      <div
        className={`transition-all duration-700 ease-out flex flex-col items-center text-center ${
          showOutput
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        }`}
      >
        <p
          className="
            mt-4
            text-sm sm:text-base md:text-lg
            text-soft
            font-[JetBrains_Mono]
            tracking-widest
            uppercase
          "
        >
          Backend Dev · AI · RAG 
        </p>

        {/* Social icons */}
        <div className="flex items-center gap-4 mt-8">
          <a
            href="mailto:darvishyadav665@gmail.com"
            className="w-11 h-11 flex items-center justify-center rounded-full border border-current/20 bg-current/5 text-main hover:bg-current/10 transition-all duration-300"
            aria-label="Email"
          >
            <FaEnvelope size={16} />
          </a>

          <a
            href="https://www.linkedin.com/in/darvish-yadav-dega-a37134246/"
            target="_blank"
            rel="noreferrer"
            className="w-11 h-11 flex items-center justify-center rounded-full border border-current/20 bg-current/5 text-main hover:bg-current/10 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={16} />
          </a>

          <a
            href="https://github.com/DDY665"
            target="_blank"
            rel="noreferrer"
            className="w-11 h-11 flex items-center justify-center rounded-full border border-current/20 bg-current/5 text-main hover:bg-current/10 transition-all duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={16} />
          </a>
        </div>

        {/* Buttons: desktop */}
        <div className="hidden sm:flex items-center gap-4 mt-8">
          <button
            onClick={() => setPage("contact")}
            className="px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300"
            style={{
              backgroundColor: "var(--text-strong)",
              color: "var(--bg-main)",
            }}
          >
            Contact Me
          </button>

          <button
            onClick={() => setPage("projects")}
            className="px-6 py-3 rounded-lg border border-current/30 text-main font-semibold hover:bg-current/10 transition-all duration-300"
          >
            View Projects
          </button>
        </div>

        <p className="hidden sm:block mt-6 text-sm text-soft">
          Press / to access command mode
        </p>

        {/* Buttons: mobile */}
        <div className="flex sm:hidden flex-col w-full gap-3 mt-8">
          <button
            onClick={openTerminal}
            className="px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            style={{
              backgroundColor: "var(--text-strong)",
              color: "var(--bg-main)",
            }}
          >
            Access Command Mode
          </button>

          <button
            onClick={() => setPage("projects")}
            className="px-6 py-3 rounded-lg border border-current/30 text-main font-semibold text-center hover:bg-current/10 transition-all duration-300"
          >
            View Projects
          </button>
        </div>
      </div>
    </div>
  );
}