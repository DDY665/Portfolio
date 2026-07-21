import { FaGithub } from "react-icons/fa";
import TypingText from "../components/TypingText";

const projects = [
  {
    id: "ums",
    title: "UMS — User & Employee Management System",
    desc: "Production-grade full stack RBAC platform with JWT auth, onboarding guards, audit logs, department management, and enterprise security patterns.",
    github: "https://github.com/DDY665/UMS",
  },
  {
    id: "nourishnet",
    title: "NourishNet — Linking Surplus to Support",
    desc: "MERN platform connecting food donors, NGOs and volunteers with real-time coordination, dashboards and geolocation tracking.",
    github: "https://github.com/DDY665/NourishNet",
  },
  {
    id: "hybridRAG",
    title: "Document Q&A System with Hybrid RAG Architecture",
    desc: "A hybrid retrieval-augmented generation system integrating traditional search and neural networks for improved information retrieval.",
    github: "https://github.com/DDY665/Hybrid-RAG-System-Production-Grade-",
  },
  {
    id: "github_pr_review_dashboard",
    title: "AI-Powered GitHub PR Review Dashboard",
    desc: "An AI-driven dashboard that analyzes GitHub pull requests using LLMs to surface code quality insights, risk flags, and review suggestions in real time.",
    github: "https://github.com/DDY665",
  },
  {
    id: "wireless_ids",
    title: "Wireless Intrusion Detection System with AI-Powered Threat Analysis",
    desc: "An AI-powered IDS that monitors wireless network traffic to detect and classify intrusion attempts and anomalous threats in real time.",
    github: "https://github.com/DDY665/wireless-ids-ai-2",
  },
  {
    id: "Cloud_Sync_Engine",
    title: "Cloud Sync Engine",
    desc: "A Dropbox-style file sync engine using chunk-level delta sync and tombstone-based delete tracking, with an LLM-driven semantic merge assistant for real-time conflict resolution across devices.",
    github: "https://github.com/DDY665",
  },
];

export default function Projects() {
  return (
    <div className="w-full mt-6 sm:mt-10">
      <TypingText text="> projects --featured" speed={40} />

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {projects.map((p) => (
          <div
            key={p.id}
            className="
              project-card
              glass
              p-6
              sm:p-8
              flex
              flex-col
              justify-between
              cursor-pointer
              transition-all
              duration-300
              hover:scale-[1.02]
            "
          >
            <div>
              <p className="text-main font-[JetBrains_Mono] font-semibold text-lg sm:text-xl mb-4">
                {">"} {p.title}
              </p>

              <p className="text-soft leading-relaxed text-sm sm:text-base font-[Inter]">
                {p.desc}
              </p>
            </div>

            <div className="mt-6">
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="
                  github-btn
                  inline-flex
                  items-center
                  gap-3
                  px-5
                  py-2.5
                  rounded-xl
                  font-[JetBrains_Mono]
                  font-medium
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                "
              
              >
                <FaGithub size={18} className="shrink-0" />
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}