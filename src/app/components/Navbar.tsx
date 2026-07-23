"use client";

import { useEffect, useState } from "react";
import LogoMark from "./LogoMark";

const navLinks = [
  { label: "Expertise", href: "#services" },
  { label: "Web + outreach", href: "#growth" },
  { label: "Method", href: "#approach" },
  { label: "Delivery", href: "#work" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <nav className="site-nav shell" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="SolutionForge, home">
          <span className="brand-mark"><LogoMark size={34} /></span>
          <span>SolutionForge</span>
        </a>

        <ul className="desktop-nav">
          {navLinks.map((link) => (
            <li key={link.href}><a href={link.href}>{link.label}</a></li>
          ))}
        </ul>

        <a className="nav-cta" href="#contact">Discuss a project <span className="link-icon" aria-hidden="true">↗</span></a>

        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </nav>

      <nav
        id="mobile-navigation"
        className={`mobile-nav${menuOpen ? " is-open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <div className="shell">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)}>Discuss a project <span className="link-icon" aria-hidden="true">↗</span></a>
        </div>
      </nav>
    </header>
  );
}
