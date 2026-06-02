const groups = [
  {
    label: 'Frontend',
    color: 'text-cyan',
    items: ['HTML', 'CSS', 'JavaScript', 'Vue', 'Tailwind CSS'],
  },
  {
    label: 'Backend',
    color: 'text-violet-400',
    items: ['PHP', 'Laravel', 'MySQL'],
  },
  {
    label: 'Tools',
    color: 'text-emerald-400',
    items: ['Git', 'GitHub', 'Postman', 'VS Code'],
  },
];

export default function TechStack() {
  return (
    <section className="py-24 md:py-32 bg-[#0A0F1E]">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-3 mb-14">
          <span className="font-mono text-cyan text-sm font-semibold">04.</span>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Stack</span>
          <div className="flex-1 h-px bg-[#1E2A40] max-w-xs" />
        </div>

        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-12">
          Technologies I <span className="text-cyan">work with</span>
        </h2>

        {/* Terminal window */}
        <div className="bg-[#0D1526] border border-[#1E2A40] rounded-lg overflow-hidden mb-10">
          <div className="flex items-center gap-2 px-4 py-3 bg-[#0A0F1E] border-b border-[#1E2A40]">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
            </div>
            <span className="font-mono text-xs text-muted-foreground/50 ml-2">tech-stack.sh</span>
          </div>
          <div className="p-6 font-mono text-sm">
            <p className="text-muted-foreground/50 mb-1">$ cat tech-stack.json</p>
            <p className="text-cyan/60 mb-4">Loading stack...</p>
            <div className="grid md:grid-cols-3 gap-8">
              {groups.map(g => (
                <div key={g.label}>
                  <p className={`text-xs uppercase tracking-widest mb-4 font-semibold ${g.color}`}>
                    // {g.label}
                  </p>
                  <div className="space-y-2">
                    {g.items.map(item => (
                      <div key={item} className="flex items-center gap-3 group">
                        <span className="text-muted-foreground/40">▸</span>
                        <span className="text-foreground/80 text-sm group-hover:text-foreground transition-colors">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pill badges */}
        <div className="flex flex-wrap gap-3">
          {['HTML', 'CSS', 'JavaScript', 'Vue', 'Tailwind CSS', 'PHP', 'Laravel', 'MySQL', 'Git', 'GitHub', 'Postman', 'VS Code'].map(item => (
            <span
              key={item}
              className="font-mono text-xs px-4 py-2 border border-[#1E2A40] bg-[#0D1526] text-muted-foreground hover:border-cyan/40 hover:text-cyan transition-all duration-200"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}