export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#0D1526]">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-14">
          <span className="font-mono text-cyan text-sm font-semibold">01.</span>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">About</span>
          <div className="flex-1 h-px bg-[#1E2A40] max-w-xs" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
              Building the web,<br />
              <span className="text-cyan">one commit at a time.</span>
            </h2>
            <p className="text-muted-foreground leading-[1.85] text-base">
              I'm a Software Engineering graduate focused on frontend development and Laravel applications. My work centers around building websites and digital platforms that balance functionality, performance and design — while helping organizations present their services professionally.
            </p>

            {/* Code block flavour */}
            <div className="mt-8 bg-[#0A0F1E] border border-[#1E2A40] rounded-lg p-5 font-mono text-sm">
              <p className="text-muted-foreground/40 text-xs mb-3">// skills.json</p>
              <p><span className="text-cyan/70">const</span> <span className="text-foreground">skills</span> <span className="text-muted-foreground">=</span> {'{'}</p>
              <p className="ml-4"><span className="text-yellow-400/80">passion</span><span className="text-muted-foreground">:</span> <span className="text-green-400/80">"Building great UX"</span><span className="text-muted-foreground">,</span></p>
              <p className="ml-4"><span className="text-yellow-400/80">focus</span><span className="text-muted-foreground">:</span> <span className="text-green-400/80">"Performance & Design"</span><span className="text-muted-foreground">,</span></p>
              <p className="ml-4"><span className="text-yellow-400/80">available</span><span className="text-muted-foreground">:</span> <span className="text-cyan">true</span></p>
              <p>{'}'}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {[
              { n: '3+', l: 'Years of Practice', desc: 'Continuously building and learning' },
              { n: '10+', l: 'Projects Delivered', desc: 'From concept to production' },
              { n: '100%', l: 'Client Focused', desc: 'Your goals drive every decision' },
            ].map(({ n, l, desc }) => (
              <div key={l} className="bg-[#0A0F1E] border border-[#1E2A40] p-6 flex gap-6 items-center hover:border-cyan/30 transition-colors duration-300 group">
                <p className="font-mono text-3xl font-bold text-cyan group-hover:text-glow transition-all">{n}</p>
                <div>
                  <p className="font-heading text-sm font-semibold text-foreground">{l}</p>
                  <p className="font-mono text-xs text-muted-foreground mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}