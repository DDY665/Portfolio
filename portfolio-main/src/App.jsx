import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import Stack from "./pages/Stack";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ResumeModal from "./components/ResumeModal";
import TerminalCommand from "./components/TerminalCommand";

export default function App() {
  const [page, setPage] = useState("home");
  const [showResume, setShowResume] = useState(false);

  const renderPage = () => {
    switch (page) {
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "stack":
        return <Stack />;
      case "contact":
        return <Contact />;
      default:
        return <Hero page={page} />;
    }
  };

  return (
    <div className="font-[Inter] min-h-screen flex flex-col text-main overflow-x-hidden">
      <Navbar
        setPage={setPage}
        page={page}
        openResume={() => setShowResume(true)}
      />

      <AnimatePresence mode="wait">
        <motion.main
          key={page}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="
            flex-1
            w-full
            pt-28
            pb-28
            px-4
            sm:px-6
            md:px-10
            lg:px-16
          "
        >
          <div className="w-full max-w-screen-2xl mx-auto">
            {renderPage()}
          </div>
        </motion.main>
      </AnimatePresence>

      <TerminalCommand
        setPage={setPage}
        openResume={() => setShowResume(true)}
      />

      <Footer />

      <ResumeModal
        open={showResume}
        onClose={() => setShowResume(false)}
      />
    </div>
  );
}
