const values = [
  {
    icon: "⚡",
    title: "Execution Over Theory",
    description:
      "We don't sell decks. We build systems, ship strategies, and measure outcomes. Every engagement is designed for results.",
  },
  {
    icon: "🔬",
    title: "Data First, Always",
    description:
      "Every recommendation is grounded in real data. We use AI to find patterns humans miss and opportunities others overlook.",
  },
  {
    icon: "🤝",
    title: "Partners, Not Vendors",
    description:
      "We embed ourselves in your business. Your growth is our scorecard. Long-term relationships built on trust and transparency.",
  },
  {
    icon: "🔁",
    title: "Compound Growth",
    description:
      "The strategies we build get stronger over time. SEO compounds. AI systems learn. We engineer growth that accelerates.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      <div className="orb orb-cyan w-[500px] h-[500px] right-[-10%] top-1/2 -translate-y-1/2" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase border border-brand-cyan/30 text-brand-cyan bg-brand-cyan/10 mb-6">
              About Us
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-8 leading-tight">
              Built to Forge
              <br />
              <span className="gradient-text">Lasting Results</span>
            </h2>
            <div className="space-y-5 text-gray-400 text-base leading-relaxed">
              <p>
                SolutionForge was founded on a simple premise: most businesses are
                sitting on untapped growth potential that better AI and SEO strategy
                would unlock. We exist to close that gap.
              </p>
              <p>
                We combine deep technical expertise in artificial intelligence with
                battle-tested SEO methodology to build growth engines that compound
                over time. We work with startups scaling their first $1M and
                enterprises optimizing at $100M+.
              </p>
              <p>
                Every strategy we forge is custom-built for your business,
                your market, and your goals. No templates. No cookie-cutter
                playbooks. Just rigorous thinking and disciplined execution.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-10 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-brand-blue to-brand-cyan hover:opacity-90 transition-all duration-200 shadow-lg shadow-blue-500/25 hover:-translate-y-0.5"
            >
              Work With Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {values.map((value) => (
              <div
                key={value.title}
                className="gradient-border glass rounded-2xl p-6 hover:bg-white/5 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-2xl mb-4">{value.icon}</div>
                <h3 className="font-bold text-white text-sm mb-2.5">{value.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
