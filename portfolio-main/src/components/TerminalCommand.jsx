import { useEffect, useRef, useState } from "react";

export default function TerminalCommand({ setPage, openResume }) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);

  const historyRef = useRef(null);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "/") {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "Escape") {
        setOpen(false);
        setInput("");
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight;
    }
  }, [history]);

  const print = (text) => setHistory((h) => [...h, text]);

const runCommand = (cmd) => {
  const c = cmd.trim().toLowerCase();
  print(`> ${c}`);

  if (["home", "about", "projects", "stack", "contact"].includes(c)) {
    setPage(c);
    setOpen(false);
  }

  else if (c === "theme light") {
    document.body.classList.add("light");
    print("Switched to light theme.");
  }
  else if (c === "theme dark") {
    document.body.classList.remove("light");
    print("Switched to dark theme.");
  }

  else if (c === "resume") {
    openResume();
    setOpen(false);
  }
  else if (c === "download resume") {
    window.open("/resume.pdf", "_blank");
    setOpen(false);
  }

  else if (c.startsWith("project ")) {
    const name = c.replace("project ", "");

    const links = {
      ums: "https://github.com/DDY665/ums",
      nourishnet: "https://github.com/DDY665/nourishnet",
      fixmycity: "https://github.com/DDY665",
    };

    if (links[name]) {
      print(`Opening ${name} repository...`);
      window.open(links[name], "_blank");
      setOpen(false);
    } else {
      print("Project not found. Try: ums · nourishnet · fixmycity");
    }
  }

  else if (c === "who is darvish") {
    print("Darvish is a Full Stack Developer who loves solving real-world problems.");
    print("Special ability: turns coffee into scalable systems ☕");
  }

  else if (c === "sudo hire darvish") {
    print("Root access granted.");
    print("Pleasure to make your acquaintance. Let's build something legendary. 🤝🚀");
  }

  else if (c === "help") {
    print("Navigation: home · about · projects · stack · contact");
    print("Theme: theme light · theme dark");
    print("Resume: resume · download resume");
    print("Projects: project ums · project nourishnet · project fixmycity");
    print("Easter eggs: who is darvish · sudo hire darvish");
    print("Utility: clear · exit");
  }

  else if (c === "exit") {
    setOpen(false);
  }

  else if (c === "clear") {
    setHistory([]);
  }

  else {
    print("Command not found. Type 'help'");
  }

  setInput("");
};



  if (!open) return null;

  return (
    <div className="modal-overlay fixed inset-0 z-[200] flex items-center justify-center">
      <div className="glass w-[95%] max-w-4xl p-8 font-[JetBrains_Mono]">

        <p className="text-main mb-2">{">"} terminal</p>
        <p className="text-soft text-xs mb-4">type 'help'</p>

        <div
          ref={historyRef}
          className="h-64 overflow-y-auto mb-4 text-sm text-main whitespace-pre leading-6 pr-2 terminal-scroll"
        >
          {history.map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>

        <div className="flex items-center border border-dim/30 rounded-md px-3 py-2">
          <span className="text-soft mr-2">{">"}</span>
          <input
            autoFocus
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && runCommand(input)}
            className="bg-transparent outline-none w-full text-main placeholder:text-soft"
            placeholder="type a command..."
          />
        </div>

        <p className="text-soft text-xs mt-3">Press ESC to close</p>
      </div>
    </div>
  );
}
