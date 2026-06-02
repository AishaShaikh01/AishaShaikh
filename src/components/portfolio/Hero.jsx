import { useState, useEffect } from 'react';
import { ArrowRight, Code2, Braces } from 'lucide-react';
import heroImage from "../../assets/hero.png";

const roles = ['Frontend Developer', 'Laravel Developer', 'Web Engineer', 'UI Builder'];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = roles[roleIdx];
    if (typing) {
      if (displayed.length < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        return () => clearTimeout(t);
      } else {
        setRoleIdx(i => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIdx]);

  return (
    <section className="relative min-h-screen flex items-center bg-[#0A0F1E] pt-20 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-100" />
      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-10 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <div>
            {/* Terminal status line */}
            <div className="flex items-center gap-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
              <span className="font-mono text-xs text-cyan/70 tracking-widest">available_for_projects</span>
            </div>

            {/* Code comment */}
            <p className="font-mono text-sm text-muted-foreground/60 mb-3">// Hello, world. I'm</p>

            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] text-foreground mb-4">
              Aisha<br />
              <span className="text-cyan text-glow">Shaikh</span>
            </h1>

            {/* Typewriter role */}
            <div className="font-mono text-xl sm:text-2xl text-muted-foreground mb-6 h-8 flex items-center gap-1">
              <span className="text-cyan/60">&gt; </span>
              <span className="text-foreground/80">{displayed}</span>
              <span className="w-0.5 h-5 bg-cyan animate-blink ml-0.5" />
            </div>

            <p className="text-base text-muted-foreground leading-relaxed mb-3 max-w-lg">
              Building modern websites and web applications with a focus on performance, usability and thoughtful design.
            </p>
            <p className="text-sm text-muted-foreground/60 leading-relaxed mb-10 max-w-md">
              Software Engineering graduate specializing in frontend development and Laravel applications — creating digital experiences that help businesses grow.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-cyan text-[#0A0F1E] font-mono text-sm font-semibold px-7 py-4 hover:bg-cyan/90 transition-colors duration-200 group"
              >
                <Code2 className="w-4 h-4" />
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-cyan/30 text-cyan font-mono text-sm px-7 py-4 hover:border-cyan hover:bg-cyan/10 transition-all duration-200"
              >
                Contact Me
              </a>
            </div>

            {/* Stats row */}
            <div className="flex gap-8 mt-12 pt-10 border-t border-[#1E2A40]">
              {[['3+', 'Years'], ['10+', 'Projects'], ['100%', 'Committed']].map(([n, l]) => (
                <div key={l}>
                  <p className="font-mono text-2xl font-bold text-cyan">{n}</p>
                  <p className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider mt-0.5">{l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — browser mockup */}
          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 bg-cyan/5 rounded-xl blur-2xl" />
            <div className="relative border border-[#1E2A40] bg-[#0D1526] rounded-lg overflow-hidden glow-cyan">
              {/* Terminal-style chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#0A0F1E] border-b border-[#1E2A40]">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/60" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <span className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 mx-3">
                  <div className="bg-[#1E2A40] rounded px-3 py-1 flex items-center justify-center gap-2">
                    <Braces className="w-3 h-3 text-cyan/40" />
                    <span className="font-mono text-[10px] text-muted-foreground/60">webwovan.tech</span>
                  </div>
                </div>
              </div>
              <img
                src={heroImage}
                alt="WebWovan Technologies portfolio"
                className="w-full aspect-[4/3] object-cover opacity-90"
              />
            </div>
            {/* Accent tag */}
            <div className="absolute -bottom-3 -right-3 bg-cyan text-[#0A0F1E] px-4 py-2">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider">Featured Work</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}