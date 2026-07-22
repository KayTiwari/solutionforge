const phases = [
  {
    number: "01",
    title: "Frame the work",
    description: "Observe the current process, its owners, exceptions, inputs, and cost of delay.",
    artifact: "System brief",
  },
  {
    number: "02",
    title: "Prove the path",
    description: "Test the riskiest assumption with real inputs before committing to a larger build.",
    artifact: "Working proof",
  },
  {
    number: "03",
    title: "Build the system",
    description: "Connect tools, rules, models, and review points into a usable, governed workflow.",
    artifact: "Implementation + handoff",
  },
  {
    number: "04",
    title: "Transfer control",
    description: "Instrument the result, document exceptions, and give the operating team ownership.",
    artifact: "Runbook + baseline",
  },
];

export default function Method() {
  return (
    <section id="approach" className="section approach-section">
      <div className="shell approach-layout">
        <div className="approach-thesis">
          <p className="section-label section-label-light">Method / 02</p>
          <h2>Good automation starts with operational clarity.</h2>
          <p>
            A prototype can impress in a day. A dependable system has to survive
            edge cases, ownership changes, and real customer data. The method is
            built around that difference.
          </p>

          <div className="method-standard">
            <span className="mono-label">THE STANDARD</span>
            <ul>
              <li>Start with the decision, not the tool</li>
              <li>Keep humans at consequential checkpoints</li>
              <li>Measure against the current baseline</li>
              <li>Design the handoff before deployment</li>
            </ul>
          </div>
        </div>

        <ol className="phase-list">
          {phases.map((phase) => (
            <li key={phase.number}>
              <span className="phase-number">{phase.number}</span>
              <div>
                <h3>{phase.title}</h3>
                <p>{phase.description}</p>
              </div>
              <span className="phase-artifact">{phase.artifact}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
