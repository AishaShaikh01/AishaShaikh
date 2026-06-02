import { Search, FileText, Pen, Code2, Rocket } from 'lucide-react';

const steps = [
  { n: '01', label: 'Discovery', icon: Search, desc: 'Understanding goals, users and project scope' },
  { n: '02', label: 'Planning', icon: FileText, desc: 'Defining scope, timeline and architecture' },
  { n: '03', label: 'Design', icon: Pen, desc: 'Crafting layouts and visual identity' },
  { n: '04', label: 'Development', icon: Code2, desc: 'Building with precision and best practices' },
  { n: '05', label: 'Launch', icon: Rocket, desc: 'Deploying, testing and going live' },
];

export default function Process() {
  return (
    <section className="py-24 md:py-32 bg-[#0D1526]">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-3 mb-14">
          <span className="font-mono text-cyan text-sm font-semibold">05.</span>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Process</span>
          <div className="flex-1 h-px bg-[#1E2A40] max-w-xs" />
        </div>

        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-14">
          How I <span className="text-cyan">ship</span> your project
        </h2>

        {/* Desktop timeline */}
        <div className="hidden md:block relative">
          <div className="absolute left-0 right-0 top-[2.25rem] h-px bg-[#1E2A40]">
            <div className="h-full bg-gradient-to-r from-cyan/60 via-cyan/30 to-transparent w-full" />
          </div>

          <div className="grid grid-cols-5 gap-4">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="relative flex flex-col items-center text-center group">
                  <div className="relative z-10 w-[4.5rem] h-[4.5rem] flex items-center justify-center bg-[#0A0F1E] border-2 border-[#1E2A40] mb-5 group-hover:border-cyan group-hover:glow-cyan transition-all duration-300">
                    <Icon className="w-5 h-5 text-muted-foreground group-hover:text-cyan transition-colors duration-300" />
                  </div>
                  <span className="font-mono text-[10px] text-cyan/50 mb-1">{s.n}</span>
                  <h3 className="font-heading text-sm font-bold text-foreground mb-1">{s.label}</h3>
                  <p className="font-mono text-[11px] text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden space-y-6">
          {steps.map(s => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="flex gap-5 items-start bg-[#0A0F1E] border border-[#1E2A40] p-5">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-[#1E2A40] bg-[#0D1526]">
                  <Icon className="w-4 h-4 text-cyan/70" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-cyan/50">{s.n} </span>
                  <h3 className="font-heading text-base font-bold text-foreground">{s.label}</h3>
                  <p className="font-mono text-xs text-muted-foreground mt-1">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}