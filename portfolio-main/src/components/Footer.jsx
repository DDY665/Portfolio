import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full flex justify-center mt-auto pb-6 px-4">
      <div
        className="
          glass
          flex items-center justify-between
          gap-4 sm:gap-6
          px-5 sm:px-6
          py-2.5 sm:py-3
          text-xs sm:text-sm
          font-[JetBrains_Mono]
          w-full
          max-w-[520px]
        "
      >
        <div className="flex items-center gap-4 whitespace-nowrap">
          <span className="text-soft">
            darvish@portfolio $
          </span>

          <span className="opacity-40">|</span>

          <span className="text-dim hidden sm:block">
            © 2026
          </span>
        </div>

        <div className="flex items-center gap-5 text-base sm:text-lg">
          <a
            href="mailto:darvishyadav6655@gmail.com"
            className="text-soft hover:text-main transition-all duration-200 hover:-translate-y-0.5"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://github.com/DDY665"
            target="_blank"
            rel="noreferrer"
            className="text-soft hover:text-main transition-all duration-200 hover:-translate-y-0.5"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/darvish-yadav-dega-a37134246/"
            target="_blank"
            rel="noreferrer"
            className="text-soft hover:text-main transition-all duration-200 hover:-translate-y-0.5"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}