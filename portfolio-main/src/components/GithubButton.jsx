import { FaGithub } from "react-icons/fa";

export default function GithubButton({ link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="
        inline-flex items-center gap-3
        px-5 py-2
        rounded-lg
        border border-white/20
        bg-white/5
        backdrop-blur-md
        text-white
        font-[JetBrains_Mono]
        transition-all duration-300
        hover:border-white/40
        hover:bg-white/10
      "
    >
      <FaGithub size={18} />
      GitHub
    </a>
  );
}
