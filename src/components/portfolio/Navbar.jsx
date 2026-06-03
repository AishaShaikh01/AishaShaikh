import { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";

const links = ["About", "Services", "Projects", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });

    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0A0F1E]/90 backdrop-blur-md border-b border-[#1E2A40] py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-10 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2 group select-none"
          >
            <Terminal className="w-5 h-5 text-cyan group-hover:text-cyan/80 transition-colors" />
            <span className="font-mono text-base font-semibold text-foreground tracking-tight">
              aisha<span className="text-cyan">.</span>dev
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l, i) => (
              <button
                key={l}
                onClick={() => scrollToSection(l.toLowerCase())}
                className="font-mono text-xs text-muted-foreground hover:text-cyan transition-colors duration-200 flex items-center gap-1.5"
              >
                <span className="text-cyan/50">0{i + 1}.</span>
                <span>{l}</span>
              </button>
            ))}
          </nav>

          {/* Hire Me Button */}
          <button
            onClick={() => scrollToSection("contact")}
            className="hidden md:inline-flex items-center font-mono text-xs text-cyan border border-cyan/40 px-5 py-2.5 hover:bg-cyan/10 hover:border-cyan transition-all duration-200"
          >
            Hire Me
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-muted-foreground hover:text-cyan transition-colors"
            aria-label="Toggle menu"
          >
            {open ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
          />

          <nav className="absolute top-0 left-0 right-0 bg-[#0D1526] border-b border-[#1E2A40] pt-20 pb-8 px-6 flex flex-col gap-5">
            {links.map((l, i) => (
              <button
                key={l}
                onClick={() => scrollToSection(l.toLowerCase())}
                className="font-mono text-sm text-muted-foreground hover:text-cyan transition-colors flex items-center gap-2 text-left"
              >
                <span className="text-cyan/50">0{i + 1}.</span>
                {l}
              </button>
            ))}

            <button
              onClick={() => scrollToSection("contact")}
              className="mt-2 inline-flex justify-center font-mono text-xs text-cyan border border-cyan/40 px-5 py-3 hover:bg-cyan/10 transition-all"
            >
              Hire Me
            </button>
          </nav>
        </div>
      )}
    </>
  );
}