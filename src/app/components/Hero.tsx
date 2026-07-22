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
          <div className="hero-shade" />
          <div className="hero-motion" aria-hidden="true">
            <div className="hero-motion-header">
              <span>Forge footage / Pexels</span>
              <span>00:20</span>
            </div>
            <HeroVideo />
          </div>
        </div>

        <div className="shell hero-layout">
          <div className="hero-copy">
            <p className="eyebrow"><span /> AI workflows · SEO operations · Reporting</p>
            <h1>Automate the work your team repeats every week.</h1>
            <p className="hero-lede">
              We help growth and operations teams automate research, reporting,
              and publishing—while keeping the tools, approvals, and judgment
              they already trust.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                <span className="button-label">Show us the busywork</span>
                <span className="button-icon" aria-hidden="true">↗</span>
              </a>
              <SlowScrollLink className="text-link text-link-down" href="#services">
                See what we build <span className="link-icon" aria-hidden="true">↓</span>
              </SlowScrollLink>
            </div>
            <p className="hero-note">Start with one workflow. Prove it with real inputs. Expand only when it earns the right.</p>
          </div>
        </div>
      </section>

      <div className="confidence-bar">
        <div className="shell confidence-layout">
          <p>Good places to start</p>
          <ul>
            <li>Research &amp; reporting</li>
            <li>SEO &amp; publishing</li>
            <li>Measurement &amp; alerts</li>
          </ul>
        </div>
      </div>
    </>
  );
}
