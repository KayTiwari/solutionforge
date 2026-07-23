import KineticHeading from "./KineticHeading";

const workflow = [
  { title: "Intake", detail: "Goals, audience, and constraints enter once" },
  { title: "Shape", detail: "The plan and success criteria become explicit" },
  { title: "Build", detail: "The site, outreach, or workflow takes working form" },
  { title: "Review", detail: "Your team checks consequential decisions" },
  { title: "Measure", detail: "The result is compared with baseline" },
];

const definitionOfDone = [
  ["Useful", "The work removes friction or enables a clear action."],
  ["Observable", "Quality, cost, and exceptions can be inspected."],
  ["Governed", "Owners and approval boundaries are explicit."],
  ["Transferable", "Your team can operate it without guesswork."],
];

export default function Delivery() {
  return (
    <section id="work" className="section work-section">
      <div className="shell">
        <div className="section-intro work-intro">
          <p className="section-label">Delivery / 04</p>
          <div>
            <KineticHeading>See what gets built before you buy a promise.</KineticHeading>
            <p>
              A credible engagement starts with an inspectable path and a clear
              definition of done. This blueprint shows how a website, outreach
              motion, or workflow moves from brief to owned result without presenting
              an illustrative scenario as client proof.
            </p>
          </div>
        </div>

        <div className="blueprint-grid">
          <article className="blueprint">
            <div className="blueprint-header">
              <div>
                <p className="mono-label">ILLUSTRATIVE DELIVERY BLUEPRINT</p>
                <h3>A controlled path from brief to owned result.</h3>
              </div>
              <span>Example workflow</span>
            </div>
            <ol className="workflow" aria-label="Delivery workflow from intake to measurement">
              {workflow.map((step, index) => (
                <li key={step.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h4>{step.title}</h4>
                    <p>{step.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </article>

          <aside className="done-panel">
            <p className="mono-label">DEFINITION OF DONE</p>
            <h3>A demo is not the deliverable.</h3>
            <dl>
              {definitionOfDone.map(([term, detail]) => (
                <div key={term}>
                  <dt>{term}</dt>
                  <dd>{detail}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
