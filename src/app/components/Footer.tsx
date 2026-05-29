import LogoMark from "./LogoMark";

const links = {
  Services: ["AI Strategy", "SEO", "Growth Strategy", "AI Content", "Analytics"],
  Company: ["About", "Case Studies", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service"],
};

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-5">
              <LogoMark size={34} />
              <span className="text-lg font-bold">
                <span className="text-white">Solution</span>
                <span className="gradient-text">Forge</span>
              </span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-6">
              Forging competitive edges through AI strategy, data-driven SEO, and
              results that compound over time.
            </p>
            <div className="flex items-center gap-2">
              {["AI", "SEO", "Strategy", "Results"].map((tag, i) => (
                <span key={tag}>
                  <span className="text-xs text-gray-500 font-medium">{tag}</span>
                  {i < 3 && <span className="text-gray-700 mx-2">•</span>}
                </span>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">{category}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-500 text-sm hover:text-gray-300 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} SolutionForge. All rights reserved.
          </p>
          <a
            href="mailto:hello@solutionforge.dev"
            className="text-xs text-gray-600 hover:text-brand-cyan transition-colors"
          >
            hello@solutionforge.dev
          </a>
        </div>
      </div>
    </footer>
  );
}
