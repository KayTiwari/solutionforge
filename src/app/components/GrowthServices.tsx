import KineticHeading from "./KineticHeading";
import ProcessIcon, { type ProcessIconName } from "./ProcessIcon";

const stage = (label: string, icon: ProcessIconName) => ({ label, icon });

const offers = [
  {
    className: "growth-offer-web",
    label: "Websites / 01",
    category: "Strategy · Design · Development",
    title: "Websites built to earn the next step.",
    useWhen:
      "For businesses launching, repositioning, or outgrowing a site that no longer explains what they do.",
    description:
      "We shape the message, map the path through the site, and design and build a responsive experience that makes the next action clear.",
    stages: [
      stage("Frame", "frame"),
      stage("Design", "design"),
      stage("Build", "build"),
      stage("Launch", "launch"),
    ],
    deliverables: [
      "Positioning + sitemap",
      "Copy direction + design",
      "Responsive development",
      "Launch + handoff",
    ],
    cta: "Talk about your website",
    href: "mailto:hello@solutionforge.dev?subject=Website%20project&body=Project%20type%3A%20Website%0A%0ACurrent%20situation%3A%0A%0AWhat%20needs%20to%20be%20true%20at%20launch%3A%0A",
  },
  {
    className: "growth-offer-outreach",
    label: "Outreach / 02",
    category: "Audience · Message · Follow-up",
    title: "Outreach your team can run.",
    useWhen:
      "For businesses with a strong offer but no consistent way to identify good-fit prospects, start conversations, and follow up.",
    description:
      "We define the audience, develop the message, and set up a respectful outreach workflow your team can review, measure, and improve.",
    stages: [
      stage("Target", "target"),
      stage("Research", "research"),
      stage("Reach", "reach"),
      stage("Learn", "learn"),
    ],
    deliverables: [
      "Audience definition",
      "Prospect research",
      "Messaging + sequences",
      "Tracking + handoff",
    ],
    cta: "Talk about outreach",
    href: "mailto:hello@solutionforge.dev?subject=Business%20outreach%20project&body=Project%20type%3A%20Business%20outreach%0A%0AAudience%20and%20offer%3A%0A%0ACurrent%20outreach%20process%3A%0A",
  },
];

export default function GrowthServices() {
  return (
    <section id="growth" className="section growth-section">
      <div className="shell">
        <div className="section-intro growth-intro">
          <p className="section-label">Build + reach / 02</p>
          <div>
            <KineticHeading>A stronger front door and a better way to start conversations.</KineticHeading>
            <p>
              We build websites and help businesses run thoughtful outreach,
              connecting clear positioning with practical systems a team can own.
            </p>
          </div>
        </div>

        <div className="growth-grid">
          {offers.map((offer) => (
            <article className={`growth-offer ${offer.className}`} key={offer.label}>
              <div className="growth-offer-topline">
                <p className="mono-label">{offer.label}</p>
                <p>{offer.category}</p>
              </div>

              <h3>{offer.title}</h3>
              <p className="growth-offer-use">{offer.useWhen}</p>

              <div className="growth-path">
                <p className="mono-label">Working path</p>
                <ol aria-label={`${offer.label.split(" / ")[0]} working path`}>
                  {offer.stages.map((pathStage) => (
                    <li key={pathStage.label}>
                      <span className="growth-path-icon" aria-hidden="true">
                        <ProcessIcon name={pathStage.icon} />
                      </span>
                      {pathStage.label}
                    </li>
                  ))}
                </ol>
              </div>

              <p className="growth-offer-description">{offer.description}</p>

              <div className="growth-deliverables">
                <p className="mono-label">What we can handle</p>
                <ul>
                  {offer.deliverables.map((deliverable) => (
                    <li key={deliverable}>{deliverable}</li>
                  ))}
                </ul>
              </div>

              <a className="text-link" href={offer.href}>
                {offer.cta} <span className="link-icon" aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
