import TypingText from "../components/TypingText";

const education = [
  {
    institution: "Gokaraju Rangaraju Institute of Engineering and Technology, Hyderabad",
    degree: "B.Tech in Computer Science",
    period: "September 2023 — July 2027",
    metric: "CGPA: 8.02",
  },
  {
    institution: "Deeksha Junior College, Hyderabad",
    degree: "Class XII, MPC",
    period: "August 2021 — May 2023",
    metric: "Percentage: 90.2%",
  },
];

export default function About() {
  return (
    <div className="w-full mt-6 sm:mt-10">
      {/* About Me */}
      <TypingText text="> about --me" speed={40} />

      <div
        className="
          glass
          w-full
          p-6 sm:p-10 md:p-14 lg:p-16
          font-[JetBrains_Mono]
        "
      >
        <div
          className="
            text-base sm:text-lg md:text-xl
            text-soft
            leading-8 md:leading-9
            font-[Inter]
            max-w-6xl
          "
        >
          <p>
            Hi, I'm Darvish, a Computer Science undergraduate at GRIET
            specializing in backend development and AI-integrated systems, with a
            strong foundation in API design, scalable architecture and RAG
            pipelines.
          </p>

          <p className="mt-6">
            I enjoy turning real-world problems into working solutions. I am
            currently building full-stack systems and AI-powered tools, writing
            clean, maintainable code for systems that solve genuine problems for
            real people.
          </p>

          <p className="mt-6">
            <span className="text-main font-medium">Location:</span>{" "}
            Hyderabad, India
          </p>
        </div>
      </div>

      {/* Education */}
      <div className="mt-14">
        <TypingText text="> education --list" speed={40} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {education.map((edu) => (
            <div
              key={edu.institution}
              className="
                glass
                p-5 sm:p-6
                border border-current/20
                font-[JetBrains_Mono]
              "
            >
              <p className="text-main font-bold text-xl sm:text-2xl leading-snug">
                {edu.degree}
              </p>

              <p className="text-soft font-semibold text-sm sm:text-base mt-3">
                {edu.institution}
              </p>

              <p className="text-dim text-xs sm:text-sm mt-2">
                {edu.period}
              </p>

              <p className="text-dim text-xs mt-1">
                {edu.metric}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}