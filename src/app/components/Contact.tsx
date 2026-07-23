import KineticHeading from "./KineticHeading";

const emailHref = "mailto:hello@solutionforge.dev?subject=SolutionForge%20project%20brief&body=Project%20type%20%28website%2C%20outreach%2C%20or%20automation%29%3A%0A%0ACurrent%20situation%3A%0A%0AWhat%20better%20looks%20like%3A%0A";

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="shell contact-layout">
        <div className="contact-copy">
          <p className="section-label section-label-light">Start / 05</p>
          <KineticHeading>Tell us what needs to work better.</KineticHeading>
          <p>
            Tell us whether you need a website, outreach support, or a better
            workflow. Tell us what is getting in the way today. That is enough for a
            useful first conversation.
          </p>
          <a className="button button-light" href={emailHref}>
            <span className="button-label">Start the brief</span>
            <span className="button-icon" aria-hidden="true">↗</span>
          </a>
          <a className="contact-email" href="mailto:hello@solutionforge.dev">hello@solutionforge.dev</a>
        </div>

        <div className="brief-panel">
          <div className="brief-panel-header">
            <span className="mono-label">PROJECT BRIEF / START HERE</span>
            <span aria-hidden="true">↘</span>
          </div>
          <ol>
            <li>
              <span>01</span>
              <div><h3>The project</h3><p>What do you need to build, launch, or improve?</p></div>
            </li>
            <li>
              <span>02</span>
              <div><h3>The context</h3><p>Who is it for, what exists today, and which constraints matter?</p></div>
            </li>
            <li>
              <span>03</span>
              <div><h3>The useful outcome</h3><p>What observable change would make the project worth doing?</p></div>
            </li>
          </ol>
          <p className="brief-note">No polished requirements document needed.</p>
        </div>
      </div>
    </section>
  );
}
