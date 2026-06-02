import { useState } from 'react';
import { Globe, Monitor, Server, RefreshCcw } from 'lucide-react';

const services = [
  {
    num: '01',
    icon: Globe,
    title: 'Web Development',
    body: 'Professional websites designed to communicate value and support business growth.',
    tag: 'HTML · CSS · JS',
  },
  {
    num: '02',
    icon: Monitor,
    title: 'Frontend Development',
    body: 'Responsive and user-focused interfaces built with modern technologies.',
    tag: 'Vue · Tailwind · React',
  },
  {
    num: '03',
    icon: Server,
    title: 'Laravel Development',
    body: 'Custom web applications, backend systems and API integrations.',
    tag: 'PHP · Laravel · MySQL',
  },
  {
    num: '04',
    icon: RefreshCcw,
    title: 'Website Revamps',
    body: 'Transforming outdated websites into modern digital experiences.',
    tag: 'Redesign · Optimize',
  },
];

export default function Services() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="services" className="py-24 md:py-32 bg-[#0A0F1E]">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-3 mb-14">
          <span className="font-mono text-cyan text-sm font-semibold">02.</span>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Services</span>
          <div className="flex-1 h-px bg-[#1E2A40] max-w-xs" />
        </div>

        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-12">
          What I <span className="text-cyan">build</span> for you
        </h2>

        <div className="grid sm:grid-cols-2 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            const active = hovered === i;
            return (
              <div
                key={s.num}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className={`relative bg-[#0D1526] border p-7 cursor-default transition-all duration-300 group ${
                  active ? 'border-cyan/50 glow-cyan' : 'border-[#1E2A40] hover:border-cyan/20'
                }`}
              >
                {/* Number */}
                <span className="font-mono text-xs text-muted-foreground/30 absolute top-5 right-5">{s.num}</span>

                <div className={`w-11 h-11 flex items-center justify-center border mb-5 transition-all duration-300 ${
                  active ? 'bg-cyan border-cyan' : 'border-[#1E2A40] bg-[#0A0F1E]'
                }`}>
                  <Icon className={`w-5 h-5 transition-colors duration-300 ${active ? 'text-[#0A0F1E]' : 'text-cyan/70'}`} />
                </div>

                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.body}</p>
                <span className="font-mono text-[10px] text-cyan/50 tracking-wider">{s.tag}</span>

                {/* Hover accent line */}
                <div className={`absolute bottom-0 left-0 h-0.5 bg-cyan transition-all duration-500 ${active ? 'w-full' : 'w-0'}`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}