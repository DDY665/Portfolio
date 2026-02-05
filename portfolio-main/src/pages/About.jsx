import TypingText from "../components/TypingText";

export default function About() {
  return (
    <div className="w-full mt-6 sm:mt-10 flex justify-center">
      <div
        className="
          glass
          w-full
          p-6 sm:p-10 md:p-14 lg:p-16
          font-[JetBrains_Mono]
        "
      >
        <TypingText text="> about --me" speed={40} />

        <p
          className="
            mt-8
            text-base sm:text-lg md:text-xl
            text-dim
            leading-8 md:leading-9
            font-[Inter]
            max-w-4xl
          "
        >
          Hi, I’m Darvish, a Computer Science student who prefers learning by
          building rather than just studying theory.
          <br /><br />
          I enjoy working on practical projects, exploring real-world problems,
          and turning ideas into working solutions through code. I’m always
          looking for opportunities to apply my skills in meaningful,
          hands-on ways.
        </p>
      </div>
    </div>
  );
}
