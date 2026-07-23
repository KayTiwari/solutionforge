import Image from "next/image";
import HeroVideo from "./HeroVideo";
import SlowScrollLink from "./SlowScrollLink";

const starterServices = [
  "Business websites",
  "Thoughtful outreach",
  "Practical automation",
  "Conversion landing pages",
  "Prospect research",
  "Technical SEO",
  "Content operations",
  "Reporting systems",
];

export default function Hero() {
  return (
    <>
      <div id="top" className="hero-pin-stage">
        <section className="hero">
          <div className="hero-media" aria-hidden="true">
            <Image
              className="hero-image"
              src="/images/blacksmith-forge-hero-faceless.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
            />
            <HeroVideo />
            <div className="hero-shade" />
          </div>

          <div className="shell hero-layout">
            <div className="hero-copy">
              <p className="eyebrow"><span /> Websites · Outreach · Workflow automation</p>
              <h1>
                We <span className="hero-hot-word">
                  <span className="sr-only">build</span>
                  <span className="hero-hot-word-visual" aria-hidden="true">
                    bu<span className="hero-flame-i">ı<span className="hero-i-flame" /></span>ld
                  </span>
                  <span className="hero-word-embers" aria-hidden="true">
                    <span className="hero-word-ember" />
                    <span className="hero-word-ember" />
                    <span className="hero-word-ember" />
                    <span className="hero-word-ember" />
                    <span className="hero-word-ember" />
                    <span className="hero-word-ember" />
                    <span className="hero-word-ember" />
                  </span>
                </span>{" "}
                websites and outreach systems.
              </h1>
              <p className="hero-lede">
                SolutionForge helps businesses show up clearly, reach prospects
                thoughtfully, and automate recurring research, reporting, and
                publishing—while keeping people in control.
              </p>
              <div className="hero-actions">
                <SlowScrollLink className="button button-primary" href="#contact">
                  <span className="button-label">Discuss a project</span>
                  <span className="button-icon" aria-hidden="true">↗</span>
                </SlowScrollLink>
                <SlowScrollLink className="text-link text-link-down" href="#services">
                  See what we build <span className="link-icon" aria-hidden="true">↓</span>
                </SlowScrollLink>
              </div>
              <p className="hero-note">Start with one useful project. Put it in people&apos;s hands. Expand only when it earns the right.</p>
            </div>
          </div>
        </section>
      </div>

      <div className="confidence-bar">
        <div className="shell confidence-layout">
          <p>Good places to start</p>
          <div
            className="confidence-ticker"
            role="region"
            aria-label="Services ticker. Focus or hover to pause."
            tabIndex={0}
          >
            <div className="confidence-ticker-track">
              <ul className="confidence-ticker-group">
                {starterServices.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
              <ul className="confidence-ticker-group" aria-hidden="true">
                {starterServices.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
