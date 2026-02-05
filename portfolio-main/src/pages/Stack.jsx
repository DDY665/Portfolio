import TypingText from "../components/TypingText";

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGitAlt,
  FaGithub
} from "react-icons/fa";

import {
  SiCplusplus,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiPostman,
  SiFigma,
  SiHtml5,
  SiCss3
} from "react-icons/si";


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

export default function Stack() {
  return (
    <div className="w-full mt-6 sm:mt-10 space-y-16">
      <TypingText text="> stack --tech" speed={40} />

      <Section
        title="Programming Languages"
        items={[
          { Icon: SiCplusplus, label: "C / C++" },
          { Icon: FaPython, label: "Python" },
          { Icon: FaJava, label: "Java" },
          { Icon: SiJavascript, label: "JavaScript" },
        ]}
      />

      <Section
        title="Development"
        items={[
          { Icon: SiHtml5, label: "HTML" },
          { Icon: SiCss3, label: "CSS" },
          { Icon: FaReact, label: "React.js" },
          { Icon: FaNodeJs, label: "Node.js" },
          { Icon: SiExpress, label: "Express.js" },
        ]}
      />

      <Section
        title="Database"
        items={[
          { Icon: SiMongodb, label: "MongoDB" },
          { Icon: SiMysql, label: "MySQL" },
        ]}
      />

      <Section
        title="Tools"
        items={[
          { Icon: FaGitAlt, label: "Git" },
          { Icon: FaGithub, label: "GitHub" },
          { Icon: SiPostman, label: "Postman" },
          { Icon: SiFigma, label: "Figma" },
        ]}
      />
    </div>
  );
}
