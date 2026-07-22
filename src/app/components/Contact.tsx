const emailHref = "mailto:hello@solutionforge.dev?subject=SolutionForge%20project%20brief&body=Bottleneck%3A%0A%0ACurrent%20tools%3A%0A%0AWhat%20better%20looks%20like%3A%0A";

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="shell contact-layout">
        <div className="contact-copy">
          <p className="section-label section-label-light">Start / 04</p>
          <h2>Bring us one expensive bottleneck.</h2>
          <p>
            Start with the work that repeats, the place it breaks, and what a better
            operating day would look like. That is enough for a useful first conversation.
          </p>
          <a className="button button-light" href={emailHref}>
            Start the brief <span aria-hidden="true">↗</span>
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
              <div><h3>The bottleneck</h3><p>What repeats, stalls, or consumes expert attention?</p></div>
            </li>
            <li>
              <span>02</span>
              <div><h3>The operating context</h3><p>Which people, tools, data, and constraints shape the work?</p></div>
            </li>
            <li>
              <span>03</span>
              <div><h3>The useful outcome</h3><p>What observable change would make the system worth building?</p></div>
            </li>
          </ol>
          <p className="brief-note">No polished requirements document needed.</p>
        </div>
      </div>
    </section>
  );
}
