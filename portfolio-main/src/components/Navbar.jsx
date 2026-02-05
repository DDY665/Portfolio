import { useEffect, useState } from "react";

export default function Navbar({ setPage, page, openResume }) {
  // 🌗 Persist theme
  const [light, setLight] = useState(
    localStorage.getItem("theme") === "light"
  );

  // 🎯 Navbar visibility on scroll
  const [visible, setVisible] = useState(true);

  // Apply theme
  useEffect(() => {
    if (light) {
      document.body.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
  }, [light]);

  // Hide / show navbar on scroll
  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (name) =>
    `px-3 py-1 rounded-md transition border whitespace-nowrap ${
      page === name
        ? "text-main border-main"
        : "text-soft border-transparent hover:text-main"
    }`;

  return (
    <nav
      className={`fixed top-5 left-1/2 -translate-x-1/2 z-50
      transition-all duration-500
      ${visible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"}`}
    >
      <div
        className="
          glass
          flex
          items-center
          gap-3 sm:gap-4 md:gap-6
          px-4 sm:px-6
          py-2
          text-xs sm:text-sm
          font-[JetBrains_Mono]
          overflow-x-auto
          max-w-[95vw]
        "
      >
        <button onClick={() => setPage("home")} className={linkClass("home")}>
          home
        </button>

        <button onClick={() => setPage("about")} className={linkClass("about")}>
          about
        </button>

        <button onClick={() => setPage("projects")} className={linkClass("projects")}>
          projects
        </button>

        <button onClick={() => setPage("stack")} className={linkClass("stack")}>
          stack
        </button>

        <button onClick={() => setPage("contact")} className={linkClass("contact")}>
          contact
        </button>

        <button
          onClick={openResume}
          className="px-3 py-1 rounded-md text-soft hover:text-main transition whitespace-nowrap"
        >
          resume
        </button>

        <button
          onClick={() => setLight(!light)}
          className="ml-1 px-3 py-1 rounded-md border border-main text-soft hover:text-main transition whitespace-nowrap"
        >
          theme
        </button>
      </div>
    </nav>
  );
}
