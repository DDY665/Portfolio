import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import TypingText from "../components/TypingText";

const projects = [
  {
    id: "ums",
    title: "UMS — User & Employee Management System",
    desc: "Production-grade full stack RBAC platform with JWT auth, onboarding guards, audit logs, department management, and enterprise security patterns.",
    github: "https://github.com/DDY665",
  },
  {
    id: "nourishnet",
    title: "NourishNet — Linking Surplus to Support",
    desc: "Hackathon MERN platform connecting food donors, NGOs and volunteers with real-time coordination, dashboards and geolocation tracking.",
    github: "https://github.com/DDY665",
  },
  {
    id: "fixmycity",
    title: "FixMyCity — Civic Issue Reporting",
    desc: "Citizen-to-authority issue reporting system with live tracking, image uploads, role dashboards and real-time updates.",
    github: "https://github.com/DDY665",
  },
];

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <div className="w-full mt-6 sm:mt-10">
      <TypingText text="> projects --featured" speed={40} />

      <div className="mt-8 flex flex-col lg:flex-row gap-6 lg:h-[380px]">
        {projects.map((p) => {
          const isActive = active === p.id;

          return (
            <div
              key={p.id}
              onMouseEnter={() => setActive(p.id)}
              onMouseLeave={() => setActive(null)}
              className={`
                glass
                p-6 sm:p-8
                flex flex-col justify-between
                transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]
                cursor-pointer

                w-full
                ${isActive ? "lg:flex-[3]" : "lg:flex-1 lg:opacity-60"}
              `}
            >
              <div>
                <p className="text-main font-[JetBrains_Mono] text-lg sm:text-xl mb-4">
                  {">"} {p.title}
                </p>

                <div
                  className={`
                    transition-all duration-500
                    opacity-100 translate-y-0
                    lg:${isActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}
                  `}
                >
                  <p className="text-dim leading-relaxed text-sm sm:text-base font-[Inter]">
                    {p.desc}
                  </p>
                </div>
              </div>

              <div
                className={`
                  transition-all duration-500 mt-6
                  opacity-100 translate-y-0
                  lg:${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
                `}
              >
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex items-center gap-3
                    px-5 py-2
                    rounded-lg
                    border border-current/20
                    bg-current/5
                    text-main
                    font-[JetBrains_Mono]
                    transition-all duration-300
                    hover:bg-current/10
                  "
                >
                  <FaGithub size={18} />
                  GitHub
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
