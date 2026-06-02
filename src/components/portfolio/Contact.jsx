import { Mail, Github, Linkedin, MessageCircle, Terminal } from 'lucide-react';

const links = [
  { label: 'Email', href: 'mailto:aisha@example.com', icon: Mail, color: 'hover:border-cyan/50 hover:text-cyan' },
  { label: 'GitHub', href: 'https://github.com', icon: Github, color: 'hover:border-violet-400/50 hover:text-violet-400' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin, color: 'hover:border-blue-400/50 hover:text-blue-400' },
  { label: 'WhatsApp', href: 'https://wa.me/', icon: MessageCircle, color: 'hover:border-emerald-400/50 hover:text-emerald-400' },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-[#0A0F1E] relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-100" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan/3 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-3 mb-14">
          <span className="font-mono text-cyan text-sm font-semibold">06.</span>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Contact</span>
          <div className="flex-1 h-px bg-[#1E2A40] max-w-xs" />
        </div>

        <div className="max-w-2xl">
          {/* Terminal prompt */}
          <div className="flex items-center gap-2 mb-6">
            <Terminal className="w-4 h-4 text-cyan/50" />
            <span className="font-mono text-sm text-muted-foreground/60">~/contact $ <span className="text-cyan/60">send-message --to aisha</span></span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4 leading-tight">
            Let's Build Something<br />
            <span className="text-cyan">Meaningful</span>
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed mb-12">
            Have a project in mind? Let's discuss how we can bring it to life.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {links.map(({ label, href, icon: Icon, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col items-center gap-3 border border-[#1E2A40] bg-[#0D1526] py-7 px-4 transition-all duration-300 ${color}`}
              >
                <Icon className="w-5 h-5 text-muted-foreground transition-colors duration-300 group-hover:scale-110 transform" />
                <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground group-hover:text-current transition-colors duration-300">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}