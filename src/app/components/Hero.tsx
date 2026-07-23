import Image from "next/image";
import HeroVideo from "./HeroVideo";
import SlowScrollLink from "./SlowScrollLink";

export default function Hero() {
  return (
    <>
      <section id="top" className="hero">
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
              We <span className="hero-hot-word">build<span className="hero-word-ember" aria-hidden="true" /></span>{" "}
              websites and outreach systems.
            </h1>
            <p className="hero-lede">
              SolutionForge helps businesses show up clearly, reach prospects
              thoughtfully, and automate recurring research, reporting, and
              publishing—while keeping people in control.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                <span className="button-label">Discuss a project</span>
                <span className="button-icon" aria-hidden="true">↗</span>
              </a>
              <SlowScrollLink className="text-link text-link-down" href="#services">
                See what we build <span className="link-icon" aria-hidden="true">↓</span>
              </SlowScrollLink>
            </div>
            <p className="hero-note">Start with one useful project. Put it in real hands. Expand only when it earns the right.</p>
          </div>
        </div>
      </section>

      <div className="confidence-bar">
        <div className="shell confidence-layout">
          <p>Good places to start</p>
          <ul>
            <li>Business websites</li>
            <li>Thoughtful outreach</li>
            <li>Practical automation</li>
          </ul>
        </div>
      </div>
    </>
  );
}
