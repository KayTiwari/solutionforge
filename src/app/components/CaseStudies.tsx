const results = [
  {
    client: "E-Commerce Brand",
    industry: "Retail",
    tag: "SEO + AI Content",
    headline: "+340% Organic Traffic",
    period: "in 6 months",
    metrics: [
      { label: "Organic Sessions", value: "+340%" },
      { label: "Revenue from SEO", value: "+$2.1M" },
      { label: "Keywords Ranking #1", value: "87" },
    ],
    description:
      "Complete technical SEO overhaul combined with an AI content system that produced 200+ optimized product pages. Went from page 5 to page 1 across their core category in under 6 months.",
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    client: "B2B SaaS Startup",
    industry: "Software",
    tag: "AI Strategy",
    headline: "10x Lead Quality",
    period: "in 90 days",
    metrics: [
      { label: "Qualified Leads", value: "10x" },
      { label: "CAC Reduction", value: "-62%" },
      { label: "Demo to Close Rate", value: "+45%" },
    ],
    description:
      "Built a custom AI lead scoring and outreach system that identified high-intent buyers before competitors. Reduced sales cycle from 3 months to 3 weeks through intelligent automation.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    client: "Healthcare Network",
    industry: "Healthcare",
    tag: "Local SEO + AI",
    headline: "220% More Appointments",
    period: "in 4 months",
    metrics: [
      { label: "New Patient Bookings", value: "+220%" },
      { label: "Local Pack Rankings", value: "#1 in 12 markets" },
      { label: "Review Velocity", value: "+400%" },
    ],
    description:
      "Deployed a local SEO and AI-powered reputation management system across 12 clinic locations. Combined with intelligent content strategy, they became the dominant provider in every market.",
    gradient: "from-violet-500 to-cyan-400",
  },
];

export default function CaseStudies() {
  return (
    <section id="results" className="py-28 bg-navy-800 relative overflow-hidden">
      <div className="orb orb-blue w-[500px] h-[500px] bottom-0 left-1/2 -translate-x-1/2 opacity-40" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase border border-brand-blue/30 text-brand-cyan bg-brand-blue/10 mb-6">
            Case Studies
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            Results That Speak
            <br />
            <span className="gradient-text">For Themselves</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            We measure success in outcomes, not activity. Here is what we have built for clients.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {results.map((result) => (
            <div
              key={result.client}
              className="gradient-border glass rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:glow-blue group"
            >
              <div className={`h-1.5 w-full bg-gradient-to-r ${result.gradient}`} />
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-xs text-gray-500 font-medium mb-1">{result.industry}</div>
                    <div className="font-bold text-white">{result.client}</div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold border border-brand-blue/30 text-brand-cyan bg-brand-blue/10">
                    {result.tag}
                  </span>
                </div>

                <div className="mb-6">
                  <div className={`text-3xl font-black bg-gradient-to-r ${result.gradient} bg-clip-text text-transparent`}>
                    {result.headline}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{result.period}</div>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-6 py-4 border-y border-white/5">
                  {result.metrics.map((metric) => (
                    <div key={metric.label} className="text-center">
                      <div className="text-sm font-bold text-white mb-1">{metric.value}</div>
                      <div className="text-[10px] text-gray-500 leading-tight">{metric.label}</div>
                    </div>
                  ))}
                </div>

                <p className="text-gray-400 text-sm leading-relaxed">{result.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 glass gradient-border rounded-2xl px-8 py-5">
            <div className="text-3xl font-black gradient-text">$50M+</div>
            <div className="w-px h-8 bg-white/10" />
            <div className="text-gray-400 text-sm leading-tight">
              Revenue influenced<br />
              <span className="text-white font-semibold">across all clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
