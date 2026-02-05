import { useEffect } from "react";

export default function ResumeModal({ open, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (open) {
      window.addEventListener("keydown", handleKey);
    }

    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="modal-overlay fixed inset-0 z-[100] flex items-center justify-center animate-fade">
      <div className="glass w-[92%] max-w-2xl p-8 relative flex flex-col gap-6">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-soft hover:text-main text-xl"
        >
          ✕
        </button>

        <p className="text-main font-[JetBrains_Mono]">
          {">"} resume
        </p>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="border border-main text-main py-3 rounded-md text-center
                     hover:bg-main hover:text-[var(--bg-main)]
                     transition font-[JetBrains_Mono]"
        >
          View Resume
        </a>

        <a
          href="/resume.pdf"
          download
          className="border border-main text-main py-3 rounded-md text-center
                     hover:bg-main hover:text-[var(--bg-main)]
                     transition font-[JetBrains_Mono]"
        >
          Download Resume
        </a>

        <p className="text-soft text-xs text-center mt-2">
          Press ESC to close
        </p>
      </div>
    </div>
  );
}
