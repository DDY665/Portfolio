import TypingText from "../components/TypingText";

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";

import {
  SiCplusplus,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiPostman,
  SiFastapi,
  SiSpring,
  SiJsonwebtokens,
} from "react-icons/si";

import {
  TbApi,
  TbCpu,
  TbSearch,
  TbBrain,
  TbDatabaseSearch,
} from "react-icons/tb";

const Section = ({ title, items }) => (
  <div className="space-y-10">
    <p className="text-main font-[JetBrains_Mono] font-bold text-xl sm:text-2xl">
      {">"} {title}
    </p>

    <div
      className="
        grid
        grid-cols-2
        sm:grid-cols-3
        md:grid-cols-3
        lg:grid-cols-4
        gap-6
      "
    >
      {items.map((item) => (
        <div
          key={item.label}
          className="
            glass
            p-6
            flex flex-col items-center justify-center
            gap-4
            transition-all duration-300
            hover:scale-[1.04]
            min-h-[120px]
          "
        >
          <item.Icon className="text-3xl sm:text-4xl text-main" />
          <p className="text-xs sm:text-sm text-dim font-[JetBrains_Mono] text-center">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default function Skills() {
  return (
    <div className="w-full mt-6 sm:mt-10 space-y-16">
      <TypingText text="> skills --tech" speed={40} />

      <Section
        title="Languages & Frameworks"
        items={[
          { Icon: SiCplusplus, label: "C / C++" },
          { Icon: FaJava, label: "Java" },
          { Icon: FaPython, label: "Python" },
          { Icon: SiJavascript, label: "JavaScript" },
          { Icon: FaReact, label: "React.js" },
          { Icon: FaNodeJs, label: "Node.js" },
          { Icon: SiExpress, label: "Express.js" },
          { Icon: SiFastapi, label: "FastAPI" },
          { Icon: SiSpring, label: "Spring Boot" },
        ]}
      />

      <Section
        title="AI/ML & Databases"
        items={[
          { Icon: TbBrain, label: "LangChain" },
          { Icon: TbSearch, label: "RAG Pipelines" },
          { Icon: TbDatabaseSearch, label: "FAISS" },
          { Icon: TbCpu, label: "Transformers" },
          { Icon: SiMongodb, label: "MongoDB" },
          { Icon: SiMysql, label: "MySQL" },
        ]}
      />

      <Section
        title="Tools & Technologies"
        items={[
          { Icon: TbApi, label: "REST APIs" },
          { Icon: SiJsonwebtokens, label: "JWT Authentication" },
          { Icon: FaGitAlt, label: "Git" },
          { Icon: SiPostman, label: "Postman" },
          { Icon: FaDocker, label: "Docker" },
        ]}
      />
    </div>
  );
}