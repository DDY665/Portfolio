import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full flex justify-center mt-auto pb-6 px-4">
      <div
        className="
          glass
          flex items-center justify-between
          gap-4 sm:gap-6
          px-4 sm:px-6
          py-2.5 sm:py-3
          text-xs sm:text-sm
          font-[JetBrains_Mono]

          w-full
          max-w-[420px]   /* keeps the small pill width you want */
        "
      >
       
        <span className="text-soft whitespace-nowrap">
          darvish@portfolio $
        </span>

        <span className="opacity-40 hidden sm:block">|</span>

        <div className="flex items-center gap-4 sm:gap-5 text-base sm:text-lg">
          <a
            href="https://github.com/DDY665"
            target="_blank"
            rel="noreferrer"
            className="text-soft hover:text-strong transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/darvish-yadav-a37134246/"
            target="_blank"
            rel="noreferrer"
            className="text-soft hover:text-strong transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
