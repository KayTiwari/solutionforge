const systemStages = [
  { number: "01", title: "Capture", detail: "Signals, context, and source data" },
  { number: "02", title: "Decide", detail: "Rules, models, and human checks" },
  { number: "03", title: "Act", detail: "A reliable handoff into real work" },
];

export default function Hero() {
  return (
    <>
      <section id="top" className="hero">
        <div className="shell hero-layout">
          <div className="hero-copy">
            <p className="eyebrow"><span /> AI systems · SEO &amp; content operations · Measurement</p>
            <h1>Make growth-critical work less manual.</h1>
            <p className="hero-lede">
              SolutionForge designs and ships practical AI workflows, SEO and content
              operations, and decision infrastructure for growth and operations teams
              replacing disconnected tools and manual handoffs.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">Bring us a bottleneck <span aria-hidden="true">↗</span></a>
              <a className="text-link" href="#approach">See the engagement method <span aria-hidden="true">↓</span></a>
            </div>
            <p className="hero-note">Strategy, implementation, and measurement—handled as one accountable engagement.</p>
          </div>

          <div className="system-map" aria-label="Anatomy of a three-stage operational workflow">
            <div className="system-map-header">
              <div>
                <span className="mono-label">SYSTEM ANATOMY / 001</span>
                <h2>Recurring work, redesigned.</h2>
              </div>
              <span className="status"><i /> Human-governed</span>
            </div>

            <div className="system-stages">
              {systemStages.map((stage) => (
                <div className="system-stage" key={stage.number}>
                  <span className="stage-number">{stage.number}</span>
                  <div>
                    <h3>{stage.title}</h3>
                    <p>{stage.detail}</p>
                  </div>
                  <span className="stage-arrow" aria-hidden="true">→</span>
                </div>
              ))}
            </div>

            <div className="system-standard">
              <p>Typical delivery includes</p>
              <ul>
                <li>an owner</li>
                <li>guardrails</li>
                <li>a baseline</li>
                <li>a handoff</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="confidence-bar">
        <div className="shell confidence-layout">
          <p>Designed for consequential work</p>
          <ul>
            <li>Human review where it matters</li>
            <li>Built around your existing stack</li>
            <li>Instrumented before it scales</li>
          </ul>
        </div>
      </div>
    </>
  );
}
