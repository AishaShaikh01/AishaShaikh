import { Terminal } from 'lucide-react';

const links = ['About', 'Services', 'Projects', 'Contact'];

export default function Footer() {
  return (
    <footer className="bg-[#060A14] border-t border-[#1E2A40]">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-cyan/60" />
            <span className="font-mono text-sm font-semibold text-foreground">
              aisha<span className="text-cyan">.</span>dev
            </span>
            <span className="font-mono text-xs text-muted-foreground/40 ml-2">// Frontend & Laravel Developer</span>
          </div>
          <nav className="flex gap-6">
            {links.map(l => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground/40 hover:text-cyan transition-colors duration-200"
              >
                {l}
              </a>
            ))}
          </nav>
        </div>
        <div className="border-t border-[#1E2A40] pt-6 flex flex-col sm:flex-row justify-between gap-3">
          <p className="font-mono text-[11px] text-muted-foreground/30">
            © {new Date().getFullYear()} Aisha Shaikh. All rights reserved.
          </p>
          <p className="font-mono text-[11px] text-muted-foreground/20">
            Hyderabad, Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
}