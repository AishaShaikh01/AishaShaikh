import { ExternalLink, Star, GitBranch } from 'lucide-react';

import webwovan from "../../assets/webwovan.png";
import construction from "../../assets/construction.png";
import lumera from "../../assets/lumera.png";

const secondary = [
  {
    img: construction,
    title: 'Construction Company Website',
    desc: 'Corporate website featuring service showcases, project galleries and lead generation focused design.',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    img: lumera,
    title: 'Lumera AI Jewellery Platform',
    desc: 'Luxury AI jewellery platform featuring premium branding and AI-assisted personalization concepts.',
    tags: ['Vue', 'Laravel', 'MySQL'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-[#0D1526]">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-3 mb-14">
          <span className="font-mono text-cyan text-sm font-semibold">03.</span>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Projects</span>
          <div className="flex-1 h-px bg-[#1E2A40] max-w-xs" />
        </div>

        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-12">
          Featured <span className="text-cyan">work</span>
        </h2>

        {/* WebWovan — hero */}
        <div className="relative mb-10 group">
          <div className="border border-[#1E2A40] bg-[#0A0F1E] overflow-hidden hover:border-cyan/30 transition-colors duration-300">
            {/* Terminal chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#0A0F1E] border-b border-[#1E2A40]">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-[#1E2A40] rounded px-3 py-1 max-w-xs mx-auto text-center">
                  <span className="font-mono text-[10px] text-muted-foreground/60">webwovan.tech</span>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden">
              <img
                src={webwovan}
                alt="WebWovan Technologies"
                className="w-full aspect-[16/8] object-cover group-hover:scale-[1.01] transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E]/90 via-[#0A0F1E]/20 to-transparent" />

              {/* Badge */}
              <div className="absolute top-5 left-5 flex items-center gap-1.5 bg-cyan text-[#0A0F1E] px-3 py-1.5">
                <Star className="w-3 h-3 fill-[#0A0F1E]" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider">Featured</span>
              </div>

              {/* Info overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col sm:flex-row sm:items-end justify-between gap-5">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <GitBranch className="w-3.5 h-3.5 text-cyan/70" />
                    <span className="font-mono text-xs text-cyan/70">main branch</span>
                  </div>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2">
                    WebWovan Technologies
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed max-w-xl">
                    Complete business portfolio for an IT solutions company — service presentation, project showcases, chatbot integration and working contact functionality.
                  </p>
                  <div className="flex gap-2 mt-3 flex-wrap">
                    {['Laravel', 'Vue', 'MySQL', 'Tailwind'].map(t => (
                      <span key={t} className="font-mono text-[10px] bg-cyan/10 border border-cyan/20 text-cyan px-2 py-0.5">{t}</span>
                    ))}
                  </div>
                </div>
                <a
                  href="https://webwovan.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 inline-flex items-center gap-2 bg-cyan text-[#0A0F1E] font-mono text-xs font-bold px-5 py-3 hover:bg-cyan/90 transition-colors"
                >
                  Visit Site
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary */}
        <div className="grid md:grid-cols-2 gap-6">
          {secondary.map(p => (
            <div key={p.title} className="group border border-[#1E2A40] bg-[#0A0F1E] overflow-hidden hover:border-cyan/25 transition-colors duration-300">
              <div className="overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-[1.02] transition-transform duration-500 opacity-85"
                />
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3 flex-wrap">
                  {p.tags.map(t => (
                    <span key={t} className="font-mono text-[10px] bg-cyan/10 border border-cyan/20 text-cyan px-2 py-0.5">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}