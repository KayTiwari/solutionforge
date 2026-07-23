import KineticHeading from "./KineticHeading";
import ProcessIcon, { type ProcessIconName } from "./ProcessIcon";

const services: Array<{
  icon: ProcessIconName;
  title: string;
  useWhen: string;
  description: string;
  deliverables: string[];
}> = [
  {
    icon: "automation",
    title: "AI workflow systems",
    useWhen: "Use when high-value work is trapped in repeatable research, routing, drafting, QA, or reporting.",
    description:
      "We map the decision path, identify where automation is safe, and build the workflow around your team, not around a model demo.",
    deliverables: ["Workflow architecture", "Model + tool integration", "Review controls", "Operating runbook"],
  },
  {
    icon: "search",
    title: "Search & content infrastructure",
    useWhen: "Use when acquisition depends on publishing quality, but the process is slow, fragmented, or impossible to measure.",
    description:
      "We connect technical SEO foundations, editorial operations, and AI-assisted production into a system your team can govern.",
    deliverables: ["Technical SEO audit", "Information architecture", "Editorial workflow", "Measurement plan"],
  },
  {
    icon: "decision",
    title: "Decision & measurement systems",
    useWhen: "Use when the data exists but teams still spend too much time assembling reports or debating what changed.",
    description:
      "We define the signal, automate the reporting path, and make next actions visible without adding another dashboard nobody owns.",
    deliverables: ["Metric definitions", "Data workflow", "Decision triggers", "Owner handoff"],
  },
];

export default function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="shell">
        <div className="section-intro">
          <p className="section-label">Expertise / 01</p>
          <div>
            <KineticHeading>One partner from bottleneck to working system.</KineticHeading>
            <p>
              The through-line is simple: find consequential recurring work, redesign
              it, implement the right path, and build in ownership from the start.
            </p>
          </div>
        </div>

        <div className="service-list">
          {services.map((service) => (
            <article className="service-row" key={service.title}>
              <span className="service-icon" aria-hidden="true">
                <ProcessIcon name={service.icon} />
              </span>
              <div className="service-heading">
                <h3>{service.title}</h3>
                <p className="service-use">{service.useWhen}</p>
              </div>
              <div className="service-detail">
                <p>{service.description}</p>
                <ul aria-label={`${service.title} deliverables`}>
                  {service.deliverables.map((deliverable) => <li key={deliverable}>{deliverable}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="fit-note">
          <p className="mono-label">A GOOD FIRST PROJECT</p>
          <p>One site, outreach motion, or workflow with a clear owner and an outcome the team can verify.</p>
          <a className="text-link" href="#contact">Describe yours <span className="link-icon" aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}
