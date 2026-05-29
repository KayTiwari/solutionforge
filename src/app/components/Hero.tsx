import Image from "next/image";

const pills = ["AI Strategy", "SEO", "Growth", "Results"];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-grid overflow-hidden"
    >
      <div
        className="orb orb-blue w-[600px] h-[600px] top-[-10%] right-[-5%]"
        aria-hidden="true"
      />
      <div
        className="orb orb-cyan w-[400px] h-[400px] bottom-[10%] left-[-5%]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8">
            <div className="flex flex-wrap gap-2">
              {pills.map((pill) => (
                <span
                  key={pill}
                  className="px-3 py-1 rounded-full text-xs font-semibold border border-brand-blue/40 text-brand-cyan bg-brand-blue/10"
                >
                  {pill}
                </span>
              ))}
            </div>

            <div>
              <h1 className="text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight text-white mb-6">
                Forge Your
                <br />
                <span className="gradient-text">Competitive</span>
                <br />
                Edge
              </h1>
              <p className="text-lg lg:text-xl text-gray-400 leading-relaxed max-w-lg">
                We combine AI intelligence and data-driven SEO to transform how
                businesses grow. Real strategy. Measurable results.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-brand-blue to-brand-cyan hover:opacity-90 transition-all duration-200 shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5"
              >
                Start a Project
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="#results"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-gray-300 border border-white/10 hover:border-brand-blue/50 hover:text-white hover:bg-white/5 transition-all duration-200"
              >
                See Our Results
              </a>
            </div>

            <div className="flex items-center gap-8 pt-2">
              {[
                { value: "10x", label: "Average ROI" },
                { value: "150+", label: "Projects Delivered" },
                { value: "98%", label: "Client Retention" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-black gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 font-medium mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center relative">
            <div className="relative w-80 h-80 animate-float">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-blue/20 to-brand-cyan/20 blur-2xl" />
              <div className="relative gradient-border rounded-3xl p-1 glow-blue">
                <div className="rounded-[11px] bg-navy-800 p-8 flex items-center justify-center h-full">
                  <Image
                    src="/logo.png"
                    alt="SolutionForge Logo"
                    width={280}
                    height={280}
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="absolute top-8 -right-4 glass gradient-border rounded-xl px-4 py-3 glow-cyan">
              <div className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-semibold text-white">
                  AI-Powered Growth
                </span>
              </div>
            </div>

            <div className="absolute bottom-12 -left-4 glass gradient-border rounded-xl px-4 py-3 glow-blue">
              <div className="text-xs text-gray-400 mb-0.5">Organic Traffic</div>
              <div className="text-lg font-bold gradient-text">+340%</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="text-xs text-gray-500 font-medium tracking-widest uppercase">
          Scroll
        </div>
        <div className="w-px h-8 bg-gradient-to-b from-brand-blue to-transparent" />
      </div>
    </section>
  );
}
