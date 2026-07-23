const phases = [
  {
    number: "01",
    title: "Frame the work",
    description: "Clarify the audience, desired action, current process, constraints, and cost of delay.",
    artifact: "Project brief",
  },
  {
    number: "02",
    title: "Prove the path",
    description: "Test the riskiest assumption with real content, prospects, or inputs before committing to a larger build.",
    artifact: "Working proof",
  },
  {
    number: "03",
    title: "Build the solution",
    description: "Design and implement the site, outreach motion, or workflow with clear review points and ownership.",
    artifact: "Implementation + handoff",
  },
  {
    number: "04",
    title: "Transfer control",
    description: "Instrument the result, document how it runs, and give the operating team ownership.",
    artifact: "Documentation + baseline",
  },
];

export default function Method() {
  return (
    <section id="approach" className="section approach-section">
      <div className="shell approach-layout">
        <div className="approach-thesis">
          <p className="section-label section-label-light">Method / 03</p>
          <h2>Good delivery starts with a clear business problem.</h2>
          <p>
            A polished page, a long prospect list, or an AI demo is not enough.
            The work has to fit your audience, your team, and the way decisions
            get made. The method is built around that standard.
          </p>

          <div className="method-standard">
            <span className="mono-label">THE STANDARD</span>
            <ul>
              <li>Start with the business action, not the tool</li>
              <li>Keep humans at consequential checkpoints</li>
              <li>Measure against the current baseline</li>
              <li>Design the handoff before launch</li>
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
