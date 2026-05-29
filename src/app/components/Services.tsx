const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 001.357 2.059l.183.08A2.25 2.25 0 0118 13.08V8.75m-8.25-5.646A24.301 24.301 0 0112 3c2.486 0 4.879.338 7.123.97M3 16.5A24.585 24.585 0 0012 18c3.11 0 6.075-.574 8.795-1.617" />
      </svg>
    ),
    title: "AI Strategy & Implementation",
    description:
      "From concept to production, we design and deploy AI systems that create real competitive advantages. LLM integrations, automation pipelines, and intelligent workflows built for scale.",
    features: ["LLM Integration", "AI Automation", "Custom Pipelines", "GPT & Claude APIs"],
    gradient: "from-blue-600 to-blue-400",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Data-Driven SEO",
    description:
      "Technical SEO, content strategy, and authority building that compounds over time. We reverse-engineer search algorithms to get you in front of the right audience at the right moment.",
    features: ["Technical SEO Audits", "Content Strategy", "Link Building", "Rank Tracking"],
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    title: "Growth Strategy",
    description:
      "We map your full digital ecosystem and build a strategy that aligns AI, SEO, and content into one compounding growth engine. Roadmaps, execution, and ongoing optimization.",
    features: ["Market Analysis", "Digital Roadmapping", "KPI Frameworks", "Growth Sprints"],
    gradient: "from-violet-500 to-cyan-500",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: "AI Content Systems",
    description:
      "Build scalable content operations powered by AI. From editorial workflows to automated publishing, we help you produce more high-quality content in less time without sacrificing authenticity.",
    features: ["Content Automation", "Editorial Workflows", "Brand Voice AI", "Publish at Scale"],
    gradient: "from-blue-500 to-teal-400",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "AI Audits & Advisory",
    description:
      "Not sure where to start with AI? Our comprehensive audits identify your highest-leverage AI opportunities and give you a clear, prioritized roadmap backed by competitive research.",
    features: ["AI Readiness Assessment", "Competitive Analysis", "Tool Stack Review", "Priority Roadmap"],
    gradient: "from-cyan-400 to-blue-600",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
    title: "Analytics & Reporting",
    description:
      "Turn data into decisions. We build custom dashboards and reporting systems so you always know what's working, what's not, and where to double down.",
    features: ["Custom Dashboards", "Attribution Modeling", "Monthly Reviews", "ROI Tracking"],
    gradient: "from-blue-400 to-cyan-600",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 bg-navy-800 relative overflow-hidden">
      <div className="orb orb-blue w-[400px] h-[400px] top-0 left-1/2 -translate-x-1/2 opacity-50" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase border border-brand-blue/30 text-brand-cyan bg-brand-blue/10 mb-6">
            What We Do
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            Services Built for
            <br />
            <span className="gradient-text">Modern Growth</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Everything you need to dominate your market through AI and intelligent
            search strategy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group gradient-border glass rounded-2xl p-7 hover:bg-navy-700/40 transition-all duration-300 hover:-translate-y-1 hover:glow-blue cursor-default"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} bg-opacity-20 flex items-center justify-center mb-5 text-white shadow-lg`}
              >
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:gradient-text transition-all">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((f) => (
                  <span
                    key={f}
                    className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-gray-400 border border-white/5"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
