import LogoMark from "./LogoMark";

const footerLinks = [
  { label: "Expertise", href: "#services" },
  { label: "Method", href: "#approach" },
  { label: "Delivery", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-main">
        <a className="brand footer-brand" href="#top" aria-label="SolutionForge, back to top">
          <span className="brand-mark"><LogoMark size={34} /></span>
          <span>SolutionForge</span>
        </a>
        <p>Practical AI systems for work that should not stay manual.</p>
        <nav aria-label="Footer navigation">
          {footerLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
        </nav>
      </div>
      <div className="shell footer-base">
        <p>&copy; {new Date().getFullYear()} SolutionForge</p>
        <a href="mailto:hello@solutionforge.dev">hello@solutionforge.dev</a>
      </div>
    </footer>
  );
}
